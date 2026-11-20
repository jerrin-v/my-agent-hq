# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 20 Nov 2026, 11:43:21 PM UAE<br><sub>Fri 20 Nov 2026, 7:43:21 PM UTC</sub> | My Agent HQ v1.1.89–v1.1.90: full sharpness back on big screens (8.5M px budget) | v1.1.90 | [`a9af960`](https://github.com/jerrin-v/my-agent-hq/commit/a9af9602c0afb08781659347fb6b1e90a3a612df) |
| Fri 20 Nov 2026, 11:25:27 PM UAE<br><sub>Fri 20 Nov 2026, 7:25:27 PM UTC</sub> | Chat sync: new floor snapshot | v1.1.88 | [`143267f`](https://github.com/jerrin-v/my-agent-hq/commit/143267f8540b4105159f5fdc8c64a9a73551c6d0) |
| Fri 20 Nov 2026, 11:13:30 PM UAE<br><sub>Fri 20 Nov 2026, 7:13:30 PM UTC</sub> | My Agent HQ v1.1.84–v1.1.87: GPU fixes for big screens (cheap glass blur, no panel backdrop blur, no endless CSS loops, ~4M px / 20 fps on 4K) | v1.1.87 | [`465dbd3`](https://github.com/jerrin-v/my-agent-hq/commit/465dbd3cd73d5c8ab4869b61091d5a0dd15e6ea6) |
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
