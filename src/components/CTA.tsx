import type { FC } from 'react';
import { Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants/company';

export const CTA: FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-md shadow-2xl text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-cyan-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
            Atención Inmediata
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {COMPANY_INFO.ctaTitle}
          </h2>

          <p className="text-lg sm:text-xl text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto">
            {COMPANY_INFO.ctaDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Primary mailto button */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-blue-900 bg-white hover:bg-slate-100 active:bg-slate-200 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-hidden focus:ring-2 focus:ring-white"
            >
              <Mail className="w-5 h-5 text-blue-600" />
              <span>Contactar a Logitec</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </a>

            {/* Direct phone action */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-blue-700/60 hover:bg-blue-600/70 border border-blue-400/40 transition-all focus:outline-hidden focus:ring-2 focus:ring-blue-400"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              <span>Llamar: {COMPANY_INFO.phone}</span>
            </a>

            {/* WhatsApp option */}
            <a
              href={`https://wa.me/57${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                'Hola LOGITEC, me comunico a través de su página web corporativa para solicitar información.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-emerald-600/80 hover:bg-emerald-600 border border-emerald-400/30 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-blue-200/80 font-medium">
            Canales oficiales de <span className="font-bold text-white">{COMPANY_INFO.legalName}</span> • Domicilio principal en {COMPANY_INFO.city}
          </div>
        </div>
      </div>
    </section>
  );
};
