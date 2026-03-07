# project-intro-pages

> Spec-driven generator and agents for GitHub Pages project intros

A system for hosting and maintaining project introduction pages on GitHub Pages. Pages are authored as self-contained HTML files under `docs/`, organised by project, and deployed automatically via GitHub Actions.

---

## Project Structure

```
project-intro-pages/
├── docs/
│   ├── index.html                          # Landing page (project listing)
│   ├── assets/
│   │   └── style.css                       # Shared design system (index page)
│   ├── pages/
│   │   └── proj-mgmt-app/
│   │       ├── index.html                  # Project intro page
│   │       └── report-generation.html      # Sub-feature page
│   └── templates/
│       ├── sample-page.html                # Project page template
│       ├── index-template.html             # Landing page template
│       ├── README.md                       # Template guide
│       └── LLM_PROMPT.md                  # LLM generation guide
├── pages/
│   └── proj-mgmt-app/
│       ├── about.html                      # Standalone product about page
│       └── presentation.html               # Presentation slides
├── scripts/
│   └── test_page.sh                        # Test runner
├── .github/workflows/
│   ├── ci.yml                              # Run tests on any branch
│   └── deploy-pages.yml                    # Deploy docs/ to GitHub Pages (any branch)
├── package.json
└── README.md
```

## Page Authoring Workflow

Each project lives in its own subdirectory under `docs/pages/<project-id>/`.

### Add a new project

1. Create `docs/pages/<project-id>/index.html` — start from `docs/templates/sample-page.html` or use an LLM with `docs/templates/LLM_PROMPT.md`.
2. Add a project card to `docs/index.html` linking to `./pages/<project-id>/`.
3. Preview locally: `npx http-server docs -p 8000`
4. Commit and push — GitHub Actions will run tests and deploy.

### Add a sub-feature page

Create `docs/pages/<project-id>/<feature>.html` alongside the project's `index.html`.  
Link to it from both the project `index.html` and the landing page card's sub-pages list.

---

## Local Development

### Prerequisites

- Node.js and npm

### Install

```bash
npm install
```

### Preview

```bash
npx http-server docs -p 8000
# Open http://localhost:8000
```

### Test

```bash
npm test
```

---

## Design System

- `docs/assets/style.css` — shared CSS design tokens and components used by `docs/index.html`
- Project pages under `docs/pages/` use self-contained inline styles for portability
- Google Fonts — **Inter** is used site-wide

---

## GitHub Actions

| Workflow | Trigger | Purpose |
|---|---|---|
| `ci.yml` | Push on any branch (when `docs/**`, `package.json`, or workflows change) | Run `npm test` |
| `deploy-pages.yml` | Push on any branch | Deploy `docs/` to the `gh-pages` branch |

> **Note:** Deploying on every branch push makes it easy to preview changes before merging to `main`. The live site always reflects the latest pushed branch.

---

## LLM Prompt Guide

See [docs/templates/LLM_PROMPT.md](docs/templates/LLM_PROMPT.md) for prompts to help generate new project pages.

---

## Contributing

1. Create `docs/pages/<project-id>/index.html`
2. Add a card to `docs/index.html`
3. Test locally with `npm test` and `npx http-server docs -p 8000`
4. Commit and push — deploy is automatic
