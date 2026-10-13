import React from 'react';
import { ABOUT_DATA } from '../data/clinicalData';
import { Heart, Activity, CheckCircle, ArrowRight, Shield, Award, Sparkles, Building2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200"
    >
      {/* Background Soft Lighting Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E4570]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C81D25]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4570]/10 text-[#1E4570] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Sobre a Cardo Clínica</span>
          </div>
          <h2 
            id="titulo-sobre"
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E4570] tracking-tight leading-tight"
          >
            {ABOUT_DATA.title}
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Main Story Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
            {ABOUT_DATA.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 1 ? "p-5 bg-[#F0F4F8] rounded-2xl border-l-4 border-[#1E4570] text-[#1E4570] font-medium" : ""}>
                {idx === 1 ? (
                  <>
                    A Cardo Clínica nasceu para atender esse paciente de forma completa.{' '}
                    <strong className="font-bold">
                      Cardiologia e cirurgia vascular no mesmo espaço significam acompanhamento integrado
                    </strong>
                    , sem que você precise coordenar sozinho o cuidado entre clínicas diferentes.
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>

          {/* Core Principles Card (O que orienta o trabalho) */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg shadow-[#1E4570]/5 card-specular">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-[#1E4570] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1E4570]">
                  O que orienta o trabalho da equipe
                </h3>
              </div>

              <ul className="space-y-4">
                {ABOUT_DATA.principles.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-[#C81D25] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <button
                  onClick={onOpenBooking}
                  className="w-full ruby-button-glossy text-white font-bold py-3 px-5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <span>Agendar Atendimento Sem Pressa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Step-by-Step Patient Flow (Como funciona o atendimento) */}
        <div className="mt-12 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E4570]">
              Como funciona o atendimento, do início ao fim
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Processo claro, humanizado e focado na sua saúde cardiovascular
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.flowSteps.map((stepItem, index) => (
              <div 
                key={stepItem.step}
                className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E4570] to-[#2B578A] text-white flex items-center justify-center font-heading font-extrabold text-lg mb-4 shadow-md group-hover:scale-105 transition-transform">
                  {stepItem.step}
                </div>
                <h4 className="font-heading text-base font-bold text-[#1E4570] mb-2">
                  {stepItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stepItem.description}
                </p>
                {index < ABOUT_DATA.flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300 z-10">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
