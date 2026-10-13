import React, { useState } from 'react';
import { FAQ_LIST, CLINIC_INFO } from '../data/clinicalData';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, Phone } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = FAQ_LIST.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq"
      aria-labelledby="titulo-faq"
      className="py-16 sm:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4570]/10 text-[#1E4570] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 
            id="titulo-faq"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight"
          >
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Respostas claras e diretas sobre nossos atendimentos, médicos, exames e localização
          </p>

          {/* Search Bar */}
          <div className="relative mt-6 max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar pergunta ou assunto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E4570] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#1E4570] bg-[#F0F4F8]/60 shadow-sm' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-[#1E4570]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[#1E4570] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 mt-1 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">Nenhuma pergunta encontrada para sua busca.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-2 text-xs font-bold text-[#1E4570] hover:underline"
              >
                Limpar busca
              </button>
            </div>
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-sm text-[#1E4570]">Ficou com alguma dúvida específica?</h4>
            <p className="text-xs text-slate-600">Nossa equipe está pronta para responder suas dúvidas por WhatsApp.</p>
          </div>
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ruby-button-glossy text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center gap-2 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
