import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CLINIC_INFO } from './data/clinicalData';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SpecialistsPage } from './pages/SpecialistsPage';
import { CardiologyPage } from './pages/CardiologyPage';
import { VascularSurgeryPage } from './pages/VascularSurgeryPage';
import { ExamsPage } from './pages/ExamsPage';
import { WarningSignsPage } from './pages/WarningSignsPage';
import { FAQPage } from './pages/FAQPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

export type PageId = 
  | 'home' 
  | 'sobre' 
  | 'especialistas' 
  | 'cardiologia' 
  | 'vascular'
  | 'exames' 
  | 'sinais-de-alerta' 
  | 'faq' 
  | 'blog' 
  | 'contato';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle URL hash changes for direct linking and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = [
        'home',
        'sobre', 
        'especialistas', 
        'cardiologia', 
        'vascular', 
        'exames', 
        'sinais-de-alerta', 
        'faq', 
        'blog', 
        'contato'
      ];

      if (validPages.includes(hash as PageId) && hash !== 'home') {
        setCurrentPage(hash as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    const target = page as PageId;
    setCurrentPage(target);
    if (target === 'home') {
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      window.location.hash = target;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (specialty: 'cardiologia' | 'vascular' | 'exames' | 'geral' = 'geral') => {
    let msg = 'Olá, gostaria de agendar uma consulta na Cardo Clínica.';
    if (specialty === 'cardiologia') {
      msg = 'Olá, gostaria de agendar uma consulta em Cardiologia Clínica com a Dra. Eulina Maria.';
    } else if (specialty === 'vascular') {
      msg = 'Olá, gostaria de agendar uma consulta em Cirurgia Vascular & Varizes com o Dr. João Cardoso Neto.';
    } else if (specialty === 'exames') {
      msg = 'Olá, gostaria de agendar exames cardiovasculares na Cardo Clínica.';
    }
    const url = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A2533] flex flex-col selection:bg-[#C81D25] selection:text-white">
      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking('geral')} 
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking('geral')}
            onOpenBookingWithSpecialty={(spec) => handleOpenBooking(spec)}
          />
        )}

        {currentPage === 'sobre' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking('geral')}
          />
        )}

        {currentPage === 'especialistas' && (
          <SpecialistsPage
            onNavigate={navigateTo}
            onOpenBookingWithSpecialty={(spec) => handleOpenBooking(spec)}
          />
        )}

        {currentPage === 'cardiologia' && (
          <CardiologyPage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking('cardiologia')}
          />
        )}

        {currentPage === 'vascular' && (
          <VascularSurgeryPage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking('vascular')}
          />
        )}

        {currentPage === 'exames' && (
          <ExamsPage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking('exames')}
          />
        )}

        {currentPage === 'sinais-de-alerta' && (
          <WarningSignsPage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking('geral')}
          />
        )}

        {currentPage === 'faq' && (
          <FAQPage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking('geral')}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking('geral')}
          />
        )}

        {currentPage === 'contato' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking('geral')}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
