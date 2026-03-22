Template usage
--------------

This folder contains simple HTML templates you can copy and edit to make project intro pages.

- `sample-page.html` — copy to `docs/<your-id>.html`, edit project name, intent, features, and links.
- `index-template.html` — copy to `docs/index.html` and add one `index-card` per project linking to `./<id>.html`.

Workflow
--------
1. Copy the sample page:

```bash
cp docs/templates/sample-page.html docs/my-project-id.html
```

2. Edit `docs/my-project-id.html` in your editor.
3. Copy `docs/templates/index-template.html` to `docs/index.html` and update project cards.

Notes
-----
- Keep `docs/assets/style.css` next to `docs/` so templates look correct. If you prefer another stylesheet, update the `<link>` in the templates.
- The previous automatic generation scripts have been disabled; pages are maintained manually from these templates.
