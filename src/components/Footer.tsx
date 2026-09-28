import type { FC } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants/company';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Col 1: Brand & Legal Identity (MUST BE REAL TEXT) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5 shadow-md flex items-center justify-center shrink-0">
                <img
                  src="/perfil.png"
                  alt="Insignia corporativa LOGITEC"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                {/* REAL TEXT LOGITEC */}
                <span className="text-2xl font-black tracking-wider text-white font-sans">
                  {COMPANY_INFO.legalName}
                </span>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                  Tecnología e Innovación
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empresa colombiana orientada a la tecnología, la innovación y el desarrollo de soluciones para las necesidades de las organizaciones.
            </p>

            {/* REAL TEXT NIT & LEGAL REGISTRATION */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 max-w-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Registro Legal y Tributario</span>
              </div>
              <div className="text-sm font-semibold text-white">
                Razón Social: <span className="text-cyan-300 font-bold">{COMPANY_INFO.legalName}</span>
              </div>
              <div className="text-sm font-mono text-slate-300">
                NIT: <span className="text-white font-bold tracking-wider">{COMPANY_INFO.nit}</span>
              </div>
              <div className="text-xs text-slate-400">
                Domicilio principal: {COMPANY_INFO.city}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2.5">
                Aspectos Legales
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="hover:text-cyan-400 transition-colors underline cursor-pointer text-left"
                  >
                    Política de Privacidad
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenTerms}
                    className="hover:text-cyan-400 transition-colors underline cursor-pointer text-left"
                  >
                    Términos y Condiciones
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Verified Contact Info (REAL TEXT) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Información de Contacto
            </h4>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white">
                    {COMPANY_INFO.address}
                  </div>
                  <div className="text-xs text-slate-400">
                    {COMPANY_INFO.city}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-slate-300 hover:text-white font-mono transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-300 hover:text-white font-mono transition-colors truncate"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={COMPANY_INFO.domain}
                  className="text-cyan-400 hover:underline font-mono inline-flex items-center gap-1"
                >
                  <span>https://logitec.store/</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  Información empresarial verificable y consistente en toda la plataforma.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            {COMPANY_INFO.copyright}
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <span>{COMPANY_INFO.legalName}</span>
            <span>•</span>
            <span>NIT {COMPANY_INFO.nit}</span>
            <span>•</span>
            <span>Cali, Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
