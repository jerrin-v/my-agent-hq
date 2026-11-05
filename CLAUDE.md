# Claude HQ (my-agent-hq) — notes for Claude

Jerrin's 3D sci-fi "office floor" of his Claude workspace. Rooms = Claude projects (exact names), robots = chats (exact titles).
UI v1.0.3 is Avengers / Jayse Hansen Helicarrier HUD style (glass blur panels, chamfered corners, no strokes, uniform 8px gaps). v1.0.2 (Oblivion style) is kept in `versions/`.

## Where things live
- **Live app (source of truth):** claude.ai artifact https://claude.ai/artifact/Co8EyXDcY3wQyAjimbr4ob
  - Capabilities: `db`, `user`, `mcp` (server "Claude Code Remote", tool `fire_trigger`). Publish with the Artifact tool using that `url` (read it first).
  - `src/claude-hq.html` = the artifact page as published (body fragment, no doctype). Edit this, publish it to the artifact, then run `scripts/build.sh` for GitHub.
- **GitHub Pages copy:** https://jerrin-v.github.io/my-agent-hq/ (branch `main`, root). Read-only snapshot: when `window.claude` has no db, the page loads `roster.json`.
  - **Locked with a 6-digit site code.** `site/lock.html` (site-only, never published to the artifact) is put in front of each page by `scripts/build.sh`; it holds the app's `fetch('roster.json')` until the code decrypts the snapshot. `roster.json` is AES-GCM encrypted (`scripts/lock-roster.mjs`); the plain copy is `roster.plain.json`, git-ignored.
  - The code is NOT in the repo (the repo is public). Ask Jerrin for it; never commit it, `roster.plain.json`, or an unencrypted `roster.json` (build.sh refuses to build one).
- **Scheduled task "Claude HQ chat sync"** (`trig_01GKbukmzeN8PSzkWYcjKkjz`, recreated 2 Nov; every 6 h at :23, runs on Jerrin's computer via the desktop app's built-in browser): reads claude.ai `/api/organizations/{org}/projects` + `chat_conversations`, writes the artifact db. The page's **Sync now** button fires it (meta/sync.triggerId).
- **Site auto-push (since 3 Nov):** after writing the db, the chat sync also rebuilds and pushes the GitHub site when anything changed (its step 6). The site code lives only in that scheduled task's private prompt, never in the repo. For a manual refresh ("push to git"), follow "Refreshing the GitHub site" below.
- If the chat sync gets auto-paused (suspension_reason device_absent when the Mac was offline at a scheduled run), re-enable it with update_trigger enabled:true.
- Old artifact-only task "Claude HQ roster sync" (`trig_01FWbxrBLcm2CZkgXZVLcdEk`) is obsolete — Jerrin should delete it.

## Artifact db schema
- `rooms/<id>` {name, color, order, projectUuid?}. Ids: dfs, eftpos, alpha-ds, alphax, figma-plugin, portfolio, house (Home), dash (Other), archive.
- `agents/chat-<uuid>` {title, call, role:"Chat", kind:"chat", room, url, lastActive (ISO), source:"sync"|"manual", createdAt, removed?, tokens?, tokensDays? {YYYY-MM-DD (UTC): n}}
  - tokens are ESTIMATES (chat text chars / 4, counted by the sync, step 1f). The page shows Day/Week/Month/Year (today, last 7/30/365 days) in the top bar and per agent/room in the popup, always labelled "≈ … estimate".
- `meta/sync` {lastSync, chats, artifacts:0, source, triggerId}

## Behaviour rules (from Jerrin)
- Archived chats (is_archived true on claude.ai) are never shown: the sync skips them and deletes their agents (since 5 Nov).
- Exact project names for rooms and exact chat titles for robots. Rooms grow with chats; each room has its own colour.
- Active = chat in use at the time of the last sync (lastActive within 60 min before meta/sync.lastSync) → works at desk. Everything else: roaming (up to 14 days) wanders office/lounge; dormant 15+ days sleeps at desk. (Changed 4 Nov; was "≤ 2 days".)
- Room show/hide toggles repack rooms with no gaps. Claude core sits in an open centre plaza.
- Archive room: normal room size, ONE desk + "Archivist" robot, digital library walls with one clickable folder per archived chat (opens chat details).
- No floor rail lines, no strokes, small dot grid only on the floor.

## Refreshing the GitHub site
1. Read the artifact (Artifact `read` on the URL above) and save the page to `src/claude-hq.html` if it changed.
2. Export the db (ArtifactData list `rooms`, `agents`, get `meta/sync`) into `roster.plain.json` as `{rooms:{id:data}, agents:{id:data}, meta:{lastSync, chats, source}}`.
3. `HQ_PASSWORD=<site code> sh scripts/build.sh` (encrypts into `roster.json`, rebuilds the pages), commit, push to `main`. Pages redeploys in 1–2 minutes.
