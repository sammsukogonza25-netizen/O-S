
import { GoogleGenAI, Type } from "@google/genai";
import { WasteInput, AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCarbonCreditAnalysis = async (input: WasteInput): Promise<AnalysisResult> => {
  const prompt = `Actúa como un consultor experto en gestión de residuos y mercados de carbono en Perú. 
  Analiza la siguiente información para una empresa de la industria ${input.industry}:
  - Tipo de residuo: ${input.type}
  - Tonelaje mensual: ${input.monthlyTonnage} toneladas.
  
  Basado en la nueva norma "Resolución Directoral N° D000001-2026-MINAM", proporciona una estimación de créditos de carbono potenciales, 
  una estrategia de cumplimiento y 3 recomendaciones clave. 
  
  Enfócate en el concepto: "El activo no es la basura, es la información de trazabilidad".`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          estimatedCarbonCredits: { type: Type.STRING, description: "Rango estimado de CO2e evitado o capturado." },
          complianceStrategy: { type: Type.STRING, description: "Resumen de cómo alinearse a la RD N° D000001-2026-MINAM." },
          recommendations: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Tres recomendaciones clave."
          },
          normContext: { type: Type.STRING, description: "Breve explicación técnica del impacto de la norma." }
        },
        required: ["estimatedCarbonCredits", "complianceStrategy", "recommendations", "normContext"]
      }
    }
  });

  return JSON.parse(response.text.trim());
};
