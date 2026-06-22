export interface StartupCaseStudy {
  id: string;
  name: string;
  industry: string;
  productService: string;
  targetCustomer: string;
  region: string;
  marketSize: string; // e.g., "$12.5 Billion"
  strength: string;
  weakness: string;
  opportunity: string;
  threat: string;
  politicalScore: number; // 1-10
  economicScore: number; // 1-10
  socialScore: number; // 1-10
  technologicalScore: number; // 1-10
  legalScore: number; // 1-10
  environmentalScore: number; // 1-10
  competitiveIntensity: number; // 1-10
  riskLevel: 'Low' | 'Medium' | 'High';
  growthPotential: number; // 1-10
  
  // Custom generated metrics from page 4 (can be computed or stored)
  marketOpportunityScore?: number; // 1-10
  swotEffectivenessScore?: number; // 1-10
  pestleImpactScore?: number; // 1-10
  startupViabilityScore?: number; // 1-10
  marketReadinessScore?: number; // 1-10
  innovationScore?: number; // 1-10
  investmentAttractiveness?: number; // 1-10
  
  // Detailed bullet points for SWOT & PESTLE Matrix
  swotDetail?: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  pestleDetail?: {
    political: string[];
    economic: string[];
    social: string[];
    technological: string[];
    legal: string[];
    environmental: string[];
  };
  
  // Competitor benchmarking (2-3 competitors)
  competitors?: Array<{
    name: string;
    marketShare: string; // e.g., "15%"
    pricing: 'Budget' | 'Moderate' | 'Premium';
    reach: 'Local' | 'Regional' | 'Global';
    strengths: string;
    weaknesses: string;
    featureRating: number; // 1-5 scale
  }>;
  
  // Strategic Recommendations
  recommendations?: string[];
}
