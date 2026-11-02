#!/usr/bin/env node
// Encrypts the roster snapshot for the public site, so the chat list can only be read with the site code.
// The code is never stored in the repo: pass it in HQ_PASSWORD.
//
//   HQ_PASSWORD=<code> node scripts/lock-roster.mjs            roster.plain.json -> roster.json (encrypted)
//   HQ_PASSWORD=<code> node scripts/lock-roster.mjs --unlock   roster.json -> roster.plain.json (to edit or re-key)
//
// Format: PBKDF2-SHA256 (600k iterations) -> AES-256-GCM; ct = ciphertext || 16-byte tag (what Web Crypto expects).
// site/lock.html does the matching decryption in the browser.
import { readFileSync, writeFileSync } from 'node:fs';
import { pbkdf2Sync, randomBytes, createCipheriv, createDecipheriv } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ITER = 600000;
const pw = process.env.HQ_PASSWORD;
if (!pw) { console.error('Set HQ_PASSWORD to the site code.'); process.exit(1); }
process.chdir(fileURLToPath(new URL('..', import.meta.url)));

if (process.argv.includes('--unlock')) {
  const j = JSON.parse(readFileSync('roster.json', 'utf8'));
  if (j.hq !== 'locked') { console.error('roster.json is not encrypted.'); process.exit(1); }
  const key = pbkdf2Sync(pw, Buffer.from(j.salt, 'base64'), j.iter, 32, 'sha256');
  const buf = Buffer.from(j.ct, 'base64');
  const d = createDecipheriv('aes-256-gcm', key, Buffer.from(j.iv, 'base64'));
  d.setAuthTag(buf.subarray(buf.length - 16));
  let plain;
  try { plain = Buffer.concat([d.update(buf.subarray(0, buf.length - 16)), d.final()]); }
  catch { console.error('Wrong code.'); process.exit(1); }
  writeFileSync('roster.plain.json', JSON.stringify(JSON.parse(plain.toString('utf8')), null, 2) + '\n');
  console.log('wrote roster.plain.json (not committed; see .gitignore)');
} else {
  const plain = Buffer.from(JSON.stringify(JSON.parse(readFileSync('roster.plain.json', 'utf8'))), 'utf8');
  const salt = randomBytes(16), iv = randomBytes(12);
  const key = pbkdf2Sync(pw, salt, ITER, 32, 'sha256');
  const c = createCipheriv('aes-256-gcm', key, iv);
  const ct = Buffer.concat([c.update(plain), c.final(), c.getAuthTag()]);
  writeFileSync('roster.json', JSON.stringify({
    hq: 'locked', v: 1, kdf: 'PBKDF2-SHA256', iter: ITER, cipher: 'AES-256-GCM',
    salt: salt.toString('base64'), iv: iv.toString('base64'), ct: ct.toString('base64'),
  }) + '\n');
  console.log('encrypted roster.plain.json -> roster.json');
}
