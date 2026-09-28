import type { FC } from 'react';
import { Building2, MapPin, Mail, Phone, Globe, CheckCircle2, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../constants/company';

export const About: FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Institutional Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              Institucional
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Sobre Logitec
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              {COMPANY_INFO.aboutDescription}
            </p>

            <div className="pt-2 space-y-4 text-slate-600">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-base leading-relaxed">
                  Compromiso con la excelencia, la rigurosidad técnica y la transparencia en cada interacción empresarial.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-base leading-relaxed">
                  Enfoque orientado a comprender los retos específicos de las organizaciones para ofrecer alternativas pertinentes y sostenibles.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-base leading-relaxed">
                  Identidad corporativa debidamente registrada con domicilio principal en el Valle del Cauca.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <span>Conoce nuestros canales de atención</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Technological Composition & Verified Data Card */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Card Container */}
              <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-slate-800">
                {/* Tech background circuits */}
                <div className="absolute inset-0 tech-grid-dark opacity-30" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />

                {/* Content inside dark card */}
                <div className="relative z-10 space-y-8">
                  {/* Top: Brand Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-md flex items-center justify-center shrink-0">
                        <img
                          src="/perfil.png"
                          alt="Insignia corporativa LOGITEC"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div>
                        <div className="text-xl font-extrabold tracking-wide text-white">
                          {COMPANY_INFO.legalName}
                        </div>
                        <div className="text-xs text-blue-400 font-medium">
                          Identidad Empresarial Verificada
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-cyan-300">
                      <Shield className="w-3.5 h-3.5" />
                      Colombia
                    </div>
                  </div>

                  {/* Legal Profile Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                    <div className="space-y-1 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        Razón Social
                      </div>
                      <div className="font-bold text-white tracking-wide">
                        {COMPANY_INFO.legalName}
                      </div>
                    </div>

                    <div className="space-y-1 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        NIT Registrado
                      </div>
                      <div className="font-bold text-cyan-400 font-mono tracking-wider">
                        {COMPANY_INFO.nit}
                      </div>
                    </div>

                    <div className="space-y-1 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 sm:col-span-2">
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" />
                        Ubicación y Sede Principal
                      </div>
                      <div className="font-semibold text-white">
                        {COMPANY_INFO.address}
                      </div>
                      <div className="text-xs text-slate-300">
                        {COMPANY_INFO.city}
                      </div>
                    </div>

                    <div className="space-y-1 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-blue-400" />
                        Teléfono Oficial
                      </div>
                      <div className="font-semibold text-white">
                        {COMPANY_INFO.phone}
                      </div>
                    </div>

                    <div className="space-y-1 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-blue-400" />
                        Correo Corporativo
                      </div>
                      <div className="font-semibold text-white truncate">
                        {COMPANY_INFO.email}
                      </div>
                    </div>
                  </div>

                  {/* Footer status within card */}
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-cyan-400" />
                      https://logitec.store/
                    </span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                      Canal Activo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
