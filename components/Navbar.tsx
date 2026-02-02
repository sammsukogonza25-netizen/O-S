
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ET</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Eco<span className="text-emerald-500">Trace</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Servicios</a>
            <a href="#norma" className="text-slate-400 hover:text-emerald-400 transition-colors">Normativa 2026</a>
            <a href="#simulator" className="text-slate-400 hover:text-emerald-400 transition-colors">Simulador</a>
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg shadow-emerald-600/20">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
