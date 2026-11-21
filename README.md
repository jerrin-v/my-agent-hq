# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an Oblivion-style token board of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Sun 22 Nov 2026, 3:02:01 AM UAE<br><sub>Sat 21 Nov 2026, 11:02:01 PM UTC</sub> | My Agent HQ v1.2.70: token signal as a step trace with intro animation | v1.2.70 | [`43d68f6`](https://github.com/jerrin-v/my-agent-hq/commit/43d68f6f62cc85fef49ac92840e6bd06691d9838) |
| Sun 22 Nov 2026, 2:54:17 AM UAE<br><sub>Sat 21 Nov 2026, 10:54:17 PM UTC</sub> | My Agent HQ v1.2.68: version box in the header (board + sign-in page), taller token-signal wave, fill-only hover/selection, scan bar without edge lines | v1.2.68 | [`5ceea1b`](https://github.com/jerrin-v/my-agent-hq/commit/5ceea1b7353aeb2079dfbdb956c0b905f84f3513) |
| Sun 22 Nov 2026, 2:38:21 AM UAE<br><sub>Sat 21 Nov 2026, 10:38:21 PM UTC</sub> | My Agent HQ v1.2.63: last-active radar heading back above the radar | v1.2.63 | [`c8a2b0b`](https://github.com/jerrin-v/my-agent-hq/commit/c8a2b0b839a222decfc498d51e1b91251a47b9c9) |
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
