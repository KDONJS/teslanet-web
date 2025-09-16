// Simple generator to write src/assets/env.js from MAPBOX_TOKEN
const fs = require('fs');
const path = require('path');

const token = process.env.MAPBOX_TOKEN || '';
const targetPath = path.resolve(__dirname, '..', 'src', 'assets', 'env.js');

const content = `window.__env = window.__env || {};
window.__env.MAPBOX_TOKEN = ${JSON.stringify(token)};
`;

fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, content, { encoding: 'utf-8' });

if (!token) {
  console.warn('[generate-env] Warning: MAPBOX_TOKEN is empty. Mapbox will fail to load.');
} else {
  console.log('[generate-env] MAPBOX_TOKEN injected into assets/env.js');
}