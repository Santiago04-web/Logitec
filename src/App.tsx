import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Values } from './components/Values';
import { Solutions } from './components/Solutions';
import { Technology } from './components/Technology';
import { WhyUs } from './components/WhyUs';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { FloatingActions } from './components/FloatingActions';
import type { ActiveSection, ModalType, SolutionDetail } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('inicio');
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedSolution, setSelectedSolution] = useState<SolutionDetail | null>(null);

  // Scroll spy to update active section in header
  useEffect(() => {
    const sectionIds: ActiveSection[] = ['inicio', 'nosotros', 'soluciones', 'tecnologia', 'contacto'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenPrivacy = () => {
    setActiveModal('privacy');
  };

  const handleOpenTerms = () => {
    setActiveModal('terms');
  };

  const handleSelectSolution = (sol: SolutionDetail) => {
    setSelectedSolution(sol);
    setActiveModal('solution-detail');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleContactSolution = (solutionTitle: string) => {
    const messageInput = document.getElementById('mensaje') as HTMLTextAreaElement | null;
    if (messageInput) {
      messageInput.value = `Hola LOGITEC, me interesa obtener más información respecto a la línea de "${solutionTitle}".`;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Sobre Logitec Section */}
        <About />

        {/* Valores Corporativos */}
        <Values />

        {/* Soluciones para tu empresa */}
        <Solutions onSelectSolution={handleSelectSolution} />

        {/* Tecnología para avanzar */}
        <Technology />

        {/* ¿Por qué elegir a Logitec? */}
        <WhyUs />

        {/* Call to Action */}
        <CTA />

        {/* Contacto Oficial */}
        <Contact />
      </main>

      {/* Corporate Legal Footer */}
      <Footer onOpenPrivacy={handleOpenPrivacy} onOpenTerms={handleOpenTerms} />

      {/* Legal & Detail Modals */}
      <LegalModals
        activeModal={activeModal}
        selectedSolution={selectedSolution}
        onClose={handleCloseModal}
        onContactSolution={handleContactSolution}
      />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}

export default App;
