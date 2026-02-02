
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 text-sm font-medium">Nueva RD N° D000001-2026-MINAM</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Tu activo no es la basura,<br />
          <span className="gradient-text">es la información.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          Transformamos la trazabilidad de tus residuos en créditos de carbono auditables. Convertimos el cumplimiento legal en rentabilidad corporativa.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#simulator" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-emerald-900/40">
            Simular Créditos de Carbono
          </a>
          <button className="w-full sm:w-auto border border-white/20 hover:border-white/40 bg-white/5 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
            Consultoría Especializada
          </button>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          <div>
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest">Trazabilidad Digital</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">2026</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest">Compliance MINAM</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">+500k</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest">Ton CO2e Auditadas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">FIN-TECH</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest">Modelo de Negocio</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
