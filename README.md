# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Wed 18 Nov 2026, 12:25:48 PM UAE<br><sub>Wed 18 Nov 2026, 8:25:48 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.67 | [`4ab1e15`](https://github.com/jerrin-v/my-agent-hq/commit/4ab1e155f6d21bc4010721db3314e49ba35105db) |
| Wed 18 Nov 2026, 12:10:44 PM UAE<br><sub>Wed 18 Nov 2026, 8:10:44 AM UTC</sub> | My Agent HQ v1.1.67: top band title starts after the AGENT STATUS tag | v1.1.67 | [`05c9599`](https://github.com/jerrin-v/my-agent-hq/commit/05c9599cdcd4ac3aeb5527a7630f37b8391d0c36) |
| Wed 18 Nov 2026, 11:26:06 AM UAE<br><sub>Wed 18 Nov 2026, 7:26:06 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.65 | [`4c0381b`](https://github.com/jerrin-v/my-agent-hq/commit/4c0381b631067596c6185aa0d4fefdcf070ed879) |
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
