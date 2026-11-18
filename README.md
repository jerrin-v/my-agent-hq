# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Wed 18 Nov 2026, 9:47:35 AM UAE<br><sub>Wed 18 Nov 2026, 5:47:35 AM UTC</sub> | My Agent HQ v1.1.60: Node view 75% grey / 25% lit strands | v1.1.60 | [`ee07afa`](https://github.com/jerrin-v/my-agent-hq/commit/ee07afac4620327ffe6e8a7a5457ab213a11b5cc) |
| Wed 18 Nov 2026, 9:36:50 AM UAE<br><sub>Wed 18 Nov 2026, 5:36:50 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.58 | [`5ffa16a`](https://github.com/jerrin-v/my-agent-hq/commit/5ffa16a58a949e3de1a83b039ded37fbaab2dd66) |
| Wed 18 Nov 2026, 9:24:51 AM UAE<br><sub>Wed 18 Nov 2026, 5:24:51 AM UTC</sub> | Chat sync: new floor snapshot | v1.1.58 | [`ff90d7f`](https://github.com/jerrin-v/my-agent-hq/commit/ff90d7f5377eff1730180497c603205543ca12a5) |
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
