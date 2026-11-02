# My Agent HQ (Claude HQ)

An interactive 3D sci-fi office floor of my Claude workspace (UI v1.0.3, Avengers-HUD style):

- **Rooms** = Claude projects (exact project names, one colour per room)
- **Robots** = chats (exact chat titles). Active (≤ 2 days) work at their desks, roaming (3–14 days) wander the floor and lounge, dormant (15+ days) sleep at their desks.
- **Archive** = a digital library: one Archivist robot plus a glowing folder per archived chat. Click a folder for the chat's details.
- **Claude core** in the centre plaza; light packets show which rooms are active.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app (Three.js r147 from jsDelivr, no build step) |
| `roster.json` | Read-only snapshot of rooms and chats, used when the page runs outside claude.ai |
| `versions/v1.0.2-oblivion.html` | Previous Oblivion-style UI |
| `.gitlab-ci.yml` | GitLab Pages deploy (optional) |
| `.nojekyll` | Serves the files as-is on GitHub Pages |

## Live vs. snapshot

On claude.ai the page reads the live roster (kept in sync every 6 hours by the *Claude HQ chat sync* scheduled task, or on demand with **Sync now**).
Anywhere else, such as GitHub Pages (https://jerrin-designer.github.io/my-agent-hq/), GitLab Pages or opening `index.html` from a local server, it shows the `roster.json` snapshot, read-only. Replace `roster.json` to refresh it.

## Run locally

```sh
python3 -m http.server 8080   # then open http://localhost:8080
```
(Opening the file directly with `file://` blocks loading `roster.json`; use a local server.)
