# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Wed 18 Nov 2026, 11:04:30 AM UAE<br><sub>Wed 18 Nov 2026, 7:04:30 AM UTC</sub> | My Agent HQ v1.1.65: date as 18 NOV 2026 and automatic time zone label | v1.1.65 | [`6ac04ef`](https://github.com/jerrin-v/my-agent-hq/commit/6ac04ef06d16acb9b8f4180011d025f49d7a6cb3) |
| Wed 18 Nov 2026, 10:38:48 AM UAE<br><sub>Wed 18 Nov 2026, 6:38:48 AM UTC</sub> | My Agent HQ v1.1.63: top-bar row no longer shifts as the clock ticks | v1.1.63 | [`f9ca923`](https://github.com/jerrin-v/my-agent-hq/commit/f9ca923c05f8e46865d0a4a9cb4ea357a0475a9e) |
| Wed 18 Nov 2026, 10:31:34 AM UAE<br><sub>Wed 18 Nov 2026, 6:31:34 AM UTC</sub> | My Agent HQ v1.1.62: top-bar readouts reordered and unified | v1.1.62 | [`f9c277e`](https://github.com/jerrin-v/my-agent-hq/commit/f9c277e2b234b9d7b887333a0b4f4dfc3fd618fd) |
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
