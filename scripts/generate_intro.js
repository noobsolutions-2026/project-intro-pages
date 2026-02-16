#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function slugify(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');}

const argv = process.argv.slice(2);
if(argv.length < 1){
  console.error('Usage: node scripts/generate_intro.js <spec.yaml> [--marketing]');
  process.exit(2);
}
const specPath = argv[0];
const marketing = argv.includes('--marketing');

const specRaw = fs.readFileSync(specPath, 'utf8');
const spec = yaml.load(specRaw);
if(!spec.id || !spec.name || !spec.intent || !spec.summary){
  console.error('Spec must include id, name, intent, and summary');
  process.exit(2);
}

const slug = slugify(spec.id);
const outDir = path.join(process.cwd(), 'docs');
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, `${slug}.md`);

let md = `# ${spec.name}\n\n`;
md += `**Intent:** ${spec.intent}\n\n`;
md += `${spec.summary}\n\n`;
if(spec.features){
  md += '## Key features\n\n';
  spec.features.forEach(f => { md += `- ${f}\n`; });
  md += '\n';
}
if(spec.usage){ md += `## Usage\n\n${spec.usage}\n\n`; }
if(spec.links){ md += '## Links\n\n'; for(const k of Object.keys(spec.links)){ md += `- **${k}**: ${spec.links[k]}\n`; } md += '\n'; }
if(spec.cta){ md += `**Call to action:** ${spec.cta}\n\n`; }

if(marketing){
  md += '---\n\n*Marketing blurb:* This project delivers clear value by focusing on simplicity and rapid adoption. Share with your team and star the repo to follow updates.*\n';
}

fs.writeFileSync(outFile, md, 'utf8');
console.log('Generated', outFile);

// Update index.md to link to the page (append if not present)
const indexFile = path.join(outDir, 'index.md');
let index = '';
if(fs.existsSync(indexFile)) index = fs.readFileSync(indexFile,'utf8');
const linkLine = `- ${slug} — ${spec.name} (generated from \`specs/${path.basename(specPath)}\`)`;
if(!index.includes(linkLine)){
  index = index + `\n${linkLine}\n`;
  fs.writeFileSync(indexFile, index, 'utf8');
  console.log('Updated', indexFile);
}

// Also generate a simple HTML version using the docs assets
const htmlOut = path.join(outDir, `${slug}.html`);
const title = spec.name.replace(/</g, '&lt;');
const summaryHtml = spec.summary.replace(/</g,'&lt;').replace(/\n/g,'<br>');
let featuresHtml = '';
if(spec.features){
  featuresHtml = '<ul class="features">' + spec.features.map(f => `<li>${f}</li>`).join('') + '</ul>';
}
let linksHtml = '';
if(spec.links){
  linksHtml = '<ul>' + Object.keys(spec.links).map(k => `<li><strong>${k}:</strong> <a href="'+spec.links[k]+'">'+spec.links[k]+'</a></li>`).join('') + '</ul>';
}
const ctaHtml = spec.cta ? `<a class="cta" href="#">${spec.cta}</a>` : '';
const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title}</title>
  <link rel="stylesheet" href="./assets/style.css">
</head>
<body>
  <div class="container">
    <header>
      <div class="logo">PI</div>
      <div>
        <h1>${title}</h1>
        <div class="intent">${spec.intent}</div>
      </div>
    </header>
    <section class="card">
      <div class="summary">${summaryHtml}</div>
      ${featuresHtml}
      ${linksHtml}
      ${ctaHtml}
    </section>
    <footer>Generated from <code>specs/${path.basename(specPath)}</code></footer>
  </div>
</body>
</html>`;
fs.writeFileSync(htmlOut, html, 'utf8');
console.log('Generated', htmlOut);
