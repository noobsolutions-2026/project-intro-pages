# project-intro-pages

Repository to host GitHub Pages sites that introduce selected projects. This repo uses **simple HTML templates** that you edit manually or provide to an LLM for generation.

## Quick Start (Local)

### Install dependencies:

```bash
cd github/noobsolutions.2026_gmail.com/project-intro-pages
npm install
```

### Create a project page (manual):

```bash
# Copy the sample template
cp docs/templates/sample-page.html docs/my-project-id.html

# Edit in your editor and save
# Then test locally:
npx http-server docs -p 8000
```

### Create a project page (using an LLM):

1. Read the LLM prompt guide: `docs/templates/LLM_PROMPT.md`
2. Copy the template file contents (`docs/templates/sample-page.html`) into your LLM prompt.
3. Provide your project details (name, intent, summary, features, links).
4. Paste the LLM output to `docs/<your-id>.html`.

### Run tests:

```bash
npm test
```

## Local Preview

Serve the `docs/` folder on a local port:

```bash
npx http-server docs -p 8000
```

## Template-Based Workflow

This repository intentionally **does not auto-generate** pages. Instead, you:

1. **Copy a template** (`sample-page.html` or `index-template.html`)
2. **Edit manually** or **use an LLM** to populate the placeholders
3. **Save the HTML** to `docs/`
4. **Test locally**, then commit and push

## Manual Maintenance Steps

1. Copy `docs/templates/sample-page.html` to `docs/<your-id>.html`
2. Edit placeholders:
   - `{{PROJECT_NAME}}` → your project name
   - `{{INTENT}}` → one-line elevator pitch
   - `{{SUMMARY}}` → brief description
   - `{{FEATURES}}` → key features (as `<li>` items)
   - `{{LINKS}}` → optional links
   - `{{CTA_TEXT}}` and `{{CTA_URL}}` → call-to-action (optional)
3. Test: `npx http-server docs -p 8000`

## Creating an Index Page

Copy and customize `docs/templates/index-template.html` to `docs/index.html`:
- Update project cards to link to your pages
- Edit the header text

## LLM Prompt Guide

See [docs/templates/LLM_PROMPT.md](docs/templates/LLM_PROMPT.md) for detailed guidance on prompting LLMs to generate pages, including example prompts and troubleshooting.

## Design and Styling

- Edit `docs/assets/style.css` to customize globally
- Or replace the stylesheet link in individual pages with your own CSS

## Deployment

GitHub Actions workflows:
- **ci.yml** — Run tests when `docs/` changes
- **deploy-pages.yml** — Publish `docs/` to GitHub Pages on push to `main`

## Project Structure

```
project-intro-pages/
├── docs/
│   ├── assets/style.css       # Shared stylesheet
│   ├── templates/
│   │   ├── sample-page.html   # Project page template
│   │   ├── index-template.html # Landing page template
│   │   ├── README.md          # Template guide
│   │   └── LLM_PROMPT.md      # LLM generation guide
│   └── <your-project>.html    # Your pages
├── scripts/
│   ├── test_page.sh           # Test runner
│   └── disabled/              # Archived automation scripts
├── .github/workflows/
│   ├── ci.yml                 # Run tests
│   └── deploy-pages.yml       # Deploy to GitHub Pages
├── package.json
└── README.md
```

## Key Files

- [docs/templates/LLM_PROMPT.md](docs/templates/LLM_PROMPT.md) — How to prompt LLMs to generate pages
- [docs/templates/sample-page.html](docs/templates/sample-page.html) — HTML template for project pages
- [docs/templates/index-template.html](docs/templates/index-template.html) — HTML template for landing page

## Contributing

1. Copy `docs/templates/sample-page.html` to `docs/<project-id>.html`
2. Edit manually or use an LLM
3. Test locally: `npx http-server docs -p 8000`
4. Add a card to `docs/index.html`
5. Commit and push to `main` — GitHub Actions will publish to GitHub Pages

---

For questions, open an issue or submit a pull request.
