# Jerrin Varghese — Claude HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of Claude HQ (My Agent HQ), an interactive 3D sci-fi office floor of my Claude workspace: every room is a project, every robot is a chat. The live version is a private claude.ai artifact.

This repo holds the site only in sealed form (`backup/`). On every update, the **Publish site** workflow opens it with the
`SITE_BACKUP_KEY` secret, locks the page and its data with the `SITE_PASSWORD` secret and publishes it to GitHub Pages. Nothing readable is stored here.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 06 Nov 2026, 18:37:24 UAE<br><sub>Fri 06 Nov 2026, 14:37:24 UTC</sub> | README: Latest publishes table (last 3 pushes, full timestamps), kept up to date by the publish workflow | v1.0.10 | [`0538d20`](https://github.com/jerrin-v/my-agent-hq/commit/0538d2088ceeae83b682cbcf0a7288b724f62e73) |
| Fri 06 Nov 2026, 14:16:13 UAE<br><sub>Fri 06 Nov 2026, 10:16:13 UTC</sub> | Chat sync: new floor snapshot | v1.0.10 | [`f4dde68`](https://github.com/jerrin-v/my-agent-hq/commit/f4dde6834050a307cfe6e8e4ddd3bbfd2e39fc7a) |
| Fri 06 Nov 2026, 14:05:07 UAE<br><sub>Fri 06 Nov 2026, 10:05:07 UTC</sub> | HUD hover card for token figures | v1.0.10 | [`22dd998`](https://github.com/jerrin-v/my-agent-hq/commit/22dd99839a0dff467d8453cecaf51af658fb83e2) |
<!-- latest-publishes:end -->

## Change the password (works even if you forgot the old one)

1. **Settings → Secrets and variables → Actions → `SITE_PASSWORD` → Update** (type the new code or password, save). A 6-digit code shows the keypad; anything longer (8+ characters) shows a password field.
2. **Actions → Publish site → Run workflow → Run workflow.**
3. About 1–2 minutes later the new password is live and the old one stops working.

## One-time setup

- Secrets: `SITE_BACKUP_KEY` (the `AGE-SECRET-KEY-` line from the private key file) and `SITE_PASSWORD`.
- **Settings → Pages → Build and deployment → Source: GitHub Actions.**

Visitors can tick "Remember me for today" to stay unlocked until midnight in that browser. Add `?signout` to the address to sign out.

## Full backup — works without claude.ai

- `backup/claude-hq.html.age` — the page, exactly as published on claude.ai, sealed.
- `backup/roster.json.age` — the floor snapshot (rooms, chats, activity and token estimates), sealed. The chat sync replaces it every 6 hours when something changed.
- `backup/claude-hq-v1.0.2.html.age` — the older v1.0.2 (Oblivion) page, sealed, published at `/versions/v1.0.2-oblivion.html`.
- `backup/BUILD.txt` — which version and which sync each file holds, and when it was packed.
- `keys/backup-recipient.txt` — the public key the backup is sealed with. It can't open anything.
- `tools/` and `.github/workflows/publish.yml` — the sign-in page and the tools that seal, lock and publish the site.
- Design updates are packed and pushed when I approve them; the version shows at the bottom of the sign-in page.

**If claude.ai is ever gone, see [RESTORE.md](RESTORE.md)**: open the backup on a computer, publish this copy without a password, or rebuild the live app.

Note: the page and its data are password-locked. Only the sign-in page is readable; the 3D engine and fonts load from public CDNs after sign-in.
