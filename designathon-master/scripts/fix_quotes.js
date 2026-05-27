const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'src');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/\.(jsx?|ts|tsx)$/.test(e.name)) fixFile(full);
  }
}

function fixFile(file) {
  let s = fs.readFileSync(file, 'utf8');
  const original = s;

  // If file appears to be wrapped as a string (starts with a double-quote on first non-space char)
  // remove a leading double-quote and/or trailing double-quote
  const trimmed = s.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    // remove only the outermost leading/closing quotes
    const startIdx = s.indexOf('"');
    const endIdx = s.lastIndexOf('"');
    if (startIdx !== -1 && endIdx > startIdx) {
      s = s.slice(0, startIdx) + s.slice(startIdx + 1, endIdx) + s.slice(endIdx + 1);
    }
  }

  // Replace escaped double quotes (\") with plain "
  s = s.replace(/\\\"/g, '"');

  // Remove any leading markdown code fence like ```jsx or ```js at start
  s = s.replace(/^\s*```(?:jsx|js|tsx|ts)\s*/i, '');
  // Remove trailing code fence
  s = s.replace(/\s*```\s*$/i, '');

  // If file contains duplicate content appended (common pattern: second copy starts with same imports),
  // trim anything after the first `export default <name>;` occurrence (keeps file ending at that export).
  const exportDefaultMatch = s.match(/export\s+default\s+[A-Za-z0-9_]+\s*;/);
  if (exportDefaultMatch) {
    const idx = s.indexOf(exportDefaultMatch[0]);
    const endOfExport = idx + exportDefaultMatch[0].length;
    // keep content up to endOfExport and a trailing newline
    const rest = s.slice(endOfExport);
    // if there's duplicate content after this (heuristic: contains another import or another export default), trim it
    if (/import\s+|export\s+default\s+/i.test(rest)) {
      s = s.slice(0, endOfExport) + '\n';
    }
  }

  // Normalize Windows escaped quotes left behind elsewhere
  s = s.replace(/\\n/g, '\n');

  if (s !== original) {
    fs.writeFileSync(file, s, 'utf8');
    console.log('Fixed:', file);
  }
}

walk(root);
console.log('Done.');
