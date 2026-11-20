# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 20 Nov 2026, 11:25:52 AM UAE<br><sub>Fri 20 Nov 2026, 7:25:52 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.75 | [`8924f71`](https://github.com/jerrin-v/my-agent-hq/commit/8924f71949ba70966b39c31ec83dd8a67b7b456e) |
| Fri 20 Nov 2026, 10:32:36 AM UAE<br><sub>Fri 20 Nov 2026, 6:32:36 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.75 | [`7451165`](https://github.com/jerrin-v/my-agent-hq/commit/74511651884404654a5aff4f17a247daef7e91dc) |
| Fri 20 Nov 2026, 10:26:06 AM UAE<br><sub>Fri 20 Nov 2026, 6:26:06 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.75 | [`253511d`](https://github.com/jerrin-v/my-agent-hq/commit/253511dd37aa4dfd9cf54a08c60e8d0ee9ce28f9) |
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
