# Restore Claude HQ from this backup

Everything here is sealed with [age](https://age-encryption.org). To open it you need the private key, `SITE_BACKUP_KEY.txt`
(kept outside this repo, with the guide PDF). Install age first: `brew install age` on a Mac, `apt-get install age` on Linux.

## 1. Open it on a computer

```sh
mkdir claude-hq && cd claude-hq
# download the three backup/*.age files from this repo into this folder
age -d -i /path/to/SITE_BACKUP_KEY.txt -o index.html  claude-hq.html.age
age -d -i /path/to/SITE_BACKUP_KEY.txt -o roster.json roster.json.age
age -d -i /path/to/SITE_BACKUP_KEY.txt -o v1.0.2.html claude-hq-v1.0.2.html.age
python3 -m http.server 8000
```

Then visit `localhost:8000`. The page reads `roster.json` from the same folder, so it shows the floor as of the last sync.
Never commit the opened files back into this repo.

## 2. Publish this copy without a password

Put the opened `index.html` and `roster.json` (step 1) in a new private repo or any static host. Without claude.ai the page
runs as a read-only snapshot. Do this only on a host you control: anyone with the address can see your projects and chats.

## 3. Rebuild the live app

`claude-hq.html` is the page exactly as published on claude.ai. Publish it as a new claude.ai artifact with the database
(`db`), `user` and Claude Code Remote (`mcp`) capabilities, then point the "Claude HQ chat sync" scheduled task at the
new artifact's address. The first sync fills the rooms and robots again.

## Lost the key?

The backup can't be opened without it. Ask Claude to make a new key pair: replace `keys/backup-recipient.txt`, pack a new
backup from the live claude.ai app, and replace the `SITE_BACKUP_KEY` secret.
