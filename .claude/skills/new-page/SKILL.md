---
name: new-page
description: Scaffold a new project intro page from the sample-page.html template, create the project directory under docs/pages/, and add a card to docs/index.html. Use when the user says "add a new project", "create a page for X", or "new project page".
disable-model-invocation: true
---

# New Project Page

Scaffold a new project intro page and wire it into the landing page.

## Steps

1. **Ask for project details** (if not already provided):
   - Project ID (filesystem-safe slug, e.g. `my-tool`)
   - Project name (human-friendly, e.g. `My Tool`)
   - PROJECT_SHORT (1–3 char abbreviation for the logo, e.g. `MT`)
   - Intent (one-line elevator pitch)
   - Summary (2–3 sentence description)
   - Features (3–5 bullet points)
   - CTA text and URL (optional)
   - Links (repo, docs, etc.) — optional

2. **Create the project directory and page**:
   - Read `docs/templates/sample-page.html`
   - Replace all `{{PLACEHOLDER}}` tokens with the provided values
   - Write to `docs/pages/<project-id>/index.html`
   - Use self-contained inline `<style>` (no external CSS link) for portability — project pages do NOT use `docs/assets/style.css`

3. **Add a card to `docs/index.html`**:
   - Read `docs/index.html`
   - Add a new `<div class="project-card" id="<project-id>">` block inside `.project-grid`, modelled on the existing `proj-mgmt-app` card
   - Include: icon (emoji), tag pills, h3 title, description paragraph, `<ul class="card-features">` list, and a `<a class="card-cta">` link pointing to `./pages/<project-id>/index.html`

4. **Verify**:
   - Run `npm test` to confirm templates still pass
   - Remind the user to preview with `npx http-server docs -p 8000`

## Notes

- Project pages use **inline styles only** — do not add `<link rel="stylesheet" href="...assets/style.css">` to project pages
- The card icon in `docs/index.html` should be a relevant emoji
- Tag pills should reflect the tech stack mentioned in the project details
- If the user provides a spec YAML at `specs/<project-id>.spec.yaml`, read it to populate fields automatically
