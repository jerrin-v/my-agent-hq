# Claude HQ — backup

Encrypted backup of Claude HQ (My Agent HQ) by Jerrin Varghese: an interactive 3D sci-fi office floor of his Claude workspace, where rooms are projects and robots are chats. The live app is a claude.ai artifact; this copy is published to GitHub Pages behind a sign-in.

- `backup/claude-hq.html.age` is the page, `backup/roster.json.age` is the floor snapshot (rooms, chats, token estimates) and `backup/claude-hq-v1.0.2.html.age` is the older v1.0.2 page, all encrypted with [age](https://age-encryption.org). Only the private backup key can open them.
- `backup/BUILD.txt` says which version and which sync each backup holds, and when it was packed.
- `keys/backup-recipient.txt` is the public key that backups are encrypted to. It can't decrypt anything.
- `.github/workflows/publish.yml` and `tools/` publish the site to GitHub Pages behind a sign-in. The page and its data are encrypted with the site password; nothing readable is served until the right password is entered.

No passwords or private keys are stored in this repository.
