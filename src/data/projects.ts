export type Project = {
  slug: string;
  title: string;
  org: string;
  period: string;
  tagline: string;
  tags: string[];
  summary: string;
  problem: string;
  approach: string[];
  stack: string[];
  outcome: string[];
  role: string;
};

export const projects: Project[] = [
  {
    slug: 'vlm-rateable-value',
    title: 'VLM-driven rateable value discovery',
    org: 'UK local authority',
    period: '2024 — Present',
    tagline: 'Seven-figure annual business-rates uplift, surfaced by a vision-language model over street-level imagery.',
    tags: ['Vision-Language Models', 'Product', 'Revenue', 'Self-initiated'],
    role: 'Solution Architect / IoT Tech Lead — owned end-to-end from self-initiated prototype to shipped product.',
    summary:
      'UK business rates are set from a property list the national valuation body maintains. Properties change use, get subdivided, or quietly appear, and the list drifts. I prototyped a way to close that gap using street-level imagery and a vision-language model, then turned it into a product the organisation now plans to commercialise to other authorities.',
    problem:
      'Councils lose material annual revenue when the rating list is stale. Manual street surveys do not scale and the central valuation body has limited bandwidth. Nobody inside the organisation was treating this as an AI problem.',
    approach: [
      'Self-initiated a prototype: VLM over street-level panoramas, cross-referenced with the live rating list, to flag properties whose visible use did not match their valuation.',
      'Pitched to leadership, built the business case, ran stakeholder discovery with the national valuation body.',
      'Designed the solution flow in Miro, planned the backlog in Jira, and developed product features using Claude as a coding partner.',
      'Shaped a prototype-driven development process: iterate with service teams on early designs before locking architecture.',
    ],
    stack: ['Vision-language models', 'Street-level imagery APIs', 'Python', 'Azure', 'Claude', 'Jira / Miro'],
    outcome: [
      'Surfaced a seven-figure uplift in annual rateable value.',
      'Now being commercialised to other UK authorities.',
      'Became the internal template for scoping AI-driven revenue initiatives.',
    ],
  },
  {
    slug: 'bin-truck-vision',
    title: 'Bin-truck computer vision platform',
    org: 'UK local authority',
    period: '2024 — Present',
    tagline: 'A shared computer-vision platform for waste operations, built on the back of cross-functional buy-in.',
    tags: ['Computer Vision', 'Platform', 'Cross-team'],
    role: 'Solution Architect — conceptualised the platform and championed the high-level design across directorates.',
    summary:
      'Waste collection generates rich visual signal the organisation was not using. I designed the technical architecture for a shared computer-vision platform mounted on collection vehicles, and ran the cross-functional work needed to get it funded and built.',
    problem:
      'Operational visibility on the street — missed collections, contamination, fly-tipping, infrastructure damage — was limited to crew reports. Multiple teams wanted the data; nobody owned the platform.',
    approach: [
      'Produced high-level architecture and C4 diagrams to make the design legible to non-technical stakeholders.',
      'Ran discovery across waste, highways and public realm teams to anchor the use cases.',
      'Championed the design through governance (TDF / ARB) to secure cross-directorate backing.',
    ],
    stack: ['Computer vision', 'Edge compute', 'Azure', 'C4 model'],
    outcome: [
      'Platform approved with cross-organisation impact scope.',
      'Set the pattern for how the organisation stands up shared AI / CV infrastructure instead of per-team point solutions.',
    ],
  },
  {
    slug: 'lorawan-recovery',
    title: 'LoRaWAN estate recovery',
    org: 'UK local authority',
    period: '2024 — 2025',
    tagline: 'Six-figure commercial recovery by breaking supplier lock-in on a city-scale LoRaWAN gateway estate.',
    tags: ['IoT', 'Commercial', 'Procurement'],
    role: 'Solution Architect / IoT Tech Lead — technical lead for recovery and re-tender.',
    summary:
      "A city-scale LoRaWAN gateway estate was effectively owned by the incumbent supplier. I led the technical recovery — regaining control of the hardware, the network keys and the management plane — in time for a re-tender that materially improved the commercial position.",
    problem:
      'Vendor lock-in on critical infrastructure. Re-tender was approaching with no credible plan to switch supplier without ripping out physical gateways across the estate.',
    approach: [
      "Mapped the estate, access methods and dependencies; separated what was contractually ours from what was practically the supplier's.",
      'Designed a transition path that kept services live during handover.',
      'Supported procurement and contract negotiations with the technical evidence needed to shift commercial terms.',
    ],
    stack: ['LoRaWAN', 'Network architecture', 'Supplier / contract strategy'],
    outcome: [
      'Six-figure saving against the pre-recovery commercial position ahead of re-tender.',
      'Estate returned to the authority\'s control; vendor competition restored for the re-tender.',
    ],
  },
  {
    slug: 'city-wide-public-wifi',
    title: 'City-wide public WiFi architecture',
    org: 'UK local authority',
    period: '2024 — Present',
    tagline: 'Technical architecture lead for a borough\'s participation in a city-wide public WiFi programme.',
    tags: ['Architecture', 'Networking', 'Public sector'],
    role: 'Technical architecture lead; delivered presentations to senior external stakeholders.',
    summary:
      'A city-wide public WiFi initiative required consistent architecture across boroughs with very different estates, risk postures and incumbent suppliers. I led the local technical architecture — rollout design, threat modelling, supplier selection and senior stakeholder engagement.',
    problem:
      'Pan-city public WiFi needs a coherent reference architecture that still works for each borough\'s existing estate and risk appetite.',
    approach: [
      'Produced the target architecture for the local rollout and aligned it with the pan-city design.',
      'Ran threat modelling against the rollout to make the security case defensible.',
      'Supplier selection: shortlisted, evaluated and recommended partners.',
      'Presented design decisions and tradeoffs to senior external stakeholders.',
    ],
    stack: ['Public WiFi / OpenRoaming', 'Threat modelling', 'Enterprise architecture'],
    outcome: [
      'Rollout architecture approved; supplier selected.',
      'Positioned the borough as a lead participant in the pan-city programme.',
    ],
  },
  {
    slug: 'smart-city-water-meters',
    title: 'Smart City water-meter rollout',
    org: 'Connexin',
    period: '2021 — 2022',
    tagline: 'End-to-end Smart City architecture that supported a winning RFP for a 150,000+ LoRaWAN water-meter rollout.',
    tags: ['Smart City', 'LoRaWAN', 'Edge AI'],
    role: 'IoT Solutions Architect — end-to-end solution across sensors, network and enterprise apps.',
    summary:
      'At Connexin I architected end-to-end Smart City solutions — IoT sensors, Edge AI, LoRaWAN / 5G networks and the enterprise applications on top — and was part of the team that won a 150,000+ water-meter rollout.',
    problem:
      'Utilities RFPs require a credible story across the full stack: device, network, backhaul, data platform, customer systems. Any weak layer loses the deal.',
    approach: [
      'Designed end-to-end reference architectures spanning sensors, Edge AI, LoRaWAN / 5G and enterprise apps.',
      'Contributed the solution narrative that underpinned the RFP response.',
    ],
    stack: ['LoRaWAN', '5G', 'Edge AI', 'IoT platforms', 'Enterprise integration'],
    outcome: [
      'Winning RFP for a 150,000+ water-meter LoRaWAN rollout.',
      'Rebuilt a strained Smart Waste account into a reference client (~28% performance improvement).',
    ],
  },
  {
    slug: 'oil-condition-monitoring',
    title: 'Serverless oil-condition monitoring for mining',
    org: 'Remote Sense',
    period: '2020',
    tagline: 'Real-time, serverless oil-condition monitoring for a multinational miner across African sites.',
    tags: ['Serverless', 'Industrial IoT', 'Real-time'],
    role: 'Solutions Architect — partnered with a global systems integrator to architect and deliver.',
    summary:
      'Partnered with a global systems integrator to deliver a real-time, serverless oil-condition monitoring platform for a multinational mining enterprise operating across multiple sites in Africa.',
    problem:
      'Heavy equipment downtime is enormously expensive. Oil condition is a leading indicator of failure, but legacy telemetry was batch, site-local and operationally invisible.',
    approach: [
      'Designed a serverless cloud architecture that ingested sensor telemetry in real time.',
      'Multi-site topology that tolerated intermittent connectivity.',
    ],
    stack: ['Serverless (AWS)', 'IoT telemetry', 'Real-time pipelines'],
    outcome: [
      'Real-time visibility of oil condition across sites, enabling earlier intervention on equipment at risk.',
    ],
  },
];
