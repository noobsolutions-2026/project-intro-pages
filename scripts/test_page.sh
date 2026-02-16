#!/usr/bin/env bash
set -euo pipefail

# Simple test: ensure docs directory and templates exist
ROOT=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT"

echo "Running tests..."
if [ ! -d docs ]; then
  echo "docs/ missing" >&2
  exit 2
fi

# Ensure templates directory exists
if [ ! -d docs/templates ]; then
  echo "docs/templates/ missing" >&2
  exit 2
fi

# Ensure key template files exist
if [ ! -f docs/templates/sample-page.html ]; then
  echo "docs/templates/sample-page.html missing" >&2
  exit 2
fi

if [ ! -f docs/templates/LLM_PROMPT.md ]; then
  echo "docs/templates/LLM_PROMPT.md missing" >&2
  exit 2
fi

echo "All tests passed. Templates ready for manual editing or LLM generation."
