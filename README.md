# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an Oblivion-style token board of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Sun 22 Nov 2026, 12:24:20 PM UAE<br><sub>Sun 22 Nov 2026, 8:24:20 AM UTC</sub> | Publish site: retry the Pages deploy up to three times | v1.2.84 | [`9feb02d`](https://github.com/jerrin-v/my-agent-hq/commit/9feb02d66e4c02a4432ff2a72703b1b7103a73b5) |
| Sun 22 Nov 2026, 12:21:50 PM UAE<br><sub>Sun 22 Nov 2026, 8:21:50 AM UTC</sub> | Chat sync: new floor snapshot | v1.2.84 | [`2573876`](https://github.com/jerrin-v/my-agent-hq/commit/2573876c23f8bb1b1cc1d5fe23ec6c95c230ed68) |
| Sun 22 Nov 2026, 12:15:06 PM UAE<br><sub>Sun 22 Nov 2026, 8:15:06 AM UTC</sub> | Chat sync: new floor snapshot | v1.2.84 | [`974863d`](https://github.com/jerrin-v/my-agent-hq/commit/974863dd0533ce66e543c2638588174f9c7abb54) |
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
