# Project Overview

> **`project-intro-pages`** — Spec-driven generator and agents for GitHub Pages project intros

This repository hosts project introduction pages on GitHub Pages. Pages are authored as self-contained, premium HTML files under `docs/pages/<project-id>/` and deployed automatically to GitHub Pages via GitHub Actions on every branch push that touches `docs/`.

## Site Structure

```
docs/
  index.html                          ← Landing page listing all projects
  assets/
    style.css                         ← Shared CSS design system (landing page)
  pages/
    proj-mgmt-app/
      index.html                      ← Project Management App intro
      report-generation.html          ← Report Generation sub-feature
  templates/                          ← HTML templates for new pages (kept for reference)
```

Root-level `pages/` (separate from `docs/pages/`) contains standalone product pages like `about.html` and `presentation.html` that are not part of the GitHub Pages deployment.

## Building and Running

### Prerequisites
- Node.js and npm

### Installation
```bash
npm install
```

### Local Preview
```bash
npx http-server docs -p 8000
# Open http://localhost:8000
```

### Testing
```bash
npm test
# Verifies docs/ directory and template files exist
```

## Adding a New Project Page

1. Create `docs/pages/<project-id>/index.html` — copy from `docs/templates/sample-page.html` or use an LLM with `docs/templates/LLM_PROMPT.md`.
2. Add a card in `docs/index.html` linking to `./pages/<project-id>/`.
3. Sub-feature pages go alongside the index: `docs/pages/<project-id>/<feature>.html`.
4. Commit and push — CI runs tests, then deploy publishes to `gh-pages`.

## Development Conventions

- **Page design:** Project pages use self-contained inline CSS for portability. `docs/assets/style.css` covers only the landing page (`docs/index.html`).
- **Typography:** Google Fonts — **Inter** — used across all pages.
- **GitHub Actions:**
  - `ci.yml`: Runs `npm test` on any branch push when `docs/**`, `package.json`, or workflow files change.
  - `deploy-pages.yml`: Deploys `docs/` to `gh-pages` on any branch push that touches `docs/**`. This enables branch preview deployments.
- **Spec format:** Project metadata follows the YAML spec in `SPEC.md` (for reference; generation is currently manual).
