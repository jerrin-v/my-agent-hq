# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 20 Nov 2026, 9:12:37 AM UAE<br><sub>Fri 20 Nov 2026, 5:12:37 AM UTC</sub> | My Agent HQ v1.1.74: same grey for lines to asleep chats in Node view | v1.1.74 | [`9318356`](https://github.com/jerrin-v/my-agent-hq/commit/9318356d07d5f931f65c79b3f19ac2a5bfa149ba) |
| Fri 20 Nov 2026, 9:07:37 AM UAE<br><sub>Fri 20 Nov 2026, 5:07:37 AM UTC</sub> | My Agent HQ v1.1.73: sharp cut-off on the top-bar block strip | v1.1.73 | [`49d9c98`](https://github.com/jerrin-v/my-agent-hq/commit/49d9c9854b2b0ad5788b41c4866486261490025a) |
| Fri 20 Nov 2026, 9:01:22 AM UAE<br><sub>Fri 20 Nov 2026, 5:01:22 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.72 | [`5637a8f`](https://github.com/jerrin-v/my-agent-hq/commit/5637a8f6cbc17cc8f86eaead57f9bbb83a35156b) |
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
