#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const dataFile = join(root, 'assets/js/business-pages-data.js');
const registryFile = join(root, 'assets/js/site-registry.js');
const paths = [...readFileSync(dataFile, 'utf8').matchAll(/P\['([^']+)'\]\s*=\s*page/g)].map((match) => match[1]);
let registry = readFileSync(registryFile, 'utf8');

for (const path of paths) {
  const escaped = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp("(\\{ path: '" + escaped + "',[\\s\\S]*?branch: 'b2b', status: )'planned'");
  if (!pattern.test(registry)) throw new Error('Planned B2B registry entry not found: ' + path);
  registry = registry.replace(pattern, "$1'built'");
}

writeFileSync(registryFile, registry, 'utf8');
console.log(`Registered ${paths.length} Business pages as built.`);
