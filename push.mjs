import fs from 'fs';
import path from 'path';

const TOKEN = process.env.GITHUB_TOKEN || '';
const REPO = 'imranelmokhtari322-dev/Atlasproiptv';
const BASE = '/Users/macbookpro/Downloads/swivtv green and white copie 3';

const IGNORE = ['node_modules', '.git', 'dist', '.DS_Store', 'push.mjs', '.claude'];
const IGNORE_EXT = ['.woff', '.woff2', '.ttf', '.eot'];
const IGNORE_FILES = [
  'current_site.png','live_shot.png','unclear_shot.png','pricing_new.png',
  'pricing_screenshot.png','package-lock.json'
];

async function api(endpoint, method = 'GET', body = null) {
  const res = await fetch(`https://api.github.com${endpoint}`, {
    method,
    headers: {
      Authorization: `token ${TOKEN}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
    },
    body: body ? JSON.stringify(body) : null,
  });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = { message: text }; }
  if (!res.ok) throw new Error(`${res.status}: ${json.message}`);
  return json;
}

function getFiles(dir, base = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const rel = path.relative(base, full);
    if (IGNORE.some(i => rel === i || rel.startsWith(i + path.sep))) continue;
    if (IGNORE_FILES.includes(e.name)) continue;
    if (e.isDirectory()) {
      files = files.concat(getFiles(full, base));
    } else {
      if (IGNORE_EXT.includes(path.extname(e.name).toLowerCase())) continue;
      // Skip large screenshot files
      const stat = fs.statSync(full);
      if (stat.size > 5 * 1024 * 1024) { console.log(`  ⚠ Skipping large file: ${rel} (${(stat.size/1024/1024).toFixed(1)}MB)`); continue; }
      files.push(rel);
    }
  }
  return files;
}

async function main() {
  const files = getFiles(BASE);
  console.log(`Pushing ${files.length} files to ${REPO}...\n`);

  let ok = 0, fail = 0;
  for (const file of files) {
    const fullPath = path.join(BASE, file);
    const content = fs.readFileSync(fullPath).toString('base64');
    const ghPath = file.replace(/\\/g, '/');
    try {
      // Check if file already exists to get its SHA
      let sha;
      try {
        const existing = await api(`/repos/${REPO}/contents/${ghPath}`);
        sha = existing.sha;
      } catch { /* new file */ }

      await api(`/repos/${REPO}/contents/${ghPath}`, 'PUT', {
        message: sha ? `Update ${ghPath}` : `Add ${ghPath}`,
        content,
        ...(sha ? { sha } : {}),
        branch: 'main',
      });
      console.log(`  ✓ ${ghPath}`);
      ok++;
    } catch (e) {
      console.error(`  ✗ ${ghPath}: ${e.message}`);
      fail++;
    }
  }

  console.log(`\n✓ Done! ${ok} pushed, ${fail} failed.`);
  console.log(`🔗 https://github.com/${REPO}`);
}

main().catch(e => { console.error('Error:', e.message); process.exit(1); });
