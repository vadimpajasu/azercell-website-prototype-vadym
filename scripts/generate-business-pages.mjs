#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const dataText = readFileSync(join(root, 'assets/js/business-pages-data.js'), 'utf8');
const pages = [...dataText.matchAll(/P\['([^']+)'\]\s*=\s*page\('\1',\s*'([^']+)'/g)]
  .map((match) => ({ path: match[1], title: match[2] }));

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

for (const page of pages) {
  const output = join(root, page.path.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(page.title)} — Azercell Business</title>
<meta name="description" content="${escapeHtml(page.title)} prototype for the Azercell Business website.">
<meta property="og:type" content="website">
<meta property="og:title" content="${escapeHtml(page.title)} — Azercell Business">
<meta property="og:description" content="${escapeHtml(page.title)} prototype for the Azercell Business website.">
<meta property="og:image" content="https://azercell-website-prototype-vadym.vercel.app/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(page.title)} — Azercell Business">
<meta name="twitter:description" content="${escapeHtml(page.title)} prototype for the Azercell Business website.">
<meta name="twitter:image" content="https://azercell-website-prototype-vadym.vercel.app/og.png">
<link rel="stylesheet" href="/assets/css/styles.css?v=business-pages-20260904-1">
<script src="/assets/js/hotjar.js"></script>
</head>
<body>
<div id="page-top"></div>
<main id="page-main"></main>
<div id="page-bottom"></div>
<div id="page-chat"></div>
<script src="/assets/js/site-registry.js"></script>
<script src="/assets/js/components.js"></script>
<script src="/assets/js/business-pages-data.js"></script>
<script>
/* PAGE CONNECTIONS — full map: PAGE_CONNECTIONS.md
 * INBOUND: Approved parent/hub and/or shared Business header, footer, homepage or floating bar — CONNECTED
 * OUTBOUND: Parent; applicable cards/actions; Contact Us; *6050; cited Azercell sources — CONNECTED
 * SHARED CHROME: Company, login, search, top-up and legal placeholders remain intentionally PLANNED
 */
</script>
<script src="/assets/js/business-page.js"></script>
<script src="/assets/js/app.js"></script>
</body>
</html>
`, 'utf8');
}

console.log(`Generated ${pages.length} Business pages.`);
