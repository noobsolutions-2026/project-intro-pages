# Project Overview

This repository, `project-intro-pages`, serves as a system for generating and hosting project introduction pages on GitHub Pages. It leverages simple HTML templates and a defined specification format (YAML) to create consistent, modern-looking web pages that showcase individual projects and an overall index.

While the project was designed with a "spec-driven generator" concept, the automated generation scripts (`npm run generate`, `npm run generate:all`) are currently disabled. The primary workflow involves manual editing of HTML templates, optionally assisted by Large Language Models (LLMs), to produce the static `index.html` and individual project pages within the `docs/` directory.

Key aspects include:
- **Templating:** Uses HTML templates (`docs/templates/sample-page.html`, `docs/templates/index-template.html`) for consistent page structures.
- **LLM Integration:** Provides guidance (`docs/templates/LLM_PROMPT.md`) for using LLMs to populate template content.
- **Modern Design:** Recently updated to incorporate modern web design principles for project and index pages, using `docs/assets/style.css`.
- **Deployment:** Automatically deploys the `docs/` content to GitHub Pages via GitHub Actions.

## Building and Running

### Prerequisites
- Node.js and npm

### Installation
To set up the project locally, navigate to the project root and install the dependencies:
```bash
npm install
```

### Local Development Server
To preview the generated pages locally, you can serve the `docs/` directory using `http-server`:
```bash
npx http-server docs -p 8000
```
Then, open your browser to `http://localhost:8000`.

### Generating/Updating Project Pages (Manual Workflow)
As automated generation scripts are currently disabled, the process is manual:
1.  **For individual project pages:** Copy `docs/templates/sample-page.html` to `docs/<your-project-id>.html`.
2.  **For the index page:** Copy `docs/templates/index-template.html` to `docs/index.html`.
3.  Edit the copied HTML files manually, filling in the placeholders (`{{PROJECT_NAME}}`, `{{SUMMARY}}`, etc.).
    *   Refer to `docs/templates/LLM_PROMPT.md` for guidance on using LLMs to assist in content generation.

### Testing
Run the project's tests, which primarily verify the existence of the `docs` directory and essential template files:
```bash
npm test
```

## Development Conventions

-   **Content Generation:** Currently relies on a manual workflow involving copying and editing HTML templates, with optional LLM assistance. Automated generation scripts are placeholders.
-   **Styling:** Global styles are managed in `docs/assets/style.css`. Developers should update this file to maintain consistent branding and modern aesthetics across all project pages.
-   **GitHub Actions:**
    -   `ci.yml`: Runs `npm test` on changes to `docs/`, `package.json`, or workflow files.
    -   `deploy-pages.yml`: Deploys the content of the `docs/` directory to the `gh-pages` branch for GitHub Pages deployment upon pushes to `main`.
-   **Project Specification:** While automated generation is paused, project details are intended to follow the YAML format defined in `SPEC.md`. This implies future potential for re-enabling spec-driven generation.
