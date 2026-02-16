#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const child = require('child_process');

const specsDir = path.join(process.cwd(),'specs');
if(!fs.existsSync(specsDir)){
  console.error('No specs/ directory found');
  process.exit(1);
}
const files = fs.readdirSync(specsDir).filter(f=>f.endsWith('.yaml')||f.endsWith('.yml'));
if(files.length===0){
  console.error('No spec files found in specs/');
  process.exit(1);
}

for(const f of files){
  const p = path.join(specsDir,f);
  console.log('Generating from', p);
  const r = child.spawnSync(process.execPath, [path.join('scripts','generate_intro.js'), p], { stdio: 'inherit' });
  if(r.status !== 0){
    console.error('Generator failed for', p);
    process.exit(r.status);
  }
}

// ensure design assets exist
console.log('Running design step');
const r2 = child.spawnSync(process.execPath, [path.join('scripts','design_page.js')], { stdio: 'inherit' });
if(r2.status !== 0){
  console.error('Design step failed');
  process.exit(r2.status);
}

// generate index.html
console.log('Generating index.html');
const r3 = child.spawnSync(process.execPath, [path.join('scripts','generate_index.js')], { stdio: 'inherit' });
if(r3.status !== 0){
  console.error('Index generation failed');
  process.exit(r3.status);
}

console.log('All done.');
