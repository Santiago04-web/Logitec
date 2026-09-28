import type { FC } from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, MapPin, Sparkles, Activity, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../constants/company';

export const Hero: FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 tech-grid-pattern"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[600px] h-72 sm:h-[350px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-4 sm:right-10 w-64 sm:w-[450px] h-64 sm:h-[450px] bg-cyan-400/10 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Corporate Location & Verification Tag (wrapped for mobile) */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/60 shadow-xs text-xs font-semibold text-blue-800 transition-all hover:bg-blue-100/70 max-w-full">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="flex items-center gap-1 shrink-0">
                <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
                <span>{COMPANY_INFO.municipality}, Valle del Cauca</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-mono shrink-0">NIT {COMPANY_INFO.nit}</span>
            </div>

            {/* Main Brand Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                <span className="block text-slate-950 font-sans tracking-wide">
                  {COMPANY_INFO.brandName}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 mt-1">
                  {COMPANY_INFO.slogan}
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-1 sm:pt-2">
                {COMPANY_INFO.heroDescription}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-blue-600/25 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <span>Contáctanos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#nosotros"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow-sm transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-slate-300"
              >
                <span>Conoce más</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </a>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  Razón Social
                </div>
                <div className="text-sm font-semibold text-slate-700 truncate">{COMPANY_INFO.legalName}</div>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  Identificación
                </div>
                <div className="text-sm font-semibold text-slate-700 font-mono">{COMPANY_INFO.nit}</div>
              </div>

              <div className="space-y-0.5 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  Atención
                </div>
                <div className="text-sm font-semibold text-slate-700">Canal Corporativo</div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Tech Composition */}
          <div className="lg:col-span-6 xl:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur-xl"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/70 bg-white group">
                <img
                  src="/portada.png"
                  alt="Composición corporativa tecnológica LOGITEC"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Ambient dark bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-slate-950/75 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 shrink-0" />
                      Entorno Digital
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {COMPANY_INFO.legalName} • Presencia Corporativa
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-semibold bg-blue-600/80 text-white border border-blue-400/30">
                      Cali, Colombia
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Pill Card: Conectividad y Soluciones */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-white/95 backdrop-blur-md border border-slate-100 p-3.5 rounded-xl shadow-xl items-center gap-3 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Innovación Tecnológica</div>
                  <div className="text-[11px] text-slate-500 font-medium">Soluciones para organizaciones</div>
                </div>
              </div>

              {/* Floating Pill Card: Verificación Legal */}
              <div className="hidden sm:flex absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-md border border-slate-100 p-3.5 rounded-xl shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Entidad Verificada</div>
                  <div className="text-[11px] text-slate-500 font-medium">NIT {COMPANY_INFO.nit}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
