
export interface AnalysisResult {
  estimatedCarbonCredits: string;
  complianceStrategy: string;
  recommendations: string[];
  normContext: string;
}

export interface WasteInput {
  type: string;
  monthlyTonnage: number;
  industry: string;
}
