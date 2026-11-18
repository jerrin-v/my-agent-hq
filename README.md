# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Wed 18 Nov 2026, 4:25:56 PM UAE<br><sub>Wed 18 Nov 2026, 12:25:56 PM UTC</sub> | Chat sync: new floor snapshot | v1.1.68 | [`47551b8`](https://github.com/jerrin-v/my-agent-hq/commit/47551b823cf5b0793839f170f36386f606b82856) |
| Wed 18 Nov 2026, 3:25:59 PM UAE<br><sub>Wed 18 Nov 2026, 11:25:59 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.68 | [`046a4d4`](https://github.com/jerrin-v/my-agent-hq/commit/046a4d4a5923112317629a77333f599c4f6c9f58) |
| Wed 18 Nov 2026, 2:25:21 PM UAE<br><sub>Wed 18 Nov 2026, 10:25:21 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.68 | [`a31c50d`](https://github.com/jerrin-v/my-agent-hq/commit/a31c50d67ea288b9ec7c02d09dfb104c19415ab8) |
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
