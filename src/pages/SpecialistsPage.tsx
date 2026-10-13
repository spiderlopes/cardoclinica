import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FluidRibbons3D } from '../components/FluidRibbons3D';
import { SPECIALISTS } from '../data/clinicalData';
import { GraduationCap, Stethoscope, HeartPulse, Waves, Award, CheckCircle2, MessageCircle, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

interface SpecialistsPageProps {
  onNavigate: (page: string) => void;
  onOpenBookingWithSpecialty: (specialty: 'cardiologia' | 'vascular') => void;
}

export const SpecialistsPage: React.FC<SpecialistsPageProps> = ({
  onNavigate,
  onOpenBookingWithSpecialty
}) => {
  return (
    <div className="animate-fadeIn fluid-ribbons-bg">
      <PageHeader
        badge="Corpo Clínico"
        title="Quem Cuida de Você"
        description="Antes de falar de títulos, vale falar do essencial: aqui você é recebido por médicos que escolheram a escuta como método. Por trás de cada consulta existe formação médica sólida, residência formal e títulos de especialista registrados no CREMEB. E tudo isso é aplicado da forma que mais importa para você, com acolhimento, atenção individualizada e o tempo que cada caso pede, na Cardo Clínica Cardiovascular."
        onNavigate={onNavigate}
        icon={<Award className="w-3.5 h-3.5" />}
      />

      <section className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {SPECIALISTS.map((specialist) => {
            const isCardio = specialist.id === 'dra-eulina';

            return (
              <article 
                key={specialist.id}
                id={specialist.id}
                className="liquid-glass-card rounded-3xl overflow-hidden"
              >
                {/* Header Banner with 3D Studio Lighting */}
                <div className={`p-6 sm:p-10 ${
                  isCardio 
                    ? 'bg-gradient-to-br from-[#1E4570] via-[#244E7E] to-[#122E4D] text-white' 
                    : 'bg-gradient-to-br from-[#16365C] via-[#1E4570] to-[#0F2844] text-white'
                } relative overflow-hidden`}>
                  
                  {/* Directional 45° Highlight */}
                  <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

                  <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-tight sm:tracking-wider liquid-glass-dark text-white shadow-sm whitespace-nowrap">
                        {isCardio ? <HeartPulse className="w-3.5 h-3.5 text-[#FF7A85] shrink-0" /> : <Waves className="w-3.5 h-3.5 text-[#93C5FD] shrink-0" />}
                        {specialist.role}
                      </span>
                      
                      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight beveled-dark-text">
                        {specialist.shortName}
                      </h2>
                      
                      <p className="text-base sm:text-lg font-medium text-slate-200">
                        {specialist.name}
                      </p>
                    </div>

                    {/* 3D Brushed Monogram Box */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl liquid-glass-dark flex flex-col items-center justify-center text-white flex-shrink-0 shadow-2xl">
                      <span className="font-heading font-black text-2xl sm:text-3xl text-white beveled-dark-text">
                        {isCardio ? 'EM' : 'JC'}
                      </span>
                      <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                        {specialist.crm}
                      </span>
                    </div>
                  </div>

                  {/* CRM & RQEs Badges */}
                  <div className="relative mt-6 pt-6 border-t border-white/15 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#FF7A85] liquid-glass-dark px-3.5 py-1.5 rounded-xl shadow-sm">
                      {specialist.crm}
                    </span>
                    {specialist.rqes.map((rqe, idx) => (
                      <span 
                        key={idx}
                        className="text-xs liquid-glass-dark px-3.5 py-1.5 rounded-xl text-slate-200 font-medium shadow-sm"
                      >
                        <strong>{rqe.label}:</strong> {rqe.number}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  
                  {/* Left Column: Formação Acadêmica */}
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="font-heading text-lg font-bold text-[#1E4570] flex items-center gap-2 pb-2 border-b border-slate-100 beveled-text">
                      <div className="w-7 h-7 rounded-xl icon-pod-ruby flex items-center justify-center">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span>Formação Médica & Residências</span>
                    </h3>
                    
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                      {specialist.education.map((edu, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-[#F0F4F8] transition-colors border border-transparent hover:border-slate-200/60">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1E4570] flex-shrink-0 mt-1.5" />
                          <span className="leading-relaxed">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: O que trata & Como é a consulta */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="p-6 rounded-3xl liquid-glass-card">
                      <h3 className="font-heading text-base font-bold text-[#1E4570] flex items-center gap-2 mb-2 beveled-text">
                        <div className="w-6 h-6 rounded-lg icon-pod-blue flex items-center justify-center">
                          <Stethoscope className="w-3.5 h-3.5" />
                        </div>
                        <span>O que {isCardio ? 'ela' : 'ele'} trata</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {specialist.treats}
                      </p>
                    </div>

                    <div className="p-6 rounded-3xl liquid-glass-card">
                      <h3 className="font-heading text-base font-bold text-[#1E4570] flex items-center gap-2 mb-2 beveled-text">
                        <div className="w-6 h-6 rounded-lg icon-pod-ruby flex items-center justify-center">
                          <HeartPulse className="w-3.5 h-3.5" />
                        </div>
                        <span>Como é a consulta</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {specialist.consultationApproach}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenBookingWithSpecialty(isCardio ? 'cardiologia' : 'vascular')}
                        className="w-full ruby-button-glossy text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm cursor-pointer shadow-xl"
                      >
                        <MessageCircle className="w-4 h-4 fill-white/20" />
                        <span>Agendar com {specialist.shortName}</span>
                      </button>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}

        </div>
      </section>
    </div>
  );
};
