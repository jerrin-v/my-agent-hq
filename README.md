# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 20 Nov 2026, 3:35:39 PM UAE<br><sub>Fri 20 Nov 2026, 11:35:39 AM UTC</sub> | My Agent HQ v1.1.82: smooth panel folds (reused canvas layers, stable dots, full-rate canvas while the stage moves, System card fade fix) | v1.1.82 | [`b1a4f92`](https://github.com/jerrin-v/my-agent-hq/commit/b1a4f926462e16d2a88225ca222381117a866f04) |
| Fri 20 Nov 2026, 3:26:10 PM UAE<br><sub>Fri 20 Nov 2026, 11:26:10 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.81 | [`938cf39`](https://github.com/jerrin-v/my-agent-hq/commit/938cf396a4c9c443e144dac64115c1b7729fffc9) |
| Fri 20 Nov 2026, 3:23:38 PM UAE<br><sub>Fri 20 Nov 2026, 11:23:38 AM UTC</sub> | My Agent HQ v1.1.78–v1.1.81: folded System card (own rail card, same height, no button, label at top) | v1.1.81 | [`17121e2`](https://github.com/jerrin-v/my-agent-hq/commit/17121e265c27409e02fda9c01d358454909066ff) |
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
