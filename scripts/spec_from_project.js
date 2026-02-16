#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

if(process.argv.length < 3){
  console.error('Usage: node scripts/spec_from_project.js <project-path>');
  process.exit(2);
}
const projPath = process.argv[2];
if(!fs.existsSync(projPath) || !fs.statSync(projPath).isDirectory()){
  console.error('Project path not found or not a directory');
  process.exit(2);
}
const id = path.basename(projPath).toLowerCase().replace(/[^a-z0-9\-]+/g,'-');
const readmePath = path.join(projPath,'README.md');
let summary = 'Project intro not available.';
if(fs.existsSync(readmePath)){
  const rd = fs.readFileSync(readmePath,'utf8');
  const paragraphs = rd.split(/\n\s*\n/).map(p=>p.trim()).filter(Boolean);
  if(paragraphs.length) summary = paragraphs[0];
}
const name = id.replace(/[-_]/g,' ').replace(/\b\w/g, c=>c.toUpperCase());
const intent = summary.split(/[\.\!\?]/)[0] || '';
const spec = {
  id: id,
  name: name,
  intent: intent || `Introduce ${name}`,
  audience: 'users,developers',
  tone: 'marketing',
  summary: summary,
  features: [],
  links: {
    Repo: ''
  },
  cta: 'Learn more'
};
const outDir = path.join(process.cwd(),'specs');
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir,{recursive:true});
const outFile = path.join(outDir, `${id}.spec.yaml`);
fs.writeFileSync(outFile, yaml.dump(spec), 'utf8');
console.log('Wrote', outFile);
