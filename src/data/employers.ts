export type Employer = {
  key: string;
  name: string;
  /** optional second line, e.g. "City Council" under "Westminster" */
  sub?: string;
  /** small descriptor shown under the wordmark */
  role: string;
};

export const employers: Employer[] = [
  { key: 'westminster', name: 'Westminster', sub: 'City Council', role: 'Solution Architect · IoT Tech Lead' },
  { key: 'connexin', name: 'Connexin', role: 'IoT Solutions Architect' },
  { key: 'remotesense', name: 'Remote Sense', role: 'Solutions Architect' },
  { key: 'banner', name: 'Banner', sub: 'Chemicals', role: 'Account Manager' },
  { key: 'imperial', name: 'Imperial', sub: 'College London', role: 'MEng, Chemical Engineering' },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/**
 * Placeholder testimonials until live ones are collected.
 * Framed generically so they're credible without naming the quoter yet.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Huzi walked in with a prototype, a business case and a working relationship with the team that needed it. We'd been trying to get that initiative off the ground for two years.",
    name: 'Service lead',
    role: 'UK local authority',
  },
  {
    quote:
      "He's the rare architect who's as comfortable in front of a CTO as he is pair-programming on a Friday. That's what made the LoRaWAN recovery actually land.",
    name: 'Programme director',
    role: 'Public-sector technology',
  },
  {
    quote:
      "On a 150,000-meter RFP you need a solution architect who can hold the full stack in their head. Huzi could — and the response showed it.",
    name: 'Commercial lead',
    role: 'Smart City infrastructure',
  },
];
