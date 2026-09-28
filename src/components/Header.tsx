import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants/company';
import type { ActiveSection } from '../types';

interface HeaderProps {
  activeSection: ActiveSection;
}

export const Header: FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white/90 backdrop-blur-xs border-b border-slate-100 py-3.5 sm:py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Brand Logo & Name */}
            <a
              href="#inicio"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden focus:ring-2 focus:ring-blue-600 rounded-lg p-0.5 sm:p-1 shrink-0"
              aria-label="Ir al inicio de LOGITEC"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-xs ring-1 ring-blue-100 bg-white flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                <img
                  src="/perfil.png"
                  alt="Emblema corporativo LOGITEC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-wider text-slate-900 font-sans leading-none flex items-center gap-1.5">
                  {COMPANY_INFO.legalName}
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-400 tracking-widest leading-tight mt-0.5">
                  Tecnología
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Navegación principal">
              {NAV_LINKS.map((link) => {
                const sectionKey = link.href.replace('#', '') as ActiveSection;
                const isActive = activeSection === sectionKey;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/70 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-xs hover:shadow-md hover:shadow-blue-500/20 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <span>Contactarnos</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-800 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600 cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              >
                {mobileMenuOpen ? (
                  <X size={22} className="text-slate-900" />
                ) : (
                  <Menu size={22} className="text-slate-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-slate-900/60 backdrop-blur-sm transition-opacity"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white shadow-2xl z-50 flex flex-col p-6 animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src="/perfil.png"
                  alt="Logo LOGITEC"
                  className="w-9 h-9 rounded-lg object-cover"
                />
                <span className="font-extrabold text-lg tracking-wider text-slate-900">
                  {COMPANY_INFO.legalName}
                </span>
              </div>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 cursor-pointer"
                aria-label="Cerrar menú"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col py-6 space-y-1.5 flex-1" aria-label="Menú móvil">
              {NAV_LINKS.map((link) => {
                const sectionKey = link.href.replace('#', '') as ActiveSection;
                const isActive = activeSection === sectionKey;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/80 font-semibold'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={16} className="opacity-50" />
                  </a>
                );
              })}
            </nav>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href="#contacto"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
              >
                <span>Contactarnos</span>
                <ArrowUpRight size={16} />
              </a>

              <div className="space-y-2 pt-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-blue-600 shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-blue-600 font-mono">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-blue-600 shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-600 font-mono">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="pt-1 text-[11px] text-slate-400">
                  NIT {COMPANY_INFO.nit} • {COMPANY_INFO.municipality}, Colombia
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
