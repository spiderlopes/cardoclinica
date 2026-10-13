import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { FluidRibbons3D } from '../components/FluidRibbons3D';
import { FAQ_LIST } from '../data/clinicalData';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, ArrowRight } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const expandAll = () => {
    setOpenIndexes(FAQ_LIST.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndexes([]);
  };

  const filteredFaqs = FAQ_LIST.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fadeIn fluid-ribbons-bg">
      <PageHeader
        badge="Dúvidas Frequentes"
        title="Perguntas Frequentes sobre Consultas e Exames"
        description="Esclarecimentos diretos sobre agendamento particular, preparo para exames, formas de pagamento, convênios com nota para reembolso e estrutura da clínica."
        onNavigate={onNavigate}
        icon={<HelpCircle className="w-3.5 h-3.5" />}
      />

      <section className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Search & Actions Bar with Frosted Glass */}
          <div className="p-4 sm:p-6 rounded-3xl liquid-glass-card flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Pesquisar dúvida..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/90 border border-slate-200/80 text-xs sm:text-sm focus:outline-none focus:border-[#1E4570] shadow-inner"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={expandAll}
                className="px-3.5 py-2 rounded-xl bg-white/90 border border-slate-200/80 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer shadow-xs"
              >
                Expandir tudo
              </button>
              <button
                onClick={collapseAll}
                className="px-3.5 py-2 rounded-xl bg-white/90 border border-slate-200/80 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer shadow-xs"
              >
                Recolher tudo
              </button>
            </div>
          </div>

          {/* Accordion FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndexes.includes(index);

              return (
                <div
                  key={index}
                  className={`rounded-3xl transition-all overflow-hidden liquid-glass-card ${
                    isOpen ? 'border-[#1E4570]/40 shadow-lg' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-[#1E4570] beveled-text">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen ? 'icon-pod-ruby text-white' : 'bg-slate-100/80 text-slate-500'
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help Card */}
          <div className="bg-gradient-to-r from-[#1E4570] to-[#16365C] text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 liquid-glass-dark">
            <div className="space-y-1">
              <h3 className="font-heading text-lg font-bold text-white beveled-dark-text">
                Não encontrou sua dúvida aqui?
              </h3>
              <p className="text-xs text-slate-200">
                Fale diretamente com nossa recepção no WhatsApp e tire todas as suas dúvidas em minutos.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto ruby-button-glossy text-white font-bold text-xs py-3.5 px-6 rounded-2xl flex-shrink-0 cursor-pointer shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
