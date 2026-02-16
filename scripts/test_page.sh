#!/usr/bin/env bash
set -euo pipefail

# Simple test agent: ensure docs directory exists and generated files are present
ROOT=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT"

echo "Running tests..."
if [ ! -d docs ]; then
  echo "docs/ missing" >&2
  exit 2
fi

# Ensure index exists
if [ ! -f docs/index.md ]; then
  echo "docs/index.md missing" >&2
  exit 2
fi

# Run generator against example spec and ensure output file exists
node scripts/generate_intro.js specs/example_project.spec.yaml
OUT=docs/sample-project.md
if [ ! -f "$OUT" ]; then
  echo "Expected $OUT to be generated" >&2
  exit 2
fi

echo "All tests passed. Generated $OUT"
