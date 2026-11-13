# Jerrin Varghese — Claude HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of Claude HQ (My Agent HQ), an interactive 3D sci-fi office floor of my Claude workspace: every room is a project, every robot is a chat. The live version is a private claude.ai artifact.

This repo holds the site only in sealed form (`backup/`). On every update, the **Publish site** workflow opens it with the
`SITE_BACKUP_KEY` secret, locks the page and its data with the `SITE_PASSWORD` secret and publishes it to GitHub Pages. Nothing readable is stored here.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 13 Nov 2026, 9:06:18 AM UAE<br><sub>Fri 13 Nov 2026, 5:06:18 AM UTC</sub> | Chat sync: new floor snapshot | v1.0.86 | [`a0ad6ad`](https://github.com/jerrin-v/my-agent-hq/commit/a0ad6ad4c6a2ccddaf6c0bed23a969f82e6691b9) |
| Thu 12 Nov 2026, 4:43:52 PM UAE<br><sub>Thu 12 Nov 2026, 12:43:52 PM UTC</sub> | v1.0.94: 2D frame notch round AGENT STATUS + status key (angle cuts), band line spacing, narrow-screen camera menu, white blinking tag bar | v1.0.86 | [`2d101e4`](https://github.com/jerrin-v/my-agent-hq/commit/2d101e47ddc2b7fcad5c7d46539ec4ed86f584cb) |
| Thu 12 Nov 2026, 4:26:16 PM UAE<br><sub>Thu 12 Nov 2026, 12:26:16 PM UTC</sub> | Chat sync: new floor snapshot | v1.0.86 | [`47df4fa`](https://github.com/jerrin-v/my-agent-hq/commit/47df4fa856e0167bbd4103af08ee4da92e011aee) |
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
