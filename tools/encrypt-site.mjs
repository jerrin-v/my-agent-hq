// Builds the password-protected GitHub Pages copy of Claude HQ.
//
//   SITE_PASSWORD=… node tools/encrypt-site.mjs <unlocked-backup-dir> <output-dir>
//
// <unlocked-backup-dir> holds claude-hq.html (the page as published to claude.ai: a body fragment),
// roster.json (the floor snapshot) and, optionally, claude-hq-v1.0.2.html (the old Oblivion page).
// Each page is wrapped into a full document and encrypted with AES-256-GCM; roster.json becomes
// roster.json.enc. The key comes from SITE_PASSWORD through PBKDF2-SHA256 (600 000 rounds) with a fresh
// random salt on every build, so a new build (or a new password) signs everyone out. The sign-in page is
// tools/gate.html: a 6-digit SITE_PASSWORD gets the keypad, anything else gets a password field.
// The password is read from the environment only and is never printed or written to disk.
import { createCipheriv, pbkdf2Sync, randomBytes } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const [src, out] = process.argv.slice(2);
const pw = process.env.SITE_PASSWORD || '';
if (!src || !out) { console.error('usage: node tools/encrypt-site.mjs <unlocked-backup-dir> <output-dir>'); process.exit(2); }
const codeMode = /^\d{6}$/.test(pw);
if (!codeMode && pw.length < 8) { console.error('SITE_PASSWORD must be a 6-digit code or at least 8 characters.'); process.exit(1); }
for (const f of ['claude-hq.html', 'roster.json']) if (!existsSync(join(src, f))) { console.error(`The backup has no ${f}.`); process.exit(1); }

const ITER = 600000;
const salt = randomBytes(16);
const key = pbkdf2Sync(pw, salt, ITER, 32, 'sha256');
const enc = buf => { const iv = randomBytes(12); const c = createCipheriv('aes-256-gcm', key, iv); const ct = Buffer.concat([c.update(buf), c.final()]); return Buffer.concat([iv, ct, c.getAuthTag()]); };

const gate = readFileSync(new URL('./gate.html', import.meta.url), 'utf8');
if (!gate.includes('/*PAYLOAD*/')) { console.error('tools/gate.html has no /*PAYLOAD*/ slot.'); process.exit(1); }
const built = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
const wrap = fragment => ['<!doctype html>', '<html lang="en">', '<head>', '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">',
  '<meta name="robots" content="noindex,nofollow">',
  '<style>html,body{margin:0;height:100%;background:#04060A}img{max-width:100%}[hidden]{display:none!important}</style>',
  '</head>', '<body>', fragment, '</body>', '</html>', ''].join('\n');

rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
const pages = [['claude-hq.html', 'index.html', null], ['claude-hq-v1.0.2.html', 'versions/v1.0.2-oblivion.html', 'v1.0.2']];
let n = 0, version = '';
for (const [from, to, fixedVer] of pages) {
  if (!existsSync(join(src, from))) continue;
  const fragment = readFileSync(join(src, from), 'utf8');
  const ver = fixedVer || (fragment.match(/<span class="ver">(v[\d.]+)<\/span>/) || [])[1] || '';
  if (!fixedVer) version = ver;
  const payload = { s: salt.toString('base64'), i: ITER, d: enc(Buffer.from(wrap(fragment))).toString('base64'), m: codeMode ? 'code' : 'password', v: ver, t: built };
  mkdirSync(dirname(join(out, to)), { recursive: true });
  writeFileSync(join(out, to), gate.replace('/*PAYLOAD*/', () => JSON.stringify(payload).replace(/</g, '\\u003c')));
  n++;
}
writeFileSync(join(out, 'roster.json.enc'), enc(readFileSync(join(src, 'roster.json'))));

// Pages extras: no Jekyll processing, no search indexing.
writeFileSync(join(out, '.nojekyll'), '');
writeFileSync(join(out, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
console.log(`Encrypted ${n} page(s) (${version || 'no version'}) and the roster into ${out} · sign-in: ${codeMode ? 'keypad' : 'password'}`);
