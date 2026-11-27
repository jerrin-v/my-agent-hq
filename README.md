# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an Oblivion-style token board of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 releases that went live, newest first. Updated by the **Publish site** workflow after each successful release; the hourly chat-sync snapshots are not listed.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 27 Nov 2026, 11:35:23 AM UAE<br><sub>Fri 27 Nov 2026, 7:35:23 AM UTC</sub> | Usage limits above 75% shown in red | v1.3.11 | [`e842a11`](https://github.com/jerrin-v/my-agent-hq/commit/e842a11b8c12648c2bee1d0c7118fe7dc9cb6edb) |
| Wed 25 Nov 2026, 4:16:57 PM UAE<br><sub>Wed 25 Nov 2026, 12:16:57 PM UTC</sub> | Particle view for Tokens by block, Block & Node theme button, glass group panel | v1.3.10 | [`c720dde`](https://github.com/jerrin-v/my-agent-hq/commit/c720dde7d4848a99d4cae68f40975fd04264010c) |
| Wed 25 Nov 2026, 1:02:26 PM UAE<br><sub>Wed 25 Nov 2026, 9:02:26 AM UTC</sub> | SWITCH button opens the 2D HUD (Block + Node views) | v1.2.98 | [`2f3eddb`](https://github.com/jerrin-v/my-agent-hq/commit/2f3eddbdd9cc02c35e8132b1dd0aac631cdfcfff) |
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
