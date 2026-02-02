
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center font-bold text-white">E</div>
            <span className="text-xl font-bold text-white">EcoTrace</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-emerald-500 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Base Legal MINAM</a>
          </div>
          <div className="text-slate-600 text-sm">
            © 2026 EcoTrace Consulting Group. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
