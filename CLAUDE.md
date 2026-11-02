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
- **Scheduled task "Claude HQ chat sync"** (`trig_01CAoYtMU9TRwVRL3ij25fMa`, every 6 h at :23, runs on Jerrin's computer via the desktop app's built-in browser): reads claude.ai `/api/organizations/{org}/projects` + `chat_conversations`, writes the artifact db. The page's **Sync now** button fires it (meta/sync.triggerId).
- **Scheduled task "Claude HQ site update"** (`trig_01EeSxGcqLmNfjGrgpKq7SWy`, cloud, every 6 h at :38 — 15 min after the chat sync): reads the artifact page + db, rebuilds and pushes the GitHub site (holds the site code in its own prompt). The chat sync also tries to fire it at the end, but firing a task from an unattended run can be blocked, so the :38 schedule is the reliable path.
- Old artifact-only task "Claude HQ roster sync" (`trig_01FWbxrBLcm2CZkgXZVLcdEk`) is obsolete — Jerrin should delete it.

## Artifact db schema
- `rooms/<id>` {name, color, order, projectUuid?}. Ids: dfs, eftpos, alpha-ds, alphax, figma-plugin, portfolio, house (Home), dash (Other), archive.
- `agents/chat-<uuid>` {title, call, role:"Chat", kind:"chat", room, url, lastActive (ISO), source:"sync"|"manual", createdAt, removed?}
- `meta/sync` {lastSync, chats, artifacts:0, source, triggerId}

## Behaviour rules (from Jerrin)
- Exact project names for rooms and exact chat titles for robots. Rooms grow with chats; each room has its own colour.
- Active ≤ 2 days work at desk; roaming 3–14 days wander office/lounge; dormant 15+ days sleep at desk.
- Room show/hide toggles repack rooms with no gaps. Claude core sits in an open centre plaza.
- Archive room: normal room size, ONE desk + "Archivist" robot, digital library walls with one clickable folder per archived chat (opens chat details).
- No floor rail lines, no strokes, small dot grid only on the floor.

## Refreshing the GitHub site
1. Read the artifact (Artifact `read` on the URL above) and save the page to `src/claude-hq.html` if it changed.
2. Export the db (ArtifactData list `rooms`, `agents`, get `meta/sync`) into `roster.plain.json` as `{rooms:{id:data}, agents:{id:data}, meta:{lastSync, chats, source}}`.
3. `HQ_PASSWORD=<site code> sh scripts/build.sh` (encrypts into `roster.json`, rebuilds the pages), commit, push to `main`. Pages redeploys in 1–2 minutes.
