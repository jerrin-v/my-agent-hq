# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 20 Nov 2026, 5:00:22 PM UAE<br><sub>Fri 20 Nov 2026, 1:00:22 PM UTC</sub> | My Agent HQ v1.1.83: Node view core at 80 % | v1.1.83 | [`df9a843`](https://github.com/jerrin-v/my-agent-hq/commit/df9a843a563621daa58db4c5aeb3d17ae9ad6c10) |
| Fri 20 Nov 2026, 4:25:37 PM UAE<br><sub>Fri 20 Nov 2026, 12:25:37 PM UTC</sub> | Chat sync: new floor snapshot | v1.1.82 | [`8a07cb6`](https://github.com/jerrin-v/my-agent-hq/commit/8a07cb6a5922d5f73302ae9d9dfd89b6c7bd0c16) |
| Fri 20 Nov 2026, 3:35:39 PM UAE<br><sub>Fri 20 Nov 2026, 11:35:39 AM UTC</sub> | My Agent HQ v1.1.82: smooth panel folds (reused canvas layers, stable dots, full-rate canvas while the stage moves, System card fade fix) | v1.1.82 | [`b1a4f92`](https://github.com/jerrin-v/my-agent-hq/commit/b1a4f926462e16d2a88225ca222381117a866f04) |
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
