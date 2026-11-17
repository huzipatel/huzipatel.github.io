// Auto-discover pitches at build time. Each src/data/pitches/*.ts exports
// a default or named `pitch` of type Pitch.
import type { Pitch } from './pitchTypes';

// Vite glob — eager loads all pitch files at build time.
const modules = import.meta.glob<{ pitch?: Pitch; default?: Pitch }>(
  './pitches/*.ts',
  { eager: true }
);

export const pitches: Pitch[] = Object.entries(modules)
  .map(([file, mod]) => {
    const p = (mod.pitch ?? mod.default) as Pitch | undefined;
    if (!p) throw new Error(`Pitch file ${file} exports no 'pitch' or default.`);
    return p;
  })
  // Drop expired pitches so the dynamic route won't even generate them.
  .filter((p) => !p.expiresAt || new Date(p.expiresAt) > new Date());
