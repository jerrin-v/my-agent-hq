# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an Oblivion-style token board of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Sun 22 Nov 2026, 1:21:41 AM UAE<br><sub>Sat 21 Nov 2026, 9:21:41 PM UTC</sub> | My Agent HQ v1.2.46: Grid intro animation (elements load in random order, token columns build brick by brick from the bottom), 28 px figures, 18 px title, agent-link pulses run from the hub out to active chats | v1.2.46 | [`9173e78`](https://github.com/jerrin-v/my-agent-hq/commit/9173e78f4bfd5141995b4b741273930f38a29052) |
| Sun 22 Nov 2026, 1:15:58 AM UAE<br><sub>Sat 21 Nov 2026, 9:15:58 PM UTC</sub> | Chat sync: new floor snapshot | v1.2.34 | [`83a2141`](https://github.com/jerrin-v/my-agent-hq/commit/83a21413451e93c64cd20e56d1c2b713c9b731fb) |
| Sun 22 Nov 2026, 12:26:38 AM UAE<br><sub>Sat 21 Nov 2026, 8:26:38 PM UTC</sub> | Chat sync: new floor snapshot | v1.2.34 | [`efa49bc`](https://github.com/jerrin-v/my-agent-hq/commit/efa49bc55a26d788d3b0316153575ba2863d9118) |
<!-- latest-publishes:end -->

## Full backup — works without claude.ai

- `backup/claude-hq.html.age` — the page, exactly as published on claude.ai, sealed.
- `backup/roster.json.age` — the snapshot (blocks, chats, activity and token estimates), sealed. The hourly chat sync replaces it after every run.
- `backup/claude-hq-v1.2.32-hud.html.age` — **safe backup of v1.2.32**, sealed: the last version with the 2D HUD (Block and Node views) next to the Grid view. Kept as a restore point; from v1.2.33 the site is the Grid view only.
- `backup/claude-hq-v1.0.2.html.age` — the older v1.0.2 (Oblivion) page, sealed, published at `/versions/v1.0.2-oblivion.html`.
- `backup/BUILD.txt` — which version and which sync each file holds, and when it was packed.
- `keys/backup-recipient.txt` — the public key the backup is sealed with. It can't open anything.
- `tools/` and `.github/workflows/publish.yml` — the sign-in page and the tools that seal, lock and publish the site.
- Design updates are packed and pushed when I approve them; the version shows at the bottom of the sign-in page.

Note: the fonts load from Google Fonts.
