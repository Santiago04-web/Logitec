import type { FC } from 'react';
import { Sparkles, Cpu, ShieldCheck, Target, HeartHandshake } from 'lucide-react';
import { VALUES_DATA } from '../constants/company';

export const Values: FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-blue-600" />;
      default:
        return <HeartHandshake className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Nuestros Pilares
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Valores Corporativos
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Principios que orientan nuestro trabajo diario, la toma de decisiones y la relación con nuestros clientes y aliados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VALUES_DATA.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/70 hover:border-blue-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-13 h-13 rounded-xl bg-blue-50/80 group-hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center group-hover:text-white p-3">
                  <span className="group-hover:text-white transition-colors duration-300">
                    {getIcon(val.iconName)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {val.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                <span>Fundamento empresarial</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
