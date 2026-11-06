# My Agent HQ (Claude HQ)

An interactive 3D sci-fi office floor of my Claude workspace (UI v1.0.5, Avengers-HUD style):

- **Rooms** = Claude projects (exact project names, one colour per room)
- **Robots** = chats (exact chat titles). Active (≤ 2 days) work at their desks, roaming (3–14 days) wander the floor and lounge, dormant (15+ days) sleep at their desks.
- **Archive** = a digital library: one Archivist robot plus a glowing folder per archived chat. Click a folder for the chat's details.
- **Claude core** in the centre plaza; light packets show which rooms are active.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app (Three.js r147 from jsDelivr), built from `src/claude-hq.html` with the lock screen in front |
| `src/` | Artifact source as published on claude.ai |
| `site/lock.html` | Lock screen for the public site only (not part of the claude.ai artifact) |
| `scripts/build.sh` | Rebuilds `index.html` from `src/` + `site/lock.html`; encrypts the roster first if needed |
| `scripts/lock-roster.mjs` | Encrypts `roster.plain.json` into `roster.json` with the site code (or `--unlock` to reverse) |
| `CLAUDE.md` | Notes for Claude when working on this repo |
| `roster.json` | Encrypted snapshot of rooms and chats, used when the page runs outside claude.ai |
| `versions/v1.0.2-oblivion.html` | Previous Oblivion-style UI |
| `.gitlab-ci.yml` | GitLab Pages deploy (optional) |
| `.nojekyll` | Serves the files as-is on GitHub Pages |

## Live vs. snapshot

On claude.ai the page reads the live roster (kept in sync every 6 hours by the *Claude HQ chat sync* scheduled task, or on demand with **Sync now**).
Anywhere else, such as GitHub Pages (https://jerrin-v.github.io/my-agent-hq/), GitLab Pages or opening `index.html` from a local server, it shows the `roster.json` snapshot, read-only.

## Site lock

The public site opens on a lock screen that asks for a 6-digit code. The snapshot in `roster.json` is encrypted with that code (PBKDF2-SHA256 → AES-256-GCM), so the room and chat names can't be read without it, even by fetching the file directly. Once unlocked, the page stays open until the browser tab is closed.

The code is never stored in the repo. To refresh the snapshot, put the plain roster in `roster.plain.json` (git-ignored) and build with the code:

```sh
HQ_PASSWORD=<code> sh scripts/build.sh
```

To change the code: `HQ_PASSWORD=<old code> node scripts/lock-roster.mjs --unlock`, then `HQ_PASSWORD=<new code> sh scripts/build.sh`.

## Run locally

```sh
python3 -m http.server 8080   # then open http://localhost:8080 and enter the code
```
(Opening the file directly with `file://` blocks loading `roster.json`; use a local server.)
