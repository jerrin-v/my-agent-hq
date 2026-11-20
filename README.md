# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Fri 20 Nov 2026, 10:25:22 PM UAE<br><sub>Fri 20 Nov 2026, 6:25:22 PM UTC</sub> | Chat sync: new floor snapshot | v1.1.83 | [`ad57570`](https://github.com/jerrin-v/my-agent-hq/commit/ad57570bd32ef58c49cca6f7804210e8458a7101) |
| Fri 20 Nov 2026, 9:53:06 PM UAE<br><sub>Fri 20 Nov 2026, 5:53:06 PM UTC</sub> | Chat sync: new floor snapshot | v1.1.83 | [`ab97dfc`](https://github.com/jerrin-v/my-agent-hq/commit/ab97dfc5b1072e5acf07dd4688a9b71c8bbaf386) |
| Fri 20 Nov 2026, 5:26:42 PM UAE<br><sub>Fri 20 Nov 2026, 1:26:42 PM UTC</sub> | Chat sync: new floor snapshot | v1.1.83 | [`60c1aba`](https://github.com/jerrin-v/my-agent-hq/commit/60c1aba344537ea47d8679640e3aa5b0a378053e) |
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
