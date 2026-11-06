#!/bin/sh
# Encrypts Claude HQ into backup/ with the backup public key (keys/backup-recipient.txt). Packing needs no
# secret: only the private key (the SITE_BACKUP_KEY secret, and SITE_BACKUP_KEY.txt on Jerrin's Mac) can
# open the files again. Pushing a new backup starts the "Publish site" workflow.
#
#   sh tools/pack.sh app [page.html]          the page as published to claude.ai (default src/claude-hq.html)
#   sh tools/pack.sh roster [roster.json]     the floor snapshot {rooms, agents, meta} (default roster.plain.json)
#   sh tools/pack.sh legacy [page.html]       the old v1.0.2 page (default src/claude-hq-v1.0.2.html)
set -e
cd "$(dirname "$0")/.."
command -v age >/dev/null 2>&1 || { echo "age is not installed: apt-get install -y age (Linux) or brew install age (Mac)" >&2; exit 1; }
R=keys/backup-recipient.txt
mkdir -p backup
now=$(date -u +%Y-%m-%dT%H:%M:%SZ)
touch backup/BUILD.txt
setline() { # $1 = key, $2 = line: replace the line starting with "$1:" in backup/BUILD.txt, or add it
  grep -v "^$1:" backup/BUILD.txt > backup/BUILD.tmp || true
  printf '%s\n' "$1: $2" >> backup/BUILD.tmp
  sort backup/BUILD.tmp > backup/BUILD.txt && rm -f backup/BUILD.tmp
}

case "$1" in
  app)
    f=${2:-src/claude-hq.html}
    grep -q '<span class="ver">v' "$f" || { echo "$f does not look like the Claude HQ page (no version badge)." >&2; exit 1; }
    ver=$(sed -n 's/.*<span class="ver">\(v[0-9.]*\)<\/span>.*/\1/p' "$f" | head -n 1)
    age -R "$R" -o backup/claude-hq.html.age "$f"
    setline app "Claude HQ $ver · packed $now"
    echo "packed $f ($ver) into backup/claude-hq.html.age" ;;
  roster)
    f=${2:-roster.plain.json}
    node -e 'const j=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));if(!j.rooms||!j.agents)throw new Error("not a roster: needs rooms and agents");if(j.hq==="locked")throw new Error("that is an old site-locked roster, export the plain one");' "$f"
    sync=$(node -e 'const j=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));process.stdout.write(String((j.meta&&j.meta.lastSync)||"unknown"))' "$f")
    age -R "$R" -o backup/roster.json.age "$f"
    setline roster "snapshot of $sync · packed $now"
    echo "packed $f (sync $sync) into backup/roster.json.age" ;;
  legacy)
    f=${2:-src/claude-hq-v1.0.2.html}
    age -R "$R" -o backup/claude-hq-v1.0.2.html.age "$f"
    setline legacy "Claude HQ v1.0.2 (Oblivion) · packed $now"
    echo "packed $f into backup/claude-hq-v1.0.2.html.age" ;;
  *) echo "usage: sh tools/pack.sh app|roster|legacy [file]" >&2; exit 2 ;;
esac
