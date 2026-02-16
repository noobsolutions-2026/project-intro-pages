#!/usr/bin/env bash
set -euo pipefail

# Minimal deploy helper: commit docs and push to origin main.
# Note: The repository must have an upstream `origin` with push rights.

ROOT=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT"

git add docs || true
if git diff --staged --quiet; then
  echo "No changes to deploy"
  exit 0
fi

msg="chore: update generated docs"

git commit -m "$msg"

echo "Pushing to origin main..."
git push origin main

echo "Deploy step complete — GitHub Pages (docs/) will publish from main/docs if configured."
```
