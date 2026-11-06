# Claude HQ (my-agent-hq) — notes for Claude

Jerrin's 3D sci-fi "office floor" of his Claude workspace. Rooms = Claude projects (exact names), robots = chats (exact titles).
UI v1.0.5 is Avengers / Jayse Hansen Helicarrier HUD style (glass blur panels, chamfered corners, no strokes, uniform 8px gaps). v1.0.2 (Oblivion style) is kept as an encrypted backup and published at `versions/v1.0.2-oblivion.html`.

## Where things live
- **Live app (source of truth):** claude.ai artifact https://claude.ai/artifact/Co8EyXDcY3wQyAjimbr4ob
  - Capabilities: `db`, `user`, `mcp` (server "Claude Code Remote", tool `fire_trigger`). Publish with the Artifact tool using that `url` (read it first).
  - The artifact is the only readable copy of the page. To edit: Artifact `read` → save to `src/claude-hq.html` (git-ignored, local working copy) → edit → publish with `edits` → bump the version.
- **GitHub Pages copy (since 6 Nov, same method as the Alpha DS website):** https://jerrin-v.github.io/my-agent-hq/ — built by GitHub Actions, not from the branch. The public repo holds ONLY encrypted files:
  - `backup/claude-hq.html.age` (page), `backup/roster.json.age` (floor snapshot), `backup/claude-hq-v1.0.2.html.age` (old page), all age-encrypted to `keys/backup-recipient.txt`. `backup/BUILD.txt` says what each holds.
  - `.github/workflows/publish.yml` ("Publish site") runs on every push to backup/ or tools/: unlocks with secret `SITE_BACKUP_KEY`, then `tools/encrypt-site.mjs` encrypts the whole page + roster with secret `SITE_PASSWORD` (AES-GCM, PBKDF2 600k, new salt each build) behind `tools/gate.html` (HUD sign-in: keypad when the password is 6 digits, password field otherwise; "Remember me for today"; `?signout`; footer "vX · Published <time>").
  - After each successful publish the workflow runs `tools/log-publish.py` and commits "README: latest publishes" (the README's Latest publishes table: newest 3 pushes, UAE + UTC time). So always `git pull --rebase` before pushing.
  - Packing needs no secret: `sh tools/pack.sh app|roster|legacy [file]` (needs `age`). Never commit `src/`, `roster.plain.json`, a key or the password. The private key is `SITE_BACKUP_KEY.txt` on Jerrin's Mac (Documents/Personal/Git-Hub-Files/Agent-HQ, with the guide PDF) and the GitHub secret; Claude does not keep it.
  - Pages source must be "GitHub Actions" (Settings › Pages). The password is changed in Settings › Secrets › SITE_PASSWORD, then Actions › Publish site › Run workflow.
  - Git history before 6 Nov still holds older readable copies (page source, and an unencrypted roster in the earliest commits).
- **Scheduled task "Claude HQ chat sync"** (`trig_01GKbukmzeN8PSzkWYcjKkjz`, recreated 2 Nov; every 6 h at :23, runs on Jerrin's computer via the desktop app's built-in browser): reads claude.ai `/api/organizations/{org}/projects` + `chat_conversations`, writes the artifact db. The page's **Sync now** button fires it (meta/sync.triggerId).
- **Site auto-push:** after writing the db, the chat sync packs a new `backup/roster.json.age` and pushes it when anything changed (its step 6); the workflow republishes. For a manual refresh, follow "Refreshing the GitHub site" below.
- If the chat sync gets auto-paused (suspension_reason device_absent when the Mac was offline at a scheduled run), re-enable it with update_trigger enabled:true.
- Old artifact-only task "Claude HQ roster sync" (`trig_01FWbxrBLcm2CZkgXZVLcdEk`) is obsolete — Jerrin should delete it.

## Artifact db schema
- `rooms/<id>` {name, color, order, projectUuid?}. Ids: dfs, eftpos, alpha-ds, alphax, figma-plugin, portfolio, house (Home), dash (Other), archive.
- `agents/chat-<uuid>` {title, call, role:"Chat", kind:"chat", room, url, lastActive (ISO), source:"sync"|"manual", createdAt, removed?, tokens?, tokensDays? {YYYY-MM-DD (UTC): n}}
  - tokens are ESTIMATES (chat text chars / 4, counted by the sync, step 1f). The page shows Day/Week/Month/Year (today, last 7/30/365 days) in the top bar and per agent/room in the popup, always labelled "≈ … estimate".
- `meta/sync` {lastSync, chats, artifacts:0, source, triggerId}

## Working rules (from Jerrin, 6 Nov)
- **Version bump:** every update to the app increments the version by 1 in the last place (v1.0.4 → v1.0.5 → …): the `.ver` badge in the top bar and the header comment in the page.
- **Push to GitHub only when Jerrin says "Push".** Publish updates to the claude.ai artifact as usual, but do not commit+push design/code changes to GitHub until he asks. (The scheduled chat sync still pushes data snapshots on its own.)

## Behaviour rules (from Jerrin)
- Archived chats (is_archived true on claude.ai) are never shown: the sync skips them and deletes their agents (since 5 Nov).
- Exact project names for rooms and exact chat titles for robots. Rooms grow with chats; each room has its own colour.
- Active = chat in use at the time of the last sync (lastActive within 60 min before meta/sync.lastSync) → works at desk. Everything else: roaming (up to 14 days) wanders office/lounge; dormant 15+ days sleeps at desk. (Changed 4 Nov; was "≤ 2 days".)
- Room show/hide toggles repack rooms with no gaps. Claude core sits in an open centre plaza.
- Archive room: normal room size, ONE desk + "Archivist" robot, digital library walls with one clickable folder per archived chat (opens chat details).
- No floor rail lines, no strokes, small dot grid only on the floor.

## Refreshing the GitHub site (when Jerrin says "Push")
1. Page: Artifact `read` the URL above, save it to `src/claude-hq.html`, then `sh tools/pack.sh app`.
2. Data: export the db (ArtifactData list `rooms`, `agents` with out_dir in a fresh folder, get `meta/sync`) into `roster.plain.json` as `{rooms:{id:data}, agents:{id:data}, meta:{lastSync, chats, source}}`, then `sh tools/pack.sh roster` and delete roster.plain.json.
3. Commit `backup/` and push to `main`. The "Publish site" workflow republishes in 1–2 minutes.
