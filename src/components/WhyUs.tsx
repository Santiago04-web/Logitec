import type { FC } from 'react';
import { Briefcase, Eye, UserCheck, Award } from 'lucide-react';
import { WHY_US_DATA } from '../constants/company';

export const WhyUs: FC = () => {
  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case '02':
        return <Eye className="w-5 h-5 text-blue-600" />;
      case '03':
        return <UserCheck className="w-5 h-5 text-blue-600" />;
      case '04':
        return <Award className="w-5 h-5 text-blue-600" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Diferenciales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            ¿Por qué elegir a Logitec?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Una propuesta basada en la solidez corporativa, el conocimiento técnico y el acompañamiento genuino a cada cliente.
          </p>
        </div>

        {/* 4 Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_DATA.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold text-slate-200 group-hover:text-blue-500/30 transition-colors font-mono">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-blue-600 transition-colors flex items-center justify-center">
                    <span className="group-hover:text-white transition-colors">
                      {getIcon(item.number)}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400">
                <span>Criterio institucional</span>
                <span className="w-2 h-2 rounded-full bg-blue-600/40 group-hover:bg-blue-600 transition-colors"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
