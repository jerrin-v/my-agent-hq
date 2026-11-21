# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Sat 21 Nov 2026, 1:35:07 PM UAE<br><sub>Sat 21 Nov 2026, 9:35:07 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.90 | [`a035615`](https://github.com/jerrin-v/my-agent-hq/commit/a035615988bb5139bc290b12a91c57db3a8ebb6d) |
| Sat 21 Nov 2026, 12:25:51 PM UAE<br><sub>Sat 21 Nov 2026, 8:25:51 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.90 | [`3e1bd8d`](https://github.com/jerrin-v/my-agent-hq/commit/3e1bd8ddbc76d14073322cd43df7657486efaadb) |
| Sat 21 Nov 2026, 11:25:32 AM UAE<br><sub>Sat 21 Nov 2026, 7:25:32 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.90 | [`c39910f`](https://github.com/jerrin-v/my-agent-hq/commit/c39910f20b9ee2f483f635fe161e6141ef89705a) |
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
