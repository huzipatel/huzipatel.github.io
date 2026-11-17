import type { Pitch } from '../pitchTypes';

export const pitch: Pitch = {
  slug: 'hitachi-solutions-europe-analytics-architect-a1f7b30f',
  company: 'Hitachi Solutions Europe',
  role: 'Analytics Architect',
  roleLink: 'https://global.hitachi-solutions.com/en-gb/careers/',
  location: 'UK / Hybrid',
  createdAt: '2026-11-13',
  thesis:
    'Westminster bought me the architect-in-house experience; Connexin bought me the consultancy and pre-sales reps. I want to go back to a consulting bench because I enjoy the discovery, the bid work and the client-trust side of this job as much as I enjoy the architecture itself — and Hitachi is the UK Microsoft-stack consultancy that lets me do both at Analytics-Architect weight without diluting into generalist sales.',
  headlineMetrics: [
    { value: '£2–4m', label: 'rateable value uncovered via a self-initiated analytics prototype at WCC' },
    { value: '£200k+', label: 'commercial recovery on supplier lock-in via rearchitect + re-tender' },
    { value: '150k+', label: 'LoRaWAN water meters — winning Smart City RFP I supported at Connexin' },
    { value: '6 yrs', label: 'solution + data architecture across in-house and consultancy' },
  ],
  miniProject: {
    title: 'Discovery → target architecture → commercials, in one artefact',
    problem:
      'How quickly can a candidate go from a client brief to a defensible Microsoft-stack analytics architecture, a phased roadmap, and a credible commercial frame? That is the Analytics Architect job description in miniature.',
    approach:
      'I built a mock Hitachi client deliverable end-to-end: fictional UK mid-market retailer (Northwind Retail Group, legacy SSRS / on-prem SQL), a discovery brief, current- vs target-state Microsoft architecture diagrams (ADF / Fabric Lakehouse / Power BI), a phased 12-month roadmap, and an indicative T&M commercial. Styled in Hitachi brand so you can see what the client-facing output would feel like.',
    stack: ['Microsoft Fabric', 'Azure Data Factory', 'Synapse', 'Power BI', 'C4 model', 'Dynamics 365', 'Hitachi branded'],
    liveDemoUrl: '/apply/hitachi-solutions-europe-analytics-architect-a1f7b30f/northwind/',
  },
  sections: [
    { type: 'heading', text: 'Why this role, from where I sit' },
    { type: 'paragraph',
      text: "I have done the job on both sides of the table. At Connexin I was an IoT / Smart City Solutions Architect on a consulting bench — discovery with water utilities, bid support on the 150k-meter LoRaWAN RFP that we won, platform strategy sessions to pull a critical account back from the brink. I loved the pre-sales rhythm: you walk into a room cold, you leave having built enough trust that they want you in the solution." },
    { type: 'paragraph',
      text: "At Westminster I have been the architect the consultants are selling to — which has sharpened exactly what a good one looks like from the client side. The Hitachi Analytics Architect brief describes a role that sits in both spaces: deliver the architecture, run the client relationship, contribute on bid work, grow junior consultants. That is the shape of role I have been building toward." },

    { type: 'heading', text: 'What I would bring day one' },
    { type: 'bullets', items: [
      'Microsoft-stack fluency with teeth. At WCC I rebuilt a short-staffed data pipeline on Python + Kubernetes cron on Azure, ingesting third-party APIs to InfluxDB, to prevent a 3-month roadmap slip — I know the Microsoft data estate from the inside, not the slideware side.',
      'A self-initiated VLM + Street View analytics prototype that uncovered £2–4m of additional annual rateable value for WCC. Shipped end-to-end, business case written, now being commercialised to other councils. This is the "developing original approaches to improve or replace existing processes" bullet from the JD, with a receipt.',
      'Pre-sales reps that land. Supported a winning 150k-meter LoRaWAN RFP for a UK Smart City customer, pitched the WCC rateable-value tool to leadership and external councils, delivered C-level presentations for Connected London / OpenRoaming to the Mayor\'s Office.',
      'Client recovery: inherited a Smart Waste account in dispute at Connexin, pivoted it to a collaborative relationship with ~28% performance improvement. Instilling trust under pressure is in the JD and I\'ve done it.',
      'An architect\'s instinct for the second user. I design for the team that will own the system, not the one that built it — governance, documentation, honest risk. Spearheaded the WCC IoT Maturity Model, led technical architecture for cross-council computer vision platform.',
    ]},

    { type: 'heading', text: 'The mini-project, in one sentence' },
    { type: 'paragraph',
      text: 'Look at the live demo above. That is how I\'d expect to deliver for a Hitachi client within the first weeks of an engagement — brief, current-state, target-state on the Microsoft stack, phased roadmap, and commercials — presented in a form the client can actually take to their board.' },

    { type: 'heading', text: 'First 30 / 60 / 90 days' },
    { type: 'numbered', items: [
      "0–30: embed on two live accounts, read every discovery artefact and solution design, do the Microsoft certifications I'm missing (Fabric Analytics Engineer, Azure Data Engineer if not current), sit in on every bid review I can.",
      '31–60: own my first discovery stream end-to-end under a Lead Consultant. Co-author the solution design. Run the client steering update. Start building the internal pattern library I wish I had at Connexin (reference architectures by sector).',
      '61–90: lead a bid. Pitch a target architecture solo to a prospect. Start mentoring a junior consultant on client comms — the thing most architects underinvest in.',
    ]},

    { type: 'heading', text: 'Honest caveats' },
    { type: 'callout', tone: 'mute', title: 'Where I am less finished',
      body: "My BI tool depth is Power BI and Grafana day-to-day; Tableau / Qlik I can read and review but wouldn\'t claim as primary. My Microsoft certifications need refreshing (AWS SA Associate is current — Azure equivalents I\'d take in month one). I\'ve architected D&A estates but have less hands-on D365 CE / F&O depth than someone from a pure Dynamics consultancy — happy to cover that gap explicitly in the first 90 days and pair with F&O / CE architects on cross-practice bids." },

    { type: 'heading', text: 'On the "consultancy fit" question' },
    { type: 'paragraph',
      text: "People leave consultancy because the client-facing weight wears them out. I'm the opposite. The reason I want back on a bench is that I miss the variety, the pace of discovery → solution design → delivery compressed into 12 weeks, and the pre-sales conversations where you\'re arguing architecture with a CTO over a whiteboard. In-house gives you depth; consultancy gives you reps. I want more reps." },
  ],
  cta: {
    heading: 'Happy to walk through the demo live',
    body: "The Northwind artefact above is 90 minutes of my time. I'd be glad to do the same exercise against a real Hitachi client scenario you've got on the bench — put me in a room, give me a brief, and let's see how I run discovery.",
  },
};
