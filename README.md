# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an interactive sci-fi head-up display of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Sat 21 Nov 2026, 11:35:05 PM UAE<br><sub>Sat 21 Nov 2026, 7:35:05 PM UTC</sub> | My Agent HQ v1.2.32: Grid view status colours everywhere (green active / yellow standby / red asleep), chat detail popup, Grid opens by default, boxed header, full dot rings; sign-in page in the Grid look | v1.2.32 | [`e0e9a6d`](https://github.com/jerrin-v/my-agent-hq/commit/e0e9a6d18cbf14a6b7e69eb2cab3f08c9c04776d) |
| Sat 21 Nov 2026, 9:05:45 PM UAE<br><sub>Sat 21 Nov 2026, 5:05:45 PM UTC</sub> | Grid view boxed figures, even section spacing, scroll boxes | v1.2.12 | [`6e670a0`](https://github.com/jerrin-v/my-agent-hq/commit/6e670a0b4143b1c6899bfa4777198bce362b6a5c) |
| Sat 21 Nov 2026, 7:30:48 PM UAE<br><sub>Sat 21 Nov 2026, 3:30:48 PM UTC</sub> | My Agent HQ v1.2.2: full audit fixes (small phones, Node on tiny screens, Grid two-column tablet layout + keyboard/screen reader, hit areas, unused font/CSS removed), README corrections | v1.2.2 | [`89ae30a`](https://github.com/jerrin-v/my-agent-hq/commit/89ae30ae0ab7b4f37af200475790cf4a69c81a9a) |
<!-- latest-publishes:end -->

## Full backup — works without claude.ai

- `backup/claude-hq.html.age` — the page, exactly as published on claude.ai, sealed.
- `backup/roster.json.age` — the snapshot (blocks, chats, activity and token estimates), sealed. The hourly chat sync replaces it after every run.
- `backup/claude-hq-v1.0.2.html.age` — the older v1.0.2 (Oblivion) page, sealed, published at `/versions/v1.0.2-oblivion.html`.
- `backup/BUILD.txt` — which version and which sync each file holds, and when it was packed.
- `keys/backup-recipient.txt` — the public key the backup is sealed with. It can't open anything.
- `tools/` and `.github/workflows/publish.yml` — the sign-in page and the tools that seal, lock and publish the site.
- Design updates are packed and pushed when I approve them; the version shows at the bottom of the sign-in page.

Note: the fonts load from Google Fonts.
