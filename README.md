# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an Oblivion-style token board of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Sun 22 Nov 2026, 12:15:06 PM UAE<br><sub>Sun 22 Nov 2026, 8:15:06 AM UTC</sub> | Chat sync: new floor snapshot | v1.2.84 | [`974863d`](https://github.com/jerrin-v/my-agent-hq/commit/974863dd0533ce66e543c2638588174f9c7abb54) |
| Sun 22 Nov 2026, 12:03:43 PM UAE<br><sub>Sun 22 Nov 2026, 8:03:43 AM UTC</sub> | My Agent HQ v1.2.84: lock outro (sections fold out before the lock screen) | v1.2.84 | [`807a78f`](https://github.com/jerrin-v/my-agent-hq/commit/807a78fe908aa3ba689250f40fec279eb8e8ce13) |
| Sun 22 Nov 2026, 11:00:12 AM UAE<br><sub>Sun 22 Nov 2026, 7:00:12 AM UTC</sub> | My Agent HQ v1.2.83: estimate sync-row rule + spacing, coloured scan readout, smaller version box (board + sign-in page) | v1.2.83 | [`11370db`](https://github.com/jerrin-v/my-agent-hq/commit/11370db0e6a3f66622770a24d3cd58203cc1854b) |
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
