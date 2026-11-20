# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 20 Nov 2026, 9:31:29 AM UAE<br><sub>Fri 20 Nov 2026, 5:31:29 AM UTC</sub> | My Agent HQ v1.1.75: Roaming shown as Standby | v1.1.75 | [`3c88cd6`](https://github.com/jerrin-v/my-agent-hq/commit/3c88cd687f452a53c52a6519c8218b31b7ab0896) |
| Fri 20 Nov 2026, 9:25:49 AM UAE<br><sub>Fri 20 Nov 2026, 5:25:49 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.74 | [`2d8f328`](https://github.com/jerrin-v/my-agent-hq/commit/2d8f328801eb202c2f6ceb7ecef406c3e166791b) |
| Fri 20 Nov 2026, 9:20:42 AM UAE<br><sub>Fri 20 Nov 2026, 5:20:42 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.74 | [`ed1ae26`](https://github.com/jerrin-v/my-agent-hq/commit/ed1ae26eb00f6540d4408a9f41bfd44b606f55d0) |
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
