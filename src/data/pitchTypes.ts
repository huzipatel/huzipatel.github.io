// Shared types for private per-application pitch pages.
//
// Each pitch lives in src/data/pitches/<slug>.ts and exports a `pitch`
// of type Pitch. The dynamic route /apply/[slug].astro picks them up.
//
// Slugs include an unguessable 8-char suffix so URLs aren't crawlable or
// enumerable. Pages are noindex + excluded from the sitemap.
//
// Content lives in sections[] as a flat list of typed blocks. Add new
// block variants as the need arises — the renderer is a tagged union.

export type Block =
  | { type: 'heading'; level?: 2 | 3; text: string; mono?: boolean }
  | { type: 'paragraph'; text: string }
  | { type: 'lede'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'numbered'; items: string[] }
  | { type: 'callout'; title?: string; body: string; tone?: 'accent' | 'warn' | 'mute' }
  | { type: 'code'; language?: string; code: string; caption?: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'embed'; src: string; title?: string; height?: number }
  | { type: 'metricRow'; metrics: { value: string; label: string }[] }
  | { type: 'links'; items: { label: string; href: string }[] }
  | { type: 'hr' };

export interface MiniProject {
  title: string;
  problem: string;      // one sentence: what question does the demo answer
  approach: string;     // 2-4 sentences: method
  stack?: string[];     // chips
  liveDemoUrl?: string;
  repoUrl?: string;
  artefacts?: { label: string; href: string }[];
}

export interface Pitch {
  slug: string;         // must match filename; include 8-char random suffix
  company: string;
  role: string;
  roleLink?: string;    // original JD URL if public
  location?: string;
  createdAt: string;    // ISO date
  expiresAt?: string;   // ISO date — pitch 404s after this
  // Short thesis shown at top of the page. 1-3 sentences.
  thesis: string;
  // Headline metrics strip under the thesis (optional).
  headlineMetrics?: { value: string; label: string }[];
  // The actual mini-project / demo built for this role.
  miniProject?: MiniProject;
  // Free-form content — write as much or as little as you want.
  sections: Block[];
  // Contact CTA at the bottom. Falls back to defaults.
  cta?: {
    heading?: string;
    body?: string;
    email?: string;
    calendarUrl?: string;
  };
  // Optional client-side password gate. SHA-256 hex of the password.
  // Not real auth — anyone can view source, lift the hash, and brute-force
  // or just skip the check. Intended as a "please don't share" speed bump.
  passwordSha256?: string;
}
