import React from 'react';
import { SPECIALISTS } from '../data/clinicalData';
import { GraduationCap, Stethoscope, HeartPulse, Waves, Award, CheckCircle2, MessageCircle } from 'lucide-react';

interface SpecialistsSectionProps {
  onOpenBookingWithSpecialty: (specialty: 'cardiologia' | 'vascular') => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({
  onOpenBookingWithSpecialty
}) => {
  return (
    <section 
      id="especialistas"
      aria-labelledby="titulo-especialistas"
      className="py-16 sm:py-24 bg-[#F0F4F8] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4570]/10 text-[#1E4570] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Corpo Clínico Titulado</span>
          </div>
          <h2 
            id="titulo-especialistas"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight"
          >
            Quem Cuida de Você
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed text-justify">
            Antes de falar de títulos, vale falar do essencial: aqui você é recebido por médicos que escolheram a escuta como método. Por trás de cada consulta existe formação médica sólida, residência formal e títulos de especialista registrados no CREMEB. E tudo isso é aplicado da forma que mais importa para você, com acolhimento, atenção individualizada e o tempo que cada caso pede, na Cardo Clínica Cardiovascular.
          </p>
        </div>

        {/* Specialists Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {SPECIALISTS.map((specialist) => {
            const isCardio = specialist.id === 'dra-eulina';
            
            return (
              <article 
                key={specialist.id}
                className="rounded-3xl overflow-hidden flex flex-col justify-between liquid-glass-card liquid-glass-card-hover transition-all duration-300"
              >
                <div>
                  {/* Card Header with Doctor Header Bar */}
                  <div className={`p-6 sm:p-8 ${
                    isCardio 
                      ? 'bg-gradient-to-br from-[#1E4570] to-[#244E7E] text-white' 
                      : 'bg-gradient-to-br from-[#16365C] to-[#1E4570] text-white'
                  }`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-tight sm:tracking-wider bg-white/15 text-white backdrop-blur-sm mb-3 whitespace-nowrap">
                          {isCardio ? <HeartPulse className="w-3.5 h-3.5 text-[#FF6B74] shrink-0" /> : <Waves className="w-3.5 h-3.5 text-[#93C5FD] shrink-0" />}
                          {specialist.role}
                        </span>
                        
                        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                          {specialist.shortName}, {specialist.role}
                        </h3>
                        
                        <p className="text-sm sm:text-base font-semibold text-slate-200 mt-1">
                          {specialist.name}
                        </p>
                      </div>

                      {/* Doctor Monogram Avatar */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white flex-shrink-0 shadow-lg">
                        <span className="font-heading font-black text-xl sm:text-2xl">
                          {isCardio ? 'EM' : 'JC'}
                        </span>
                        <span className="text-[10px] text-slate-300 font-bold uppercase">
                          {specialist.crm.split(' ')[0]}
                        </span>
                      </div>
                    </div>

                    {/* CRM and RQEs */}
                    <div className="mt-4 pt-4 border-t border-white/15">
                      <div className="text-xs sm:text-sm font-semibold text-[#FF7A85] mb-2">
                        {specialist.crm}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {specialist.rqes.map((rqe, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 text-slate-200 font-medium"
                          >
                            <strong>{rqe.label}:</strong> {rqe.number}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8 space-y-6">
                    
                    {/* Formação */}
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#1E4570] flex items-center gap-2 mb-3">
                        <GraduationCap className="w-5 h-5 text-[#C81D25]" />
                        <span>Formação</span>
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {specialist.education.map((edu, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1E4570] flex-shrink-0 mt-2" />
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* O que trata */}
                    <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-slate-200">
                      <h4 className="font-heading text-sm font-bold text-[#1E4570] flex items-center gap-2 mb-2">
                        <Stethoscope className="w-4 h-4 text-[#C81D25]" />
                        <span>O que {isCardio ? 'ela' : 'ele'} trata</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {specialist.treats}
                      </p>
                    </div>

                    {/* Como é a consulta */}
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[#1E4570] mb-2">
                        Como é a consulta
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {specialist.consultationApproach}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Card Footer with Direct CTA */}
                <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200">
                  <button
                    onClick={() => onOpenBookingWithSpecialty(isCardio ? 'cardiologia' : 'vascular')}
                    className="w-full ruby-button-glossy text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Agendar com {specialist.shortName}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
