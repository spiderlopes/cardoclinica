import React, { useState, useEffect } from 'react';
import { Cardo3DLogo } from './Cardo3DLogo';
import { CLINIC_INFO } from '../data/clinicalData';
import { MessageCircle, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'especialistas', label: 'Especialistas' },
    { id: 'cardiologia', label: 'Cardiologia' },
    { id: 'vascular', label: 'Cirurgia Vascular' },
    { id: 'exames', label: 'Exames' },
    { id: 'sinais-de-alerta', label: 'Sinais de Alerta' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Blog' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main Navigation Bar - 3D Liquid Glass with Refraction */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/85 backdrop-blur-xl saturate-180 shadow-lg shadow-[#1E4570]/5 py-2.5 border-b border-white/80' 
            : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
          {/* Brand / 3D Logo */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="group flex items-center text-left focus:outline-none cursor-pointer shrink-0 transition-transform duration-300 hover:scale-[1.02]" 
            aria-label="Cardo Clínica Cardiovascular - Início"
          >
            <Cardo3DLogo variant="compact" lightMode={true} />
          </button>

          {/* Desktop Nav Links - Clean Liquid Glass Pill Group */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 flex-1 min-w-0" aria-label="Navegação principal">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 xl:px-3.5 py-1.5 rounded-xl text-xs xl:text-[13px] font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#1E4570] text-white shadow-sm shadow-[#1E4570]/30'
                      : 'text-[#1E4570]/90 hover:text-[#C81D25] hover:bg-slate-100/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onOpenBooking}
              className="ruby-button-glossy text-white text-xs xl:text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer shadow-md whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="ruby-button-glossy text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100/90 text-[#1E4570] hover:bg-slate-200/90 transition-colors cursor-pointer border border-slate-200/80 backdrop-blur-sm"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/80 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    isActive 
                      ? 'bg-[#1E4570] text-white font-bold' 
                      : 'text-[#1E4570] hover:bg-slate-100/80 hover:text-[#C81D25]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200/80">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full ruby-button-glossy text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp (73) 98138 6868</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
