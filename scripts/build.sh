#!/bin/sh
# Rebuild the standalone pages from the artifact source (src/*.html are body fragments, as published to claude.ai).
set -e
cd "$(dirname "$0")/.."
wrap() {
  printf '%s\n' '<!doctype html>' '<html lang="en">' '<head>' '<meta charset="utf-8">' \
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' \
    '<style>html,body{margin:0;height:100%;background:#04060A}img{max-width:100%}[hidden]{display:none!important}</style>' \
    '</head>' '<body>'
  cat "$1"; printf '\n%s\n' '</body>' '</html>'
}
wrap src/claude-hq.html > index.html
wrap src/claude-hq-v1.0.2.html > versions/v1.0.2-oblivion.html
echo "built index.html and versions/v1.0.2-oblivion.html"
