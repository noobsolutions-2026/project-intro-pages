# LLM Prompt Guide: Generating Project Pages

This guide explains how to prompt an LLM (language model) to create or update project intro pages for your portfolio or documentation site.

## Overview

The `project-intro-pages` repository provides HTML templates that an LLM can fill in with your project details. Instead of running an automated generator, you provide the LLM with:

1. The **HTML template** (`sample-page.html`)
2. Your **project details** (name, intent, summary, features, links, CTA)

The LLM outputs a ready-to-use HTML file that you can save directly to `docs/<your-id>.html`.

## What to Provide to the LLM

When prompting an LLM, include:

### 1. The Template File
Copy the contents of `docs/templates/sample-page.html` and paste it in the LLM prompt. The template includes comments that tell the LLM:
- Which placeholders to replace (`{{PROJECT_NAME}}`, `{{INTENT}}`, etc.)
- What format each section expects (HTML, plain text, list items)
- Optional sections (e.g., call-to-action)

### 2. Your Project Details
Provide the following information (plain text or structured format):

```yaml
PROJECT_ID: my-awesome-project
PROJECT_NAME: My Awesome Project
PROJECT_SHORT: MAP              # 1-3 character logo/abbreviation
INTENT: Simplify X with one command
SUMMARY: |
  A brief description explaining what the project does.
  Can be multiple lines. Should be concise but informative.
FEATURES:
  - Feature 1
  - Feature 2
  - Feature 3
CTA_TEXT: Get Started          # Optional
CTA_URL: https://github.com/org/project  # Optional
LINKS: |
  <a href="https://github.com/org/project">Repository</a>
  <a href="https://docs.example.com">Documentation</a>
```

Or in simple text format:

```
Project: My Awesome Project (abbreviation: MAP)
Intent: Simplify X with one command
Summary: A brief description explaining what the project does.
Features: Feature 1, Feature 2, Feature 3
CTA: "Get Started" → https://github.com/org/project
Links: GitHub repository, Documentation site
```

## Example LLM Prompt

Copy and adapt this prompt for your LLM:

```
You are a web designer. Using the HTML template below, generate an intro page for a project.

Template file (docs/templates/sample-page.html):
[PASTE FULL CONTENTS OF sample-page.html HERE]

Project Details:
- PROJECT_ID: web-scraper-tool
- PROJECT_NAME: Web Scraper Tool
- PROJECT_SHORT: WST
- INTENT: Extract data from websites in seconds
- SUMMARY: A lightweight Python tool that scrapes web data and exports it to CSV or JSON formats. Designed for non-technical users.
- FEATURES:
  - Point-and-click element selection
  - Export to CSV, JSON, or Excel
  - Scheduled scraping with automation
- CTA_TEXT: Download Now
- CTA_URL: https://github.com/org/web-scraper-tool/releases
- LINKS: GitHub Repository, Documentation, Support Forum

Instructions:
1. Replace all {{PLACEHOLDER}} tokens with the values above.
2. For FEATURES, generate an HTML <li> list:
   <li>Point-and-click element selection</li>
   <li>Export to CSV, JSON, or Excel</li>
   <li>Scheduled scraping with automation</li>
3. For LINKS, generate HTML anchor tags in a <div>:
   <a href="https://github.com/org/web-scraper-tool">GitHub Repository</a>
   <a href="https://docs.example.com">Documentation</a>
   <a href="https://forum.example.com">Support Forum</a>
4. Output ONLY the final HTML. Do not include markdown fences, explanations, or surrounding text.
5. Ensure the HTML is valid and renders correctly.

Generate the page now.
```

## Using LLM Output

1. **Copy the LLM's HTML output** (the full `<html>...</html>` block).
2. **Save it** as `docs/<project-id>.html` (e.g., `docs/web-scraper-tool.html`).
3. **Test** by opening the file in a browser or serving locally:
   ```bash
   npx http-server docs -p 8000
   ```
4. **Edit manually** (if needed) using your editor to adjust content, styling, or links.

## Tips for Best Results

1. **Be specific** — provide exact project names, URLs, and descriptions.
2. **Keep summaries concise** — 2-3 sentences is usually ideal.
3. **List 3-5 features** — too many features clutter the page.
4. **Include links** — repository, documentation, or support channels.
5. **Test the output** — open the HTML in a browser to verify layout and links.

## Creating an Index Page

To create a landing page (`docs/index.html`), use `docs/templates/index-template.html`:

1. Copy `docs/templates/index-template.html` to `docs/index.html`.
2. For each project page, add a card:
   ```html
   <div class="index-card">
     <h3>Project Name</h3>
     <p>Short description of the project.</p>
     <a class="cta" href="./project-id.html">Open</a>
   </div>
   ```
3. Save and test.

Alternatively, prompt an LLM to generate the index:

```
Using the template docs/templates/index-template.html, create a landing page that lists
my projects:

Projects:
1. Web Scraper Tool — ./web-scraper-tool.html
2. Data Validator — ./data-validator.html
3. PDF Generator — ./pdf-generator.html

Generate the HTML landing page. Output ONLY valid HTML.
```

## Notes

- **No automation** — This repository intentionally uses templates instead of generators. Each page is created and maintained manually.
- **LLM-friendly templates** — The template includes clear comments for LLMs to understand structure and placeholders.
- **Styling** — All pages use `docs/assets/style.css`. Edit that file to customize the look and feel.
- **Version control** — Commit your HTML pages to Git to track changes and collaborate.

## Troubleshooting

**Issue**: LLM output includes markdown fences or extra text.
**Solution**: Ask the LLM to "output ONLY valid HTML, no explanations or markdown."

**Issue**: Links or features are malformed.
**Solution**: Verify you provided valid URLs and HTML-safe text (no unescaped `<` or `>`).

**Issue**: Styling doesn't match expected design.
**Solution**: Check that `<link rel="stylesheet" href="./assets/style.css">` points to the correct CSS file location.

---

For more information, see [docs/templates/README.md](./README.md).
