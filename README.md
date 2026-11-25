# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an Oblivion-style token board of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 releases that went live, newest first. Updated by the **Publish site** workflow after each successful release; the hourly chat-sync snapshots are not listed.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Wed 25 Nov 2026, 1:02:26 PM UAE<br><sub>Wed 25 Nov 2026, 9:02:26 AM UTC</sub> | SWITCH button opens the 2D HUD (Block + Node views) | v1.2.98 | [`2f3eddb`](https://github.com/jerrin-v/my-agent-hq/commit/2f3eddbdd9cc02c35e8132b1dd0aac631cdfcfff) |
| Wed 25 Nov 2026, 10:27:00 AM UAE<br><sub>Wed 25 Nov 2026, 6:27:00 AM UTC</sub> | Every section on the background grid with equal margins (board + lock screen) | v1.2.97 | [`3fe0674`](https://github.com/jerrin-v/my-agent-hq/commit/3fe0674145346030f3068ba6798fc41aea1590c6) |
| Tue 24 Nov 2026, 10:04:25 AM UAE<br><sub>Tue 24 Nov 2026, 6:04:25 AM UTC</sub> | Local Time clock box back to dark green (v1.2.94 look) | v1.2.96 | [`f770c8d`](https://github.com/jerrin-v/my-agent-hq/commit/f770c8d1748207ded171f5506fdf9d6da980c52c) |
<!-- latest-publishes:end -->

## Full backup — works without claude.ai

- `backup/claude-hq.html.age` — the page, exactly as published on claude.ai, sealed.
- `backup/roster.json.age` — the snapshot (blocks, chats, activity and token estimates), sealed. The hourly chat sync replaces it after every run.
- `backup/claude-hq-v1.2.32-hud.html.age` — **safe backup of v1.2.32**, sealed: the last version with the 2D HUD (Block and Node views) next to the Grid view. Kept as a restore point; from v1.2.33 the site is the Grid view only.
- `backup/claude-hq-v1.0.2.html.age` — the older v1.0.2 (Oblivion) page, sealed, published at `/versions/v1.0.2-oblivion.html`.
- `backup/BUILD.txt` — which version and which sync each file holds, and when it was packed.
- `keys/backup-recipient.txt` — the public key the backup is sealed with. It can't open anything.
- `tools/` and `.github/workflows/publish.yml` — the sign-in page and the tools that seal, lock and publish the site.
- Design updates are packed and pushed when I approve them; the version shows at the bottom of the sign-in page.

Note: the fonts load from Google Fonts.
