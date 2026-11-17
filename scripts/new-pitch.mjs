#!/usr/bin/env node
// Scaffold a new per-application pitch. Usage:
//   node scripts/new-pitch.mjs "Company Name" "Role Title" [--password "my code"]
//
// Writes src/data/pitches/<company-slug>-<random>.ts and prints the URL.
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { createHash, randomBytes } from 'node:crypto';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repo = resolve(__dirname, '..');

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/new-pitch.mjs "Company Name" "Role Title" [--password "code"] [--expires 2026-12-31]');
  process.exit(1);
}

const company = args[0];
const role = args[1];
let password = null;
let expiresAt = null;
for (let i = 2; i < args.length; i++) {
  if (args[i] === '--password') password = args[++i];
  if (args[i] === '--expires') expiresAt = args[++i];
}

const rand = randomBytes(4).toString('hex'); // 8 hex chars
const slug = `${slugify(company)}-${slugify(role)}-${rand}`.slice(0, 80);

const pitchesDir = resolve(repo, 'src', 'data', 'pitches');
if (!existsSync(pitchesDir)) mkdirSync(pitchesDir, { recursive: true });
const outPath = resolve(pitchesDir, `${slug}.ts`);
if (existsSync(outPath)) { console.error('File exists:', outPath); process.exit(1); }

const passwordSha256 = password
  ? createHash('sha256').update(password).digest('hex')
  : null;

const now = new Date().toISOString().slice(0, 10);

const body = `import type { Pitch } from '../pitchTypes';

export const pitch: Pitch = {
  slug: ${JSON.stringify(slug)},
  company: ${JSON.stringify(company)},
  role: ${JSON.stringify(role)},
  // roleLink: 'https://...',
  // location: 'London, UK',
  createdAt: ${JSON.stringify(now)},${expiresAt ? `\n  expiresAt: ${JSON.stringify(expiresAt)},` : ''}
  thesis:
    'One to three sentences on why I am the right person for this role. Lead with what I can do for them, not with my CV.',
  headlineMetrics: [
    // { value: '£2–4m', label: 'annual rateable value uncovered at WCC' },
    // { value: '150k+', label: 'meters in winning Smart City RFP' },
  ],
  miniProject: {
    title: 'Mini-project title',
    problem: 'One sentence: the concrete question this demo answers for them.',
    approach: 'Two to four sentences on how I built it and why this method.',
    stack: ['Python', 'FastAPI', 'Playwright'],
    // liveDemoUrl: 'https://...',
    // repoUrl: 'https://github.com/huzipatel/...',
    // artefacts: [{ label: 'Technical write-up (PDF)', href: '/apply/${slug}/artefacts/writeup.pdf' }],
  },
  sections: [
    { type: 'heading', text: 'Why this matters to you' },
    { type: 'paragraph', text: '...' },

    { type: 'heading', text: 'What I built' },
    { type: 'paragraph', text: '...' },
    { type: 'bullets', items: ['Point 1', 'Point 2', 'Point 3'] },

    { type: 'heading', text: 'What I would do first 30 / 60 / 90 days' },
    { type: 'numbered', items: ['30 days: ...', '60 days: ...', '90 days: ...'] },

    { type: 'callout', title: 'Caveats', tone: 'mute',
      body: 'Honest list of assumptions and limitations of the mini-project.' },
  ],
  cta: {
    // heading: "Let's talk",
    // body: '...',
    // calendarUrl: 'https://cal.com/huzipatel',
  },${passwordSha256 ? `\n  passwordSha256: ${JSON.stringify(passwordSha256)},` : ''}
};
`;

writeFileSync(outPath, body);
console.log('\n Created:', outPath.replace(repo + '/', ''));
console.log(' URL:    https://huzipatel.london/apply/' + slug + '/');
if (password) console.log(' Code:   ' + password + '   (store this separately, hash is in the file)');
console.log();
