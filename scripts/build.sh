#!/bin/sh
# Rebuild the standalone pages from the artifact source (src/*.html are body fragments, as published to claude.ai).
# The public site is locked: site/lock.html goes in front of each page, and roster.json must be encrypted
# with the site code. If roster.plain.json is present it is encrypted first (needs HQ_PASSWORD=<site code>).
set -e
cd "$(dirname "$0")/.."

if [ -f roster.plain.json ]; then
  if [ -z "$HQ_PASSWORD" ]; then
    echo "roster.plain.json found: run with HQ_PASSWORD=<site code> to encrypt it into roster.json" >&2
    exit 1
  fi
  node scripts/lock-roster.mjs
fi
if ! grep -q '"hq":"locked"' roster.json; then
  echo "roster.json is not encrypted. Put the snapshot in roster.plain.json and run with HQ_PASSWORD=<site code>." >&2
  exit 1
fi

wrap() { # $1 = source fragment, $2 = path to roster.json from the built page
  printf '%s\n' '<!doctype html>' '<html lang="en">' '<head>' '<meta charset="utf-8">' \
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' \
    '<meta name="robots" content="noindex,nofollow">' \
    '<style>html,body{margin:0;height:100%;background:#04060A}img{max-width:100%}[hidden]{display:none!important}</style>' \
    '</head>' '<body>'
  sed "s#__ROSTER__#$2#" site/lock.html
  cat "$1"; printf '\n%s\n' '</body>' '</html>'
}
wrap src/claude-hq.html roster.json > index.html
wrap src/claude-hq-v1.0.2.html ../roster.json > versions/v1.0.2-oblivion.html
echo "built index.html and versions/v1.0.2-oblivion.html (locked)"
