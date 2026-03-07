# SPEC: Project Intro Page Format

This file defines the reference specification format for project intro pages in this repository.
Pages currently live at `docs/pages/<project-id>/index.html` and are authored manually or with LLM assistance.

## Spec Fields

| Field | Required | Description |
|---|---|---|
| `id` | ✓ | Short identifier used as directory name / slug (e.g. `proj-mgmt-app`) |
| `name` | ✓ | Human-friendly project name |
| `intent` | ✓ | One-sentence statement of the project's purpose |
| `summary` | ✓ | Short paragraph (2–4 sentences) describing the project |
| `features` | — | List of key features or selling points |
| `audience` | — | Who should read/consume this page |
| `tone` | — | `neutral`, `technical`, `marketing`, or `friendly` |
| `usage` | — | Short usage or how-to pointers |
| `links` | — | Map of `label: url` for important links (repo, docs, demo) |
| `assets` | — | List of image filenames under `docs/assets/` |
| `cta` | — | Call-to-action text (e.g. "Try the demo", "Open an issue") |
| `sub_pages` | — | List of sub-feature pages in the same project directory |

## Conventions

- `id` must be lowercase and hyphen-separated.
- `summary` should be 2–4 sentences.
- `features` should be concise bullet points.
- Project directory: `docs/pages/<id>/index.html`
- Sub-feature pages: `docs/pages/<id>/<feature>.html`
- Each page should include a "← Back" link to its parent.

## Example

```yaml
id: proj-mgmt-app
name: Project Management Application
intent: "Secure, role-based project management platform for cybersecurity assessment teams"
audience: "Security firm managers, sales teams, delivery engineers"
tone: marketing
summary: |
  A Node.js web application with Microsoft Entra ID (Azure AD) authentication,
  three-tier RBAC (Admin / Sales / Delivery), and a full reporting pipeline
  with PDF & DOCX generation — deployed to AWS ECS Fargate.
features:
  - Microsoft Entra ID SSO via OAuth 2.0 / OIDC
  - Role-based dashboards for Admin, Sales, and Delivery
  - S3-backed file storage and DynamoDB data layer
  - Automated PDF & DOCX report generation
  - Slack notifications on project milestones and status changes
  - Docker + AWS ECS Fargate deployment
links:
  Repo: https://github.com/noobsolutions-2026/project-intro-pages
cta: "View the full project introduction"
sub_pages:
  - id: report-generation
    name: Report Generation
    intent: "Dynamic PDF and DOCX report generation with Mustache templates and S3 storage"
```
