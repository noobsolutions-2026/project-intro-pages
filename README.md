# project-intro-pages
Repository to host GitHub Pages sites that introduce selected projects. This repo uses a
spec-driven workflow and lightweight agents to generate, design, test, and deploy intro pages.
# project-intro-pages
Repository to host GitHub Pages sites that introduce selected projects. This repo uses a
spec-driven workflow and lightweight agents to generate, design, test, and deploy intro pages.

Quick start (local)

- Install dependencies:

```bash
cd github/noobsolutions.2026_gmail.com/project-intro-pages
npm install
```

# project-intro-pages
Repository to host GitHub Pages sites that introduce selected projects. This repo uses a
spec-driven workflow and lightweight agents to generate, design, test, and deploy intro pages.

Quick start (local)

- Install dependencies:

```bash
cd github/noobsolutions.2026_gmail.com/project-intro-pages
npm install
```

- Generate pages from specs:

```bash
# generate the example page
npm run generate

# generate all specs and rebuild index/assets
npm run generate:all

# run the design step (writes docs/assets/style.css)
npm run design
```

- Run tests:

```bash
npm test
```

Local preview

- Quick preview: open generated HTML in browser:

```bash
# serve the docs/ folder on port 8000
npx http-server docs -p 8000
# then open http://localhost:8000/ or http://localhost:8000/proj-mgmt-app.html
```

Generate a page for a targeted project

1. Create a spec from an existing project README (automated):

```bash
# example: produce specs/proj-mgmt-app.spec.yaml from the project folder
node scripts/spec_from_project.js /Users/work/00_workdir/00_coderepo/github/noobsolutions.2026_gmail.com/web-app/proj-mgmt-app
```

2. Run the generator against the produced spec (or run `npm run generate` to run the example):

```bash
node scripts/generate_intro.js specs/proj-mgmt-app.spec.yaml
```

Notes on design and styling

- The designer agent (`node scripts/design_page.js`) writes a shared stylesheet at `docs/assets/style.css`.
- `generate_index.js` and `generate_intro.js` reference the shared `docs/assets/style.css` so the
	landing page and project pages use the same modern dark SaaS styling.

Deployment

This repository includes a GitHub Actions workflow that builds and publishes `docs/` to the
`gh-pages` branch (`.github/workflows/deploy-pages.yml`). To publish from CI, ensure the
repository secrets include `ACTIONS_DEPLOY_KEY` or `GITHUB_TOKEN` as configured in the workflow.

Useful files

- `SPEC.md` — spec format and guidance
- `specs/` — YAML project specs (add your project specs here)
- `agents/agents.yaml` — agent definitions and CLI hooks
- `scripts/` — generator, design, test, deploy, and spec extraction helpers
- `docs/` — generated Pages content (site source)
- `.github/workflows/` — CI to generate, test, and publish

Contributing

Edit or add YAML under `specs/` and run `npm run generate` or `npm run generate:all` to produce new docs. CI can
automatically publish to GitHub Pages via the included workflow.
