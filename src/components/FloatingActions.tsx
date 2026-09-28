import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { ArrowUp, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../constants/company';

export const FloatingActions: FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Quick Button */}
      <a
        href={`https://wa.me/57${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
          'Hola LOGITEC, me comunico desde https://logitec.store/'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
          WhatsApp LOGITEC
        </span>
      </a>

      {/* Direct Phone Quick Button (Mobile/Desktop) */}
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="pointer-events-auto p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group focus:outline-hidden focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label={`Llamar a ${COMPANY_INFO.phone}`}
        title={`Llamar a ${COMPANY_INFO.phone}`}
      >
        <Phone className="w-4 h-4" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-semibold transition-all duration-300">
          {COMPANY_INFO.phone}
        </span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-blue-600 shadow-md border border-slate-200 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center focus:outline-hidden focus:ring-2 focus:ring-blue-600"
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
