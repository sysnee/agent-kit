// Fails when the plugin version, the CHANGELOG and the pinned references in the docs
// disagree, so a release never ships pointing at an older tag.
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const read = (p) => readFileSync(path.join(root, p), 'utf8');
const { version } = JSON.parse(read('plugins/sysnee/.claude-plugin/plugin.json'));
const tag = `v${version}`;
const errors = [];

if (!read('CHANGELOG.md').includes(`## ${tag}`)) errors.push(`CHANGELOG.md has no "## ${tag}"`);

const files = ['README.md', ...readdirSync(path.join(root, 'configs')).map((f) => `configs/${f}`)];
for (const file of files) {
  const text = read(file);
  for (const m of text.matchAll(/agent-kit(?:#|\/tree\/)(v\d+\.\d+\.\d+)/g)) {
    if (m[1] !== tag) errors.push(`${file}: pins ${m[1]}, plugin is ${tag}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`pins ok (${tag})`);
