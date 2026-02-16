# SPEC: Project Intro Page Format

This file defines the spec-driven format used to generate an introductory GitHub Pages entry for a project.

Fields

- `id` (required): short identifier used as filename/slug (e.g. `proj-mgmt-app`).
- `name` (required): human-friendly project name.
- `intent` (required): one-sentence statement of the project's purpose.
- `audience` (optional): who should read/consume this page.
- `tone` (optional): neutral, technical, marketing, friendly, etc.
- `summary` (required): short paragraph describing the project.
- `features` (optional): list of key features or selling points.
- `usage` (optional): short usage or how-to pointers.
- `links` (optional): map of `label: url` for important links (repo, docs, demo).
- `assets` (optional): list of image filenames under `docs/assets/`.
- `cta` (optional): call-to-action (e.g., "Try the demo", "Open an issue").

Guidelines

- Keep `id` lowercase, hyphen-separated.
- `summary` should be 2–4 sentences.
- `features` should be short bullet points.

Example

```yaml
id: proj-mgmt-app
name: Project Management App
intent: "Provide a small, focused project management UI for teams"
audience: "developers, product managers"
tone: marketing
summary: |
  Project Management App is a lightweight task and milestone tracker designed for small teams. It
  focuses on fast setup, clear status, and minimal configuration.
features:
  - Fast setup with Docker
  - Lightweight API and UI
usage: |
  See the repository README for quick start instructions and deploy guides.
links:
  Repo: https://github.com/example/proj-mgmt-app
  Demo: https://example.github.io/proj-mgmt-app
cta: "Try the demo or open an issue to request features"
```
