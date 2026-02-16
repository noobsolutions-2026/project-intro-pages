## Default Copilot Instructions

When receiving a prompt to work on this repository, follow these default steps unless the user specifies otherwise:

- Run the project's test and generation scripts locally to verify current state:
  - `npm ci` (install clean dependencies)
  - `npm run generate:all` (regenerate all pages and assets)
  - `npm test` (run tests)

- If any step fails, attempt minimal, safe fixes:
  - For installation failures, prefer fixing `package.json` or lockfile issues.
  - For generator or design script errors, remove accidental code-fence markers and fix shebangs.
  - For failing tests, read the test output, fix the root cause, and re-run tests.

- After fixing, re-run `npm run generate:all` and `npm test` until green.

- When changes produce generated output under `docs/` and the user intends to publish, follow the repository policy:
  - If CI publishes directly to `gh-pages` (see `.github/workflows/deploy-pages.yml`), do NOT commit `docs/` to `main` unless requested.
  - If requested to commit generated `docs/` to `main`, add only the generated files, a clear commit message, and run `npm run generate:all` locally to verify before committing.

- For publishing via GitHub Actions, ensure required secrets exist and are configured (see `DEPLOYMENT_CHECKS` below).

DEPLOYMENT_CHECKS

- Ensure at least one of these is configured in repository secrets:
  - `ACTIONS_DEPLOY_KEY` (private key for `peaceiris/actions-gh-pages`) OR
  - `GITHUB_TOKEN` (the default token; may be sufficient but check permissions) OR
  - A Personal Access Token (PAT) stored in `PAGES_PAT` if using a different Action.

- Confirm the workflow `publish` step uses the correct `publish_dir` (here: `./docs`) and `publish_branch` (`gh-pages`), and that the repository's Pages settings target the published branch.

OPERATIONAL NOTES

- Be conservative: prefer minimal, well-tested changes for CI and deploy workflows.
- If making changes to workflows, run generation and tests locally and explain required secrets and settings in the PR description.
