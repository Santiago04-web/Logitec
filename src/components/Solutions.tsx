import type { FC } from 'react';
import { Layers, ArrowRight, Cog, Globe, Headphones } from 'lucide-react';
import { SOLUTIONS_DATA } from '../constants/company';
import type { SolutionDetail } from '../types';

interface SolutionsProps {
  onSelectSolution: (sol: SolutionDetail) => void;
}

export const Solutions: FC<SolutionsProps> = ({ onSelectSolution }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'soluciones-tecnologicas':
        return <Layers className="w-6 h-6 text-blue-600" />;
      case 'optimizacion':
        return <Cog className="w-6 h-6 text-blue-600" />;
      case 'innovacion-digital':
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 'soporte-acompanamiento':
        return <Headphones className="w-6 h-6 text-blue-600" />;
      default:
        return <Layers className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="soluciones" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Líneas Conceptuales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Soluciones para tu empresa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Planteamos áreas conceptuales flexibles y adaptables orientadas a responder a las necesidades particulares y dinámicas de cada organización.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-blue-400/80 transition-all duration-300 shadow-xs hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Subtle top gradient bar */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-400 rounded-b-md transition-all duration-300" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 border border-blue-200/50">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {item.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectSolution(item)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-600 rounded-md p-1"
                >
                  <span>Conocer más de este enfoque</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#contacto"
                  className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors"
                >
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-14 max-w-2xl mx-auto p-4.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-xs text-slate-500 leading-relaxed">
            Cada organización cuenta con requerimientos propios. En <strong className="text-slate-800 font-semibold">LOGITEC</strong> dialogamos de manera directa para comprender tus prioridades y explorar alternativas orientadas a tu entorno.
          </p>
        </div>
      </div>
    </section>
  );
};
