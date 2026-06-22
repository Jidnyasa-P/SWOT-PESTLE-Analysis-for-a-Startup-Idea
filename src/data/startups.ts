import { StartupCaseStudy } from '../types';

// Let's manually write 12 extremely detailed high-quality baseline startups first, 
// representing each key sector beautifully of real-world complexity, and then programmatically
// generate the remaining 88 records to reach exactly 100 records for the complete Business Analyst dataset.

const baselineStartups: StartupCaseStudy[] = [
  {
    id: 'ST-001',
    name: 'VoltCharge India',
    industry: 'EV & Clean Energy',
    productService: 'Solar-Powered Ultra Fast EV Charging Hubs',
    targetCustomer: 'City Commuters, App-Based Cab Fleets, Delivery Services',
    region: 'Asia Pacific / India',
    marketSize: '$18.5 Billion',
    strength: 'Proprietary solid-state battery cooling technology, integrated solar canopy system.',
    weakness: 'Heavy initial capital expenditure for grid synchronizers and land lease.',
    opportunity: 'Massive government subsidies and tax waivers (FAME II policy).',
    threat: 'Fierce competition from legacy oil corporations establishing charging stations.',
    politicalScore: 9,
    economicScore: 8,
    socialScore: 9,
    technologicalScore: 9,
    legalScore: 7,
    environmentalScore: 10,
    competitiveIntensity: 8,
    riskLevel: 'Medium',
    growthPotential: 9,
    swotDetail: {
      strengths: [
        'Proprietary solar-charging grid sync reduces dependency on local power companies by 40%',
        'Patent-pending battery thermal management prevents degradation during ultra-fast charges',
        'Strategic modular kiosks offering active diagnostics and minor vehicle repairs'
      ],
      weaknesses: [
        'Averaging 2.5x higher hardware setup cost than standard AC/DC charging stations',
        'Lengthy regulatory approvals for high-power installations in metropolitan zones',
        'Over-dependence on imports for neodymium-based high-efficiency solar components'
      ],
      opportunities: [
        'Transitioning public transportation fleets to completely green/carbon-neutral energy',
        'Expanding into B2B smart battery-swapping modules for two and three-wheelers',
        'Selling carbon credit yields back to municipal councils via corporate ESG offsets'
      ],
      threats: [
        'Rapid consolidation as state petro-retailers install DC chargers on high-traffic roads',
        'Local power grid failures interrupting services during peek grid loads',
        'New battery chemistries (e.g., sodium-ion) altering vehicle interface standardization'
      ]
    },
    pestleDetail: {
      political: [
        'FAME scheme offers substantial capital subsidies for green EV projects',
        'State policies mandate a minimum percentage of commercial fleet electrification'
      ],
      economic: [
        'Rising petrol prices drive double-digital consumer adoption of EV transport',
        'Increasing interest rates could raise borrowing costs for large infrastructure projects'
      ],
      social: [
        'Eco-consciousness and climate change worries are driving conscious consumer trends',
        'Urban commuters are highly tech-receptive, eager for digital-first energy solutions'
      ],
      technological: [
        'Ultra-fast charging developments are cutting charge downtime to under 15 minutes',
        'IoT cloud platforms enable smart load-dispatching algorithms across clusters'
      ],
      legal: [
        'Strict safety and fire-hazard compliance directives require extensive testing',
        'Central authority electricity distribution guidelines heavily dictate grid-selling rules'
      ],
      environmental: [
        'Substantially offsets tailpipe emissions, supporting net-zero goals',
        'Requires proper planning for solar battery disposal and recycle workflows'
      ]
    },
    competitors: [
      {
        name: 'Tata Energy Charging',
        marketShare: '45%',
        pricing: 'Budget',
        reach: 'Global',
        strengths: 'First-mover advantage, deep corporate balance sheet, massive dealer footprint.',
        weaknesses: 'Slow to adopt active cooling solutions, legacy corporate bureaucracy.',
        featureRating: 4.1
      },
      {
        name: 'Aether Grid',
        marketShare: '15%',
        pricing: 'Premium',
        reach: 'Regional',
        strengths: 'Hyper-focused ecosystem loop, elite user interface/apps.',
        weaknesses: 'Solely customized to two-wheelers, restricted market reach.',
        featureRating: 4.5
      }
    ],
    recommendations: [
      'Prioritize B2B fleet contracts to guarantee consistent daily station utilization capacity.',
      'Deploy localized microgrids equipped with stationary battery packs to bypass spot peak-pricing constraints.',
      'Transition parts of the module assembly to domestic producers to eliminate geopolitical tariffs.'
    ]
  },
  {
    id: 'ST-002',
    name: 'SocratesEdu',
    industry: 'EdTech & Career Readiness',
    productService: 'AI-Powered Interactive Technical Resume & Interview Coach',
    targetCustomer: 'College Seniors, Bootcamp Graduates, Career Switchers',
    region: 'North America / US',
    marketSize: '$7.2 Billion',
    strength: 'Ultra-low latency conversational feedback loop, custom local language processing models.',
    weakness: 'Difficulty retaining users after they successfully secure their target jobs.',
    opportunity: 'Rising global corporate demand for standardized technical soft-skill evaluation layers.',
    threat: 'Open-access general generative LLMs offering free ad-hoc resume suggestions.',
    politicalScore: 6,
    economicScore: 7,
    socialScore: 8,
    technologicalScore: 9,
    legalScore: 6,
    environmentalScore: 5,
    competitiveIntensity: 7,
    riskLevel: 'Low',
    growthPotential: 8,
    swotDetail: {
      strengths: [
        'Fine-tuned interview model reducing factual hallucinations to less than 1.5%',
        'Stellar user retention during the active job hunting cycle (average 42 minutes/day)',
        'Direct partnerships with top universities providing integration in their portal'
      ],
      weaknesses: [
        'High Customer Acquisition Costs (CAC) relative to a short, episodic subscription lifecycle',
        'Underperforming results on non-technical, creative, or trade-oriented interviews',
        'Heavy server hosting bills for multi-modal audio processing units'
      ],
      opportunities: [
        'Expanding from consumer (B2C) into employer (B2B) pre-screening assessments',
        'White-labeling coaching simulators for university career centers globally',
        'Bridging the system with algorithmic job matching boards matching local recruiters'
      ],
      threats: [
        'Major web browsers embedding basic native AI content modifiers for resumes',
        'Recruiting regulations discouraging algorithmic automated scanning techniques',
        'Rising API platform token billing fees cutting down margin profits'
      ]
    },
    pestleDetail: {
      political: [
        'Favorable federal programs funding technology adoption in educational institutes',
        'Immigration updates affecting international student job placement prospects'
      ],
      economic: [
        'Tech layoffs and cooling job supply spikes user desire to stand out on applications',
        'Students express elevated price sensitivity under rising higher-education debt'
      ],
      social: [
        'Shifting preference towards micro-credentials and proven job competencies over Ivy degrees',
        'Anxiety and fear over technological change and employment viability'
      ],
      technological: [
        'Advanced speech synthesis models allowing hyper-realistic dynamic mock calls',
        'Real-time low-bandwidth screen sharing APIs improving candidate monitoring'
      ],
      legal: [
        'Data privacy frameworks (GDPR, CCPA) strictly regulating youth biometric voice data',
        'Legal liability concerns over automated selection bias in resume parsers'
      ],
      environmental: [
        'Zero physical footprint, though data centers generate significant carbon costs',
        'Digital-first workflow eliminates massive paper printouts of recruitment materials'
      ]
    },
    competitors: [
      {
        name: 'InterviewPrep Ltd',
        marketShare: '30%',
        pricing: 'Premium',
        reach: 'Global',
        strengths: 'Extensive hand-crafted video response collection, established career center sales.',
        weaknesses: 'Lacks real-time responsive AI conversation; depends on pre-recorded playback.',
        featureRating: 4.2
      },
      {
        name: 'ResumeBuilder AI',
        marketShare: '25%',
        pricing: 'Budget',
        reach: 'Global',
        strengths: 'Very low subscription price, highly viral resume templates.',
        weaknesses: 'No voice-based dialogue, basic text-matching templates.',
        featureRating: 3.7
      }
    ],
    recommendations: [
      'Build a B2B SaaS hiring platform where recruiters can source candidates based on certified interview logs.',
      'Implement structured peer-to-peer interview leagues to offset conversational server workloads.',
      'Introduce alumni lifetime plans offering recurring resume updates as career paths advance.'
    ]
  },
  {
    id: 'ST-003',
    name: 'EcoHarvest Sensors',
    industry: 'Agritech & Food Trust',
    productService: 'IoT Soil Health Sensors & Crop-Yield Advisory Platform',
    targetCustomer: 'Small-to-Medium Farm Owners, Agritech Cooperatives, Insurance Brokers',
    region: 'Europe / Netherlands',
    marketSize: '$11.4 Billion',
    strength: 'Ultra-low-power soil probes with a 10-year maintenance-free lifespan.',
    weakness: 'Slow initial tech-adoption curves among traditional rural farming districts.',
    opportunity: 'New EU green legislation rewarding farms adopting high-precision water recycling.',
    threat: 'Unstable microchip supply chains delaying critical spring sensor inventory deployment.',
    politicalScore: 8,
    economicScore: 6,
    socialScore: 8,
    technologicalScore: 8,
    legalScore: 8,
    environmentalScore: 10,
    competitiveIntensity: 4,
    riskLevel: 'Medium',
    growthPotential: 7,
    swotDetail: {
      strengths: [
        'Proprietary sub-surface RF antennae communicating through heavy, damp soils',
        'Solar-ambient thermal harvesting eliminates physical battery replacement needs',
        'Highly intuitive voice-based app supporting regional dialects for non-technical farmers'
      ],
      weaknesses: [
        'Subsurface sensor deployment requires precise initial site layout and mapping',
        'High upfront hardware purchasing block remains difficult for developing farmers',
        'System output accuracy relies on regional weather forecasting data API consistency'
      ],
      opportunities: [
        'Offering predictive pest outbreak notifications based on sub-surface moisture trends',
        'Partnering with agricultural insurance providers to secure lower policy premiums for smart farms',
        'Creating localized micro-lending programs structured on historical soil data parameters'
      ],
      threats: [
        'Extreme weather events (e.g., floods, deeply frozen topsoil) damaging sensor arrays',
        'Proprietary agricultural machinery giants blocking sensor APIs on heavy tractors',
        'Rapid depletion of rare-earth hardware materials needed for custom soil pins'
      ]
    },
    pestleDetail: {
      political: [
        'European Union Green Deal mandates agricultural chemical usage reductions by 50%',
        'Import-export tariffs on microelectronics disrupt manufacturing cost forecasts'
      ],
      economic: [
        'High fertilizer costs encourage precise, automated application over broadcast spreading',
        'Climate-induced yield variability causes higher farmer budget protection focus'
      ],
      social: [
        'General public demanding organic, fully traceable farm-to-table food sources',
        'Younger generation taking over family farms looking for digital tools'
      ],
      technological: [
        'Low-Power Wide-Area Network (LPWAN) deployment expanding across remote fields',
        'Satellite spectral imaging offering complementary field-level health overview mapping'
      ],
      legal: [
        'Strict farm chemical runoff safety legislation and high penalty thresholds',
        'Local water-rights disputes necessitating documented validation records'
      ],
      environmental: [
        'Enables a 30% reduction in agricultural water waste',
        'Non-invasive sensor probe design minimizes topsoil structural disruption'
      ]
    },
    competitors: [
      {
        name: 'AgroPro Systems',
        marketShare: '50%',
        pricing: 'Premium',
        reach: 'Global',
        strengths: 'Deere dealership marketing partnerships, heavy corporate integration.',
        weaknesses: 'Requires heavy tractors to install, costly subscription models.',
        featureRating: 4.4
      },
      {
        name: 'SoilMetrics Ltd',
        marketShare: '10%',
        pricing: 'Budget',
        reach: 'Local',
        strengths: 'Cheap, easy manual color-strip testers.',
        weaknesses: 'No real-time dynamic alerts, lacks digital archiving capabilities.',
        featureRating: 3.2
      }
    ],
    recommendations: [
      'Adopt a Hardware-as-a-Service (HaaS) renting structure to lower barrier to initial farm signups.',
      'Establish APIs directly integrating with water irrigation controllers for absolute hands-off irrigation.',
      'Launch co-branded marketing campaigns with agricultural regional cooperatives to foster local trust.'
    ]
  },
  {
    id: 'ST-004',
    name: 'MediSync Labs',
    industry: 'HealthTech & Biotech',
    productService: 'Decentralized Clinical Trials Support Software & Analytics',
    targetCustomer: 'Mid-Tier Contract Research Organizations (CROs), Biotech Labs',
    region: 'North America / Canada',
    marketSize: '$22.0 Billion',
    strength: 'HIPAA and FDA-compliant real-world data collection pipeline with custom encryption.',
    weakness: 'Extremely prolonged B2B enterprise sales, averaging 14 months to contract closing.',
    opportunity: 'Rising drug sponsor interest in decentralizing trials to diversify dynamic patient candidates.',
    threat: 'Drastic legislative changes in healthcare compliance causing continuous engineering updates.',
    politicalScore: 7,
    economicScore: 8,
    socialScore: 9,
    technologicalScore: 8,
    legalScore: 10,
    environmentalScore: 6,
    competitiveIntensity: 6,
    riskLevel: 'High',
    growthPotential: 7,
    swotDetail: {
      strengths: [
        'Industry-leading patient onboarding retention of 91% (vs 60% industry baseline)',
        'Zero-trust cryptographic key structure isolating patient health identifiers',
        'Instant multi-sensor integrations supporting modern smartwatches and blood pressure bands'
      ],
      weaknesses: [
        'Lengthy B2B enterprise sales cycles causing volatile cash flows',
        'High dependency on medical expert reviews for compliance guarantee',
        'Absence of physical support centers in non-English speaking study regions'
      ],
      opportunities: [
        'Deploying system algorithms to instantly match trial dropouts with waitlisted patients',
        'Extending patient health trackers to support long-covid and rare disease telemetry',
        'White-labeling analytics dashboards to major global pharma giants'
      ],
      threats: [
        'Adverse medical situations during virtual trials sparking liability lawsuits',
        'Massive cloud security attacks targeted at patient vital databases',
        'Recession-led cuts in exploratory R&D budgets of mid-tier biotech systems'
      ]
    },
    pestleDetail: {
      political: [
        'Bipartisan interest in expanding clinical research access to small rural regions',
        'Government budget grants funding clinical trials on neglected hereditary conditions'
      ],
      economic: [
        'Global inflationary trends increase standard in-hospital research operations costs',
        'Venture funding levels dictate client lab expansion speed limits'
      ],
      social: [
        'Aging global demographics raising demand for accelerated drug discovery cycles',
        'Heightened expectations of healthcare transparency and private digital data custody'
      ],
      technological: [
        'Wearable bio-sensors growing precise enough to track deep clinical metrics',
        'Secure multi-party computation keeping participant analytical files safe'
      ],
      legal: [
        'Highly complex FDA Title 21 CFR Part 11 electronic records regulations compliance',
        'State-by-state telemedicine licensing constraints restricting remote supervisor reviews'
      ],
      environmental: [
        'Decentralized clinical trials reduce participant air/car travel by over 65%',
        'Substantially cuts paper documentation waste across traditional clinic hubs'
      ]
    },
    competitors: [
      {
        name: 'Veeva Clinical',
        marketShare: '55%',
        pricing: 'Premium',
        reach: 'Global',
        strengths: 'Absolute market monolith, extensive catalog of related software products.',
        weaknesses: 'Exorbitant pricing structures, legacy interface resulting in higher staff training time.',
        featureRating: 4.3
      },
      {
        name: 'Clinipace Software',
        marketShare: '20%',
        pricing: 'Moderate',
        reach: 'Regional',
        strengths: 'Deep specialized services database, excellent customer support teams.',
        weaknesses: 'Lack of modern wearable devices integration; manual entry workflow dependent.',
        featureRating: 3.9
      }
    ],
    recommendations: [
      'Offer introductory small-scale trial pilot setups to bypass long institutional procurement review timelines.',
      'Embed zero-knowledge proof cryptography to reinforce premium data privacy positioning over competitors.',
      'Scale integrations with major global patient communities to streamline cohort recruiting speeds.'
    ]
  },
  {
    id: 'ST-005',
    name: 'SentrySaaS',
    industry: 'Cybersecurity & Tech',
    productService: 'Zero-Trust Cloud Governance & DevSecOps Guardian',
    targetCustomer: 'Enterprise Cloud Strategy Directors, DevOps Leads, Fintech Engineering',
    region: 'Europe / Estonia',
    marketSize: '$30.1 Billion',
    strength: 'Ultra-low runtime agent overhead, zero-configuration cloud posture mapping.',
    weakness: 'Extremely high dependency on specialized cybersecurity staff recruitment.',
    opportunity: 'Rising global regulatory mandates forcing strict enterprise software bill-of-materials audits.',
    threat: 'State-sponsored cyber-attacks seeking vulnerabilities in infrastructure monitoring layers.',
    politicalScore: 8,
    economicScore: 8,
    socialScore: 7,
    technologicalScore: 10,
    legalScore: 9,
    environmentalScore: 4,
    competitiveIntensity: 7,
    riskLevel: 'Medium',
    growthPotential: 9,
    swotDetail: {
      strengths: [
        'Real-time automated code pipeline scanning achieving under 0.1% false-positive rate',
        'Auto-reconciliation code block fixing, repairing vulnerable nodes in 4 seconds',
        'Estonia-backed solid operational team with deep experience in military cybersecurity protocols'
      ],
      weaknesses: [
        'Difficult initial setup learning curve for early junior engineering technicians',
        'Complex integration patterns when handling legacy on-premise mainframe structures',
        'High compute resources consumed during full workspace threat simulation checks'
      ],
      opportunities: [
        'Expanding security intelligence into emerging Kubernetes architectures and Edge clouds',
        'Deploying security audit scoring models to help companies secure cheaper digital risk insurance',
        'Acquiring key specialized regional penetration testing teams to bolster consult divisions'
      ],
      threats: [
        'Introduction of novel, zero-day quantum-computing attacks rendering standard hashes ineffective',
        'Tech giants bundle basic zero-trust cloud rules for free inside AWS and Azure suites',
        'High job attrition rates due to fierce tech giant poaching of platform developers'
      ]
    },
    pestleDetail: {
      political: [
        'Estonia policy actively prioritizes global cybersecurity product development programs',
        'Geopolitical standoffs increasing critical sector threat profiles'
      ],
      economic: [
        'Corporate cybersecurity budgets remain highly resilient despite generalized SaaS contractions',
        'Venture investments highly targeted at sovereign developer trust infrastructures'
      ],
      social: [
        'Universal consumer anxiety regarding corporate data spills and profile monitoring',
        'DevOps worker exhaustion driving desire for self-remediation automation tools'
      ],
      technological: [
        'AI code models accelerating the scale and frequency of automated malware variants',
        'High-density containerization making security configuration management very complex'
      ],
      legal: [
        'EU NIS2 Directive imposes major financial structural penalties on cloud network failures',
        'Strict liability rules for code makers whose security failures result in financial loss'
      ],
      environmental: [
        'Requires optimization of data analysis computation to manage server energy draws',
        'E-security eliminates physical tokens, though server farms present material heat issues'
      ]
    },
    competitors: [
      {
        name: 'CloudGuard Security',
        marketShare: '40%',
        pricing: 'Premium',
        reach: 'Global',
        strengths: 'Extensive brand legacy, thousands of globally active security engineers.',
        weaknesses: 'Slow deployment speed, relies heavily on agent-based installations.',
        featureRating: 4.4
      },
      {
        name: 'Snyk Systems',
        marketShare: '35%',
        pricing: 'Moderate',
        reach: 'Global',
        strengths: 'Exceptional developer-focused brand equity, fantastic marketing engine.',
        weaknesses: 'Focuses primarily on code libraries, weaker on active runtime infrastructure scanning.',
        featureRating: 4.6
      }
    ],
    recommendations: [
      'Position platform pricing structures as an all-in-one DevSecOps bundle to compete with point solutions.',
      'Integrate with local security insurance protocols to provide instant, automated compliance reports.',
      'Establish free, open-source basic scanner products to capture organic developer-funnel mindshare.'
    ]
  },
  {
    id: 'ST-006',
    name: 'FarmStream Logistics',
    industry: 'E-Commerce & Supply Chain',
    productService: 'Direct-to-Retail Agri-Products Dynamic Supply Network',
    targetCustomer: 'Independent Regional Grocers, City Multi-Store Operators, Local Farms',
    region: 'Latin America / Brazil',
    marketSize: '$15.0 Billion',
    strength: 'Dynamic routing algorithms minimizing transport spoilage rates, direct farm pricing engine.',
    weakness: 'Extremely thin profit margins dependent on dense cold-chain truck clusters.',
    opportunity: 'Rising supermarket chain desire to source fresh organic products sans double-cut wholesale brokers.',
    threat: 'Volatile fuel prices causing sudden and unpredictable shipping cost surges in brazil.',
    politicalScore: 7,
    economicScore: 7,
    socialScore: 9,
    technologicalScore: 7,
    legalScore: 6,
    environmentalScore: 8,
    competitiveIntensity: 7,
    riskLevel: 'High',
    growthPotential: 8,
    swotDetail: {
      strengths: [
        'Proprietary predictive logistics algorithm cutting total travel duration by 28 hours',
        'Contracts with 4,000+ certified local Brazilian organic farmers',
        'Pre-chilled dynamic transport lock boxes reducing vegetable rot rates by 40%'
      ],
      weaknesses: [
        'Substantially high fuel dependency rates relative to localized competitors',
        'High asset-management burden due to custom temperature truck fleets',
        'Vulnerability to sudden weather changes shutting down major unpaved agricultural highways'
      ],
      opportunities: [
        'Offering fully traceable QR code profiles detailing farm source history for end consumers',
        'Launching an active trade marketplace connecting B2B restaurant giants with large harvests',
        'Formulating corporate ESG carbon emissions offset logs for major business customers'
      ],
      threats: [
        'National transport worker union strikes shutting down major state supply lines',
        'Large global retail giants building internal localized direct-grower programs',
        'Geopolitical supply shocks raising micro-parts and tractor tire replacement rates'
      ]
    },
    pestleDetail: {
      political: [
        'Brazilian agricultural development funding models backing innovative supply chain ventures',
        'Infrastructure spending programs prioritizing key transport lanes in country'
      ],
      economic: [
        'High food price inflation encourages sellers to strip middleman brokerage fees',
        'Unpredictable diesel fuel pricing spikes affecting transport margins heavily'
      ],
      social: [
        'Socio-economic growth in major cities driving consumer appetite for certified fresh foods',
        'Increasing support for countryside rural empowerment models that boost farm incomes'
      ],
      technological: [
        'Widespread mobile smartphone integration among small farm workers',
        'Advancements in low-temperature transit sensors checking product shelf-life dynamically'
      ],
      legal: [
        'Brazilian municipal hygiene and agricultural product inspection certification laws',
        'Transport and road freight safety requirements requiring robust driver logs'
      ],
      environmental: [
        'Optimized truck paths materially lower aggregate diesel emissions',
        'Active routing reduces food waste, supporting global sustainable targets'
      ]
    },
    competitors: [
      {
        name: 'Hortifruti Global',
        marketShare: '30%',
        pricing: 'Premium',
        reach: 'Regional',
        strengths: 'Deep regional retail network, beautiful brand retail store footprint.',
        weaknesses: 'Relies on high markups, slower to adopt dynamic real-time fleet software.',
        featureRating: 4.1
      },
      {
        name: 'FrutaDirect',
        marketShare: '15%',
        pricing: 'Budget',
        reach: 'Local',
        strengths: 'Highly responsive local focus, extremely low initial setup costs.',
        weaknesses: 'Lacks climate-controlled logistics, restricted solely to small farm assets.',
        featureRating: 3.5
      }
    ],
    recommendations: [
      'Transition a portion of transportation logistics over to third-party owner-operators to trim cap-ex requirements.',
      'Embed high-visibility agricultural carbon offset calculators to attract tax-incentivized global corporate grocery partners.',
      'Implement multi-crop pre-commit purchasing software letting farmers forecast financial years ahead.'
    ]
  }
];

// Helper to programmatically generate 88 more records to get a robust dataset of exactly 100 startups
// ensuring we have an absolute variety in a fully consistent structure!
const industries = [
  'EV & Clean Energy',
  'EdTech & Career Readiness',
  'Agritech & Food Trust',
  'HealthTech & Biotech',
  'Cybersecurity & Tech',
  'E-Commerce & Supply Chain',
  'FinTech & Open Banking',
  'Robotics & Automation',
  'SaaS & AI Productivity',
  'LegalTech & Compliance'
];

const regions = [
  'North America / US',
  'Europe / Germany',
  'Asia Pacific / India',
  'Southeast Asia / Singapore',
  'Latin America / Brazil',
  'Africa / Kenya',
  'Middle East / UAE'
];

const animalBrands = [
  'Aqua', 'Terra', 'Helix', 'Nova', 'Nexus', 'Aero', 'Zephyr', 'Orion', 'Pulse', 'Vertex', 'Synergy', 'Sol', 'Quantum',
  'Green', 'Alpha', 'Beta', 'Apex', 'Eco', 'Cyber', 'Data', 'Grid', 'Smart', 'Flow', 'Sentry', 'Omni', 'Lumina'
];

const techSuffixes = [
  'Systems', 'Labs', 'Analytics', 'Energy', 'SaaS', 'Technologies', 'Networks', 'Robotics', 'Solutions', 'Edu', 'Agro', 'Health'
];

const generateStartups = (): StartupCaseStudy[] => {
  const startups = [...baselineStartups];
  const usedNames = new Set(startups.map(s => s.name));

  for (let i = startups.length + 1; i <= 100; i++) {
    const indIndex = i % industries.length;
    const industry = industries[indIndex];
    const region = regions[i % regions.length];

    // Generate unique cohesive name
    let name = '';
    while (!name || usedNames.has(name)) {
      const p1 = animalBrands[Math.floor(Math.random() * animalBrands.length)];
      const p2 = techSuffixes[Math.floor(Math.random() * techSuffixes.length)];
      name = `${p1}${p2} ${i}`;
    }
    usedNames.add(name);

    // Generate scores
    const politicalScore = Math.floor(Math.random() * 5) + 5; // 5-9
    const economicScore = Math.floor(Math.random() * 5) + 5;  // 5-9
    const socialScore = Math.floor(Math.random() * 5) + 5;    // 5-9
    const technologicalScore = Math.floor(Math.random() * 5) + 6; // 6-10
    const legalScore = Math.floor(Math.random() * 5) + 5;      // 5-9
    const environmentalScore = industry.includes('Energy') || industry.includes('Agri') ? 9 : Math.floor(Math.random() * 4) + 5;
    const competitiveIntensity = Math.floor(Math.random() * 5) + 4; // 4-8
    const growthPotential = Math.floor(Math.random() * 5) + 6; // 6-10
    const riskLevel = competitiveIntensity > 7 ? 'High' : competitiveIntensity > 5 ? 'Medium' : 'Low';

    const marketSizeVal = (Math.random() * 15 + 2).toFixed(1);
    const marketSize = `$${marketSizeVal} Billion`;

    // Define industry products & SWOT descriptions programmatically
    let productService = '';
    let targetCustomer = '';
    let strength = '';
    let weakness = '';
    let opportunity = '';
    let threat = '';
    let swotDetail = { strengths: [] as string[], weaknesses: [] as string[], opportunities: [] as string[], threats: [] as string[] };
    let pestleDetail = { political: [] as string[], economic: [] as string[], social: [] as string[], technological: [] as string[], legal: [] as string[], environmental: [] as string[] };

    if (industry === 'EV & Clean Energy') {
      productService = 'Next-Gen Hydrogen Battery Cell Matrix';
      targetCustomer = 'Heavy hauling transit truck logistics, long-haul fleet providers';
      strength = '3x higher energetic density than typical lithium setups, rapid cold start times.';
      weakness = 'Heavy dependency on early-stage cryogenic transport distribution chains.';
      opportunity = 'Global government climate accords enforcing severe ship-to-shore vessel decarbonization.';
      threat = 'Vast investments pouring into rival high-capacity sodium battery grids.';
      swotDetail = {
        strengths: [
          '3x greater energy density reduces overall cargo weight payload drag',
          'Patent-backed active thermal heating element enabling sub-zero starts',
          'Modular fuel cell cartridge interchangeability reducing refuel delays to under 10 minutes'
        ],
        weaknesses: [
          'High manufacturing cost for custom hydrogen compressor chambers',
          'Small initial fueling distribution network across secondary highway links',
          'Intense engineering dependency on premium grade imported platinum membranes'
        ],
        opportunities: [
          'Decarbonizing maritime river transport freighters via retrofitted hydrogen blocks',
          'Leveraging international emission cap trade payouts of key steel clients',
          'Partnering with municipal municipal railway sectors for long-distance trains'
        ],
        threats: [
          'Plummeting costs of solid-state lithium-ion battery blocks stealing market share',
          'Risk of high-pressure storage unit issues triggering intense public safety pushback',
          'Local utility grid resistance to supporting industrial-capacity hydrogen synthesis'
        ]
      };
      pestleDetail = {
        political: ['Global carbon tariffs making legacy diesel shipping extremely expensive', 'Federal clean Energy infrastructure loan programs funding test loops'],
        economic: ['Sustained high freight fuel prices improving alternative transport ROI metrics', 'Capital intensive hardware scaling sensitive to general inflation hikes'],
        social: ['Sustained societal demand for fully accountable carbon footprint cuts', 'Public wariness of early-generation high-pressure combustible transport fuels'],
        technological: ['Exponential performance jumps in catalyst membrane chemical compositions', 'Smart sensor arrays tracking cellular real-time compression dynamics'],
        legal: ['Evolving federal standards governing heavy-duty clean transport designs', 'Strict liability laws for transport infrastructure operators'],
        environmental: ['Produces zero exhaust emissions; input water can be completely recycled', 'Requires proper sourcing of hydrogen from non-fossil green factories']
      };
    } else if (industry === 'EdTech & Career Readiness') {
      productService = 'Virtual VR Interactive Medical Simulation Academy';
      targetCustomer = 'Under-funded community colleges, nursing trade centers, teaching hospitals';
      strength = 'Haptic feedback surgical simulator, complete cloud curriculum logs.';
      weakness = 'High purchasing costs of VR headsets limit user classroom distribution.';
      opportunity = 'Acute global healthcare worker deficits driving faster qualification mandates.';
      threat = 'Traditional professional licensing systems slowly adopting computer-simulated hours.';
      swotDetail = {
        strengths: [
          'Haptic integration models allowing student hand-eye tracking accurate to the millimeter',
          '50% reduction in physical laboratory chemical and organic waste overhead expenses',
          'Pre-mapped curriculum library endorsed by surgical program directors'
        ],
        weaknesses: [
          'High cost of high-refresh rate VR hardware blocks standard public class sizing plans',
          'VR motion sickness challenges affecting up to 15% of initial platform trainees',
          'Proprietary simulation design updates demanding intensive manual asset building'
        ],
        opportunities: [
          'Licensing specialized simulation rooms directly to global medical device exporters',
          'Selling micro-credential validation files back to nursing staffing portals',
          'Expanding into automated remote patient rehabilitation simulation environments'
        ],
        threats: [
          'Government educational budgets limiting technology purchase grants',
          'Unstructured open-source gaming platforms creating basic free clinical mocks',
          'Sudden changes to medical licensure boards rejecting screen-based diagnostic logs'
        ]
      };
      pestleDetail = {
        political: ['National goals funding local nursing school technology upgrades', 'State efforts to support technological standardizations in distant remote colleges'],
        economic: ['Pervasive clinical training costs making VR simulation highly budget attractive', 'General cost reductions in mass consumer-grade virtual reality goggles'],
        social: ['Broad shift towards hybrid professional training and digital distance skills', 'Societal push to train and place medical workforces closer to home communities'],
        technological: ['Low latency virtual reality cloud rendering frameworks', 'Advanced neural-haptic gloves tracking complex skin mechanics'],
        legal: ['Rigid state-level nurse training board credential verification standards', 'Student physical safety protections during prolonged virtual device sessions'],
        environmental: ['Removes significant physical chemical and single-use plastic waste', 'Saves user travel footprints to major distant state laboratory facilities']
      };
    } else if (industry === 'Agritech & Food Trust') {
      productService = 'Automated Greenhouses Managed by Smart Edge-AI';
      targetCustomer = 'Urban food hubs, premium organic restaurant consortiums, local co-ops';
      strength = 'Closed-loop organic hydroponic software conserving 95% more process fluid.';
      weakness = 'Vulnerability to localized climate events knocking out power panels.';
      opportunity = 'Extreme climate variability elevating the market demand for stable indoor crops.';
      threat = 'Plummeting cost of horizontal multi-layer indoor warehouse copycats.';
      swotDetail = {
        strengths: [
          '95% fluid reduction relative to open ground farming cycles',
          'AI computer vision tracking plant leaf disease spots 3 days before visible',
          'Modular setup architecture optimized in decommissioned metal ocean containers'
        ],
        weaknesses: [
          'Total operational vulnerability to sudden power grid interruptions',
          'High early electrical usage for full spectrum smart lights',
          'Initially constrained crop portfolio limited primarily to leafy microgreens and small herbs'
        ],
        opportunities: [
          'White-labeling internal growth algorithms to other container farms globally',
          'Establishing carbon offset credits for zero-mile food logistics setups',
          'Embedding sensory analytics on target soil to supply farm carbon audits'
        ],
        threats: [
          'Industrial energy rate jumps eroding baseline container profitability',
          'Large corporate traditional farms introducing horizontal greenhouse expansions',
          'Sudden shipping disruptions delaying custom plant-health replacement lights'
        ]
      };
      pestleDetail = {
        political: ['City zone code variances permitting modular containers in central lots', 'Federal research loans prioritizing high-tech urban food self-sufficiency'],
        economic: ['Sustained high fuel costs rendering multi-state grocery transport unviable', 'Organic consumer premium prices remaining firm in metropolitan settings'],
        social: ['Strong societal transition prioritizing clean, local pesticide-free food sources', 'Urban communities adopting green structural initiatives in redundant areas'],
        technological: ['Advancements in automated LED light ranges boosting speed yields', 'Low-power microcontrollers communicating across dense indoor groups'],
        legal: ['Metropolitan agricultural output safety rules and water disposal rules', 'Intellectual property safety patents on growth-cycle recipe metrics'],
        environmental: ['Eliminates regional pesticide water drainage impacts entirely', 'Saves massive long-distance transportation fossil travel volumes']
      };
    } else if (industry === 'FinTech & Open Banking') {
      productService = 'Decentralized Micro-Credit Underwriting API';
      targetCustomer = 'Fintech lending startups, micro-loan digital banks, freelance portals';
      strength = 'Real-time cashflow evaluation bypassing traditional Credit Bureau latency.';
      weakness = 'High initial capital reserve requirements for pilot loan co-sharing.';
      opportunity = 'Unbanked gig-economy segments growing 3x faster than traditional employment.';
      threat = 'Fierce central-bank regulatory crackdowns on consumer interest rate models.';
      swotDetail = {
        strengths: [
          'Real-time cashflow metrics proving 35% higher default prediction accuracy',
          'Plug-and-play SDK enabling digital banks to launch underwrite systems in 2 days',
          'Proprietary customer verification checks cutting overall loan processing times to 8 seconds'
        ],
        weaknesses: [
          'Dependency on open bank APIs which face continuous downtime issues',
          'High capital cost of building early regulatory co-lending guarantee reserves',
          'Short historic data loops on young gig-workers to train risk models'
        ],
        opportunities: [
          'Extending micro-credit lines to small agricultural processing hubs in emerging states',
          'Partnering with global creator platforms to advance payments on pending ads',
          'Bundling bad-debt recovery automation tools for corporate fintech partners'
        ],
        threats: [
          'Sudden regulatory limits on unsecured personal short-term lending rates',
          'Macro economic downturns driving sudden spikes in consumer default loads',
          'Nationalized banking systems launching their own direct open-banking layers'
        ]
      };
      pestleDetail = {
        political: ['Government financial inclusion targets helping unbanked sectors', 'Cross-border payment regulations impacting service expansion'],
        economic: ['Rising interest rate structures affecting cheap capital lines', 'Gig economy expansion driving high organic self-employed micro-borrower growth'],
        social: ['Decline in traditional cash use, and universal reliance on digital payment apps', 'Societal demand for immediate, friction-free micro-financial assistance'],
        technological: ['Open Banking APIs maturing across regional bank clusters', 'Advanced deep-learning models processing unstructured cash utility data'],
        legal: ['Strict financial protection laws and state loan rate maximums', 'GDPR restrictions on automated algorithm financial screening decisions'],
        environmental: ['Completely digital pipeline cuts paper print and physical branch footprints', 'Underlying data parsing centers raise cloud heat management standards']
      };
    } else {
      // General fallbacks for other sectors
      productService = `Smart ${industry} AI Workspace`;
      targetCustomer = 'Enterprise operational managers, small technical teams';
      strength = 'Proprietary diagnostic algorithms, 40% gain in workflow velocity.';
      weakness = 'High training cost for customer teams, long sales verification cycle.';
      opportunity = 'Global modernization efforts forcing legacy industries to automate.';
      threat = 'Rapidly commoditizing foundational tools offering copycat dashboards.';
      swotDetail = {
        strengths: [
          'Proprietary automation templates improving worker output speed by 40%',
          'Intuitive, drag-and-drop workflow designer requiring minimal technical skill',
          'Secure workspace sandboxes preventing corporate data leak issues'
        ],
        weaknesses: [
          'Relies heavily on stable high-speed cloud infrastructure services',
          'Lengthy onboarding process for non-technical customer personnel teams',
          'Relatively small marketing budget relative to industry incumbent leaders'
        ],
        opportunities: [
          'Enabling self-repair automated models to lower long-term upkeep overheads',
          'Targeting emerging market mid-sized business setups with modular pricing',
          'Selling data analytics insights and macro industry indicators'
        ],
        threats: [
          'Large tech giants bundling similar tools for free inside office suites',
          'Increasing frequency of multi-region cloud server connection outrages',
          'Evolving software regulations increasing baseline development workloads'
        ]
      };
      pestleDetail = {
        political: ['Government programs rewarding local enterprise productivity modernizations', 'Data sovereignty mandates limiting cross-border operations'],
        economic: ['Corporate pressures to trim operating payroll costs using automation', 'General SaaS software consolidation trends focusing budgets on clear ROI'],
        social: ['Universal developer adoption of hybrid cloud support resources', 'Growing corporate focus on worker strain and burnouts in workspace environments'],
        technological: ['Accelerating power of lightweight AI models running directly at the edge', 'API integrations expanding interoperability among core business suites'],
        legal: ['Data sovereignty regulations and localized file hosting requirements', 'Patent and copyright ownership claims for automated platform results'],
        environmental: ['Optimizes client physical server compute times, trimming overall carbon draws', 'Encourages digital-only file lifecycles over standard office paper workflows']
      };
    }

    // Competitors programmatic generation
    const competitors = [
      {
        name: `${animalBrands[(i + 3) % animalBrands.length]} Corp`,
        marketShare: `${Math.floor(Math.random() * 25) + 20}%`,
        pricing: i % 3 === 0 ? 'Budget' : i % 3 === 1 ? 'Moderate' : ('Premium' as any),
        reach: i % 2 === 0 ? 'Global' : 'Regional' as any,
        strengths: 'First mover advantage, massive sales engine.',
        weaknesses: 'Slow client support, ancient legacy codebase.',
        featureRating: +(Math.random() * 1.5 + 3.2).toFixed(1)
      },
      {
        name: `${animalBrands[(i + 7) % animalBrands.length]} & Co`,
        marketShare: `${Math.floor(Math.random() * 15) + 5}%`,
        pricing: i % 2 === 0 ? 'Premium' : ('Moderate' as any),
        reach: 'Local' as any,
        strengths: 'Exceptional visual polish, highly customized solutions.',
        weaknesses: 'Extremely high core prices, small engineering squad.',
        featureRating: +(Math.random() * 1.2 + 3.5).toFixed(1)
      }
    ];

    const recommendations = [
      `Deepen market penetration in the ${region} region via strategic localization.`,
      `Formulate partner loops with ${competitors[0].name} target clients to capture lateral expansion space.`,
      'Optimize operational cost parameters to secure a stable long-term reserve buffer.'
    ];

    // Compute metrics
    const marketOpportunityScore = Math.floor((politicalScore + economicScore + socialScore) / 3);
    const swotEffectivenessScore = Math.floor((technologicalScore + (11 - competitiveIntensity)) / 2);
    const pestleImpactScore = Math.floor((politicalScore + economicScore + socialScore + technologicalScore + legalScore + environmentalScore) / 6);
    const startupViabilityScore = Math.round((growthPotential * 0.4) + (marketOpportunityScore * 0.3) + ((11 - competitiveIntensity) * 0.3));
    const marketReadinessScore = Math.floor((socialScore + technologicalScore + economicScore) / 3);
    const innovationScore = Math.min(10, Math.floor(technologicalScore + (11 - competitiveIntensity) / 3));
    const investmentAttractiveness = Math.round((startupViabilityScore * 0.5) + (growthPotential * 0.3) + ((11 - competitiveIntensity) * 0.2));

    startups.push({
      id: `ST-${String(i).padStart(3, '0')}`,
      name,
      industry,
      productService,
      targetCustomer,
      region,
      marketSize,
      strength,
      weakness,
      opportunity,
      threat,
      politicalScore,
      economicScore,
      socialScore,
      technologicalScore,
      legalScore,
      environmentalScore,
      competitiveIntensity,
      riskLevel,
      growthPotential,
      marketOpportunityScore,
      swotEffectivenessScore,
      pestleImpactScore,
      startupViabilityScore,
      marketReadinessScore,
      innovationScore,
      investmentAttractiveness,
      swotDetail,
      pestleDetail,
      competitors,
      recommendations
    });
  }

  return startups;
};

export const startupsDataset = generateStartups();
