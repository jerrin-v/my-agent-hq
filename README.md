# Jerrin Varghese — My Agent HQ (password-protected)

Website: **https://jerrin-v.github.io/my-agent-hq/** — a password-protected copy of My Agent HQ, an Oblivion-style token board of my Claude workspace: every block is a project, every row in it is a chat. The live version is a private claude.ai artifact.

## Latest publishes

The last 3 pushes that went live, newest first. Updated by the **Publish site** workflow after each successful publish.

<!-- latest-publishes:start -->
| Pushed | Change | Version | Commit |
| --- | --- | --- | --- |
| Sun 22 Nov 2026, 2:06:07 AM UAE<br><sub>Sat 21 Nov 2026, 10:06:07 PM UTC</sub> | My Agent HQ v1.2.55: interactive token-signal scan, 80 px light local time in a fixed-width box, usage redesigned around the %, LIVE box in the header, radar labels under the radar; sign-in page uses the board's animated background and header | v1.2.55 | [`8bbcf96`](https://github.com/jerrin-v/my-agent-hq/commit/8bbcf967264f1e47cef9ecede804d1a955cb8766) |
| Sun 22 Nov 2026, 1:26:04 AM UAE<br><sub>Sat 21 Nov 2026, 9:26:04 PM UTC</sub> | Chat sync: new floor snapshot | v1.2.46 | [`ea2c311`](https://github.com/jerrin-v/my-agent-hq/commit/ea2c31167cf0c014626c4ec85818586c0f5f6c97) |
| Sun 22 Nov 2026, 1:21:41 AM UAE<br><sub>Sat 21 Nov 2026, 9:21:41 PM UTC</sub> | My Agent HQ v1.2.46: Grid intro animation (elements load in random order, token columns build brick by brick from the bottom), 28 px figures, 18 px title, agent-link pulses run from the hub out to active chats | v1.2.46 | [`9173e78`](https://github.com/jerrin-v/my-agent-hq/commit/9173e78f4bfd5141995b4b741273930f38a29052) |
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
