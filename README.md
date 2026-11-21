# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Sat 21 Nov 2026, 11:21:49 AM UAE<br><sub>Sat 21 Nov 2026, 7:21:49 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.90 | [`3094af8`](https://github.com/jerrin-v/my-agent-hq/commit/3094af8fd11683a4cffe7dc05e02d0c2cd92d512) |
| Sat 21 Nov 2026, 12:26:24 AM UAE<br><sub>Fri 20 Nov 2026, 8:26:24 PM UTC</sub> | Chat sync: new floor snapshot | v1.1.90 | [`a334769`](https://github.com/jerrin-v/my-agent-hq/commit/a3347695b20adb9cc273352b682cc986d7f6b589) |
| Fri 20 Nov 2026, 11:43:21 PM UAE<br><sub>Fri 20 Nov 2026, 7:43:21 PM UTC</sub> | My Agent HQ v1.1.89–v1.1.90: full sharpness back on big screens (8.5M px budget) | v1.1.90 | [`a9af960`](https://github.com/jerrin-v/my-agent-hq/commit/a9af9602c0afb08781659347fb6b1e90a3a612df) |
<!-- latest-publishes:end -->

## Full backup — works without claude.ai

- `backup/claude-hq.html.age` — the page, exactly as published on claude.ai, sealed.
- `backup/roster.json.age` — the snapshot (blocks, chats, activity and token estimates), sealed. The hourly chat sync replaces it when something changed.
- `backup/claude-hq-v1.0.2.html.age` — the older v1.0.2 (Oblivion) page, sealed, published at `/versions/v1.0.2-oblivion.html`.
- `backup/BUILD.txt` — which version and which sync each file holds, and when it was packed.
- `keys/backup-recipient.txt` — the public key the backup is sealed with. It can't open anything.
- `tools/` and `.github/workflows/publish.yml` — the sign-in page and the tools that seal, lock and publish the site.
- Design updates are packed and pushed when I approve them; the version shows at the bottom of the sign-in page.

Note: the 3D engine and fonts load from public CDNs.
