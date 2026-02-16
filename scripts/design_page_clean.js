#!/usr/bin/env node
// Produce a shared CSS file used by both index and project pages (dark SaaS theme).
const fs = require('fs');
const path = require('path');
const out = path.join(process.cwd(),'docs','assets');
if(!fs.existsSync(out)) fs.mkdirSync(out,{recursive:true});
const css = `:root{--bg-1:#0b1220;--bg-2:#07101a;--panel:#0f1720;--muted:#9aa6b2;--accent:#6ea8ff;--accent-2:#7c3aed;--glass: rgba(255,255,255,0.04);--card-shadow: 0 10px 30px rgba(2,6,23,0.6);--radius:14px;--gap:20px}
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;color:#e6eef9;background:linear-gradient(180deg,var(--bg-1),var(--bg-2));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;padding:36px}

.wrap{max-width:1100px;margin:0 auto;display:flex;flex-direction:column;gap:28px}
header.hero{display:flex;flex-direction:column;gap:18px;background:linear-gradient(90deg, rgba(124,58,237,0.12), rgba(110,168,255,0.06));padding:28px;border-radius:18px;box-shadow:var(--card-shadow);backdrop-filter: blur(6px);border:1px solid rgba(255,255,255,0.02)}
.hero-top{display:flex;gap:18px;align-items:center}
.logo{width:72px;height:72px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--accent-2),var(--accent));color:white;font-weight:700;font-size:20px;flex:0 0 72px;box-shadow:0 6px 18px rgba(124,58,237,0.18)}
.meta{display:flex;flex-direction:column;gap:6px}
h1{margin:0;font-size:28px;letter-spacing:-0.3px}
.tagline{color:var(--muted);margin:0;font-size:15px}
.hero-row{display:flex;gap:16px;align-items:center;margin-top:8px;flex-wrap:wrap}
.cta{background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#061226;padding:10px 14px;border-radius:10px;text-decoration:none;font-weight:600;box-shadow:0 8px 22px rgba(110,168,255,0.12)}
.secondary{background:transparent;border:1px solid rgba(255,255,255,0.04);color:var(--muted);padding:9px 12px;border-radius:10px;text-decoration:none}
.value{color:var(--muted);font-size:15px;margin-top:6px}

main.content{display:grid;grid-template-columns:1fr 360px;gap:26px}
@media (max-width:960px){ main.content{grid-template-columns:1fr} .logo{width:64px;height:64px} }
.panel{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:20px;border-radius:14px;border:1px solid rgba(255,255,255,0.02);box-shadow:var(--card-shadow)}

section.overview{min-height:160px}
.overview p{color:var(--muted);line-height:1.6;margin:0 0 12px 0}
.benefits{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-top:14px}
.benefit{background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.02)}

.tech{display:flex;flex-direction:column;gap:12px}
.badges{display:flex;flex-wrap:wrap;gap:10px}
.badge{padding:8px 10px;border-radius:999px;background:rgba(255,255,255,0.03);color:var(--muted);font-weight:600;font-size:13px;border:1px solid rgba(255,255,255,0.02)}
.arch{margin-top:10px;border-radius:10px;padding:12px;background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));border:1px dashed rgba(255,255,255,0.04);min-height:160px;display:flex;align-items:center;justify-content:center;color:var(--muted)}

.features-list{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media (max-width:720px){ .features-list{grid-template-columns:1fr} }
.feature{display:flex;gap:12px;align-items:flex-start;background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.02)}
.icon{width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,var(--accent),var(--accent-2));display:flex;align-items:center;justify-content:center;color:#041225;flex:0 0 36px}

aside.sidebar{display:flex;flex-direction:column;gap:14px}
.meta-card{display:flex;flex-direction:column;gap:8px;align-items:stretch}
.meta-row{display:flex;justify-content:space-between;color:var(--muted);font-size:13px}
.small{font-size:13px;color:var(--muted)}

/* Index / Landing specific styles */
.index-hero{padding:48px 24px;text-align:center}
.index-hero h1{margin:0;font-size:36px}
.index-hero p{color:var(--muted);margin-top:8px}
.index-container{max-width:1100px;margin:0 auto;padding:24px}
.index-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:24px}
.index-card{background:var(--panel);border-radius:12px;padding:20px;box-shadow:0 6px 24px rgba(2,6,23,0.6);transition:transform .18s ease;border:1px solid rgba(255,255,255,0.02)}
.index-card:hover{transform:translateY(-6px)}
.index-card h3{margin:0 0 8px 0}
.index-card p{color:var(--muted);margin:0 0 12px 0}
.nav{position:sticky;top:12px;background:transparent;padding:12px;text-align:center}
.footer{margin-top:36px;text-align:center;color:var(--muted);padding:24px}
`;
fs.writeFileSync(path.join(out,'style.css'), css, 'utf8');
console.log('Wrote docs/assets/style.css');
