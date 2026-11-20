# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 20 Nov 2026, 1:26:19 PM UAE<br><sub>Fri 20 Nov 2026, 9:26:19 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.75 | [`643d519`](https://github.com/jerrin-v/my-agent-hq/commit/643d51981398e2dbe08020223f1432ad8a48a126) |
| Fri 20 Nov 2026, 12:44:01 PM UAE<br><sub>Fri 20 Nov 2026, 8:44:01 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.75 | [`9238621`](https://github.com/jerrin-v/my-agent-hq/commit/923862142cb61fb6797258f93fb7250513c0d87d) |
| Fri 20 Nov 2026, 11:25:52 AM UAE<br><sub>Fri 20 Nov 2026, 7:25:52 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.75 | [`8924f71`](https://github.com/jerrin-v/my-agent-hq/commit/8924f71949ba70966b39c31ec83dd8a67b7b456e) |
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
