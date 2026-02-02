
import React, { useState } from 'react';
import { getCarbonCreditAnalysis } from '../services/geminiService';
import { WasteInput, AnalysisResult } from '../types';

const Simulator: React.FC = () => {
  const [formData, setFormData] = useState<WasteInput>({
    type: 'Plástico PET',
    monthlyTonnage: 10,
    industry: 'Consumo Masivo'
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleSimulate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await getCarbonCreditAnalysis(formData);
      setResult(data);
    } catch (error) {
      console.error("Error simulation:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="simulator" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simulador Inteligente</h2>
          <p className="text-slate-400">Descubre el valor oculto en tu flujo de residuos bajo la normativa 2026.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="glass-effect p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleSimulate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de Residuo Predominante</label>
                <select 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option>Plástico PET / PEAD</option>
                  <option>Orgánicos (Compostables)</option>
                  <option>Papel y Cartón</option>
                  <option>Residuos Electrónicos (RAEE)</option>
                  <option>Aceites Usados</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tonelaje Mensual Generado</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  placeholder="Ej: 25"
                  value={formData.monthlyTonnage}
                  onChange={(e) => setFormData({...formData, monthlyTonnage: Number(e.target.value)})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Sector Industrial</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  placeholder="Ej: Minería, Retail, Agro"
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${loading ? 'bg-slate-600 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20'}`}
              >
                {loading ? 'Analizando con IA...' : 'Calcular Potencial de Carbono'}
              </button>
            </form>
          </div>

          <div className="min-h-[400px]">
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/10 rounded-2xl">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Resultados en Tiempo Real</h3>
                <p className="text-slate-500">Completa el formulario para obtener una estimación basada en la Resolución Directoral N° D000001-2026-MINAM.</p>
              </div>
            )}

            {loading && (
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-emerald-400 font-medium animate-pulse">Consultando base normativa de MINAM 2026...</p>
              </div>
            )}

            {result && (
              <div className="glass-effect p-8 rounded-2xl animate-fadeIn space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-emerald-400 uppercase tracking-widest mb-1">Potencial Estimado</h3>
                    <p className="text-3xl font-bold text-white">{result.estimatedCarbonCredits}</p>
                  </div>
                  <div className="bg-emerald-500/20 px-3 py-1 rounded text-emerald-400 text-xs font-bold uppercase">Grado Auditoría</div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Impacto Normativo
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{result.normContext}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Recomendaciones Estratégicas</h4>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] shrink-0 mt-0.5">{i+1}</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                  Descargar Informe Técnico PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
