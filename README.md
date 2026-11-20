# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 20 Nov 2026, 9:20:42 AM UAE<br><sub>Fri 20 Nov 2026, 5:20:42 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.74 | [`ed1ae26`](https://github.com/jerrin-v/my-agent-hq/commit/ed1ae26eb00f6540d4408a9f41bfd44b606f55d0) |
| Fri 20 Nov 2026, 9:18:13 AM UAE<br><sub>Fri 20 Nov 2026, 5:18:13 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.74 | [`9e8bf50`](https://github.com/jerrin-v/my-agent-hq/commit/9e8bf5019bea34048d7513107d74e5a098077e9e) |
| Fri 20 Nov 2026, 9:12:37 AM UAE<br><sub>Fri 20 Nov 2026, 5:12:37 AM UTC</sub> | My Agent HQ v1.1.74: same grey for lines to asleep chats in Node view | v1.1.74 | [`9318356`](https://github.com/jerrin-v/my-agent-hq/commit/9318356d07d5f931f65c79b3f19ac2a5bfa149ba) |
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
