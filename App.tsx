
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Simulator from './components/Simulator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trusted By / Institutional Section */}
        <section id="norma" className="py-12 bg-white/5 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-500 uppercase tracking-widest text-xs font-semibold mb-6">Alineados con la institucionalidad ambiental</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               <div className="text-xl font-bold text-white">MINAM</div>
               <div className="text-xl font-bold text-white">SENACE</div>
               <div className="text-xl font-bold text-white">OEFA</div>
               <div className="text-xl font-bold text-white">FONAM</div>
            </div>
          </div>
        </section>

        <Services />
        
        {/* Special Value Prop Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">No gestionamos basura,<br/><span className="text-emerald-500">gestionamos activos financieros.</span></h2>
            <p className="text-lg text-slate-400 mb-10">
              La Resolución Directoral N° D000001-2026-MINAM marca un antes y un después. Aquellas empresas que logren digitalizar su trazabilidad no solo cumplirán la ley, sino que desbloquearán una nueva fuente de ingresos mediante los créditos de carbono.
            </p>
            <div className="inline-block bg-slate-800/80 p-8 rounded-2xl border border-white/10 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-white font-bold">¿Sabías que?</h4>
              </div>
              <p className="text-slate-300">Un flujo de 100 toneladas de residuos orgánicos trazables puede equivaler hasta a 150 créditos de carbono certificados anualmente bajo el nuevo marco normativo.</p>
            </div>
          </div>
        </section>

        <Simulator />
      </main>
      <Footer />
    </div>
  );
};

export default App;
