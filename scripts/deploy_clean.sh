#!/usr/bin/env bash
set -euo pipefail

# Clean deploy helper: commit docs and push to origin main.
# Use this instead of deploy.sh if that file contains formatting issues.

ROOT=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT"

git add docs || true
if git diff --staged --quiet; then
  echo "No changes to deploy"
  exit 0
fi

msg="chore: update generated docs"

git commit -m "$msg" || { echo "Nothing to commit"; exit 0; }

echo "Pushing to origin main..."
git push origin main

echo "Deploy step complete."
