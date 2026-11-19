import React from 'react';
import { VASCULAR_CONDITIONS, OTHER_VASCULAR_SERVICES, EXAMS_LIST, SURGERY_HOSPITALS } from '../data/clinicalData';
import { Waves, Sparkles, AlertCircle, ArrowRight, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';

interface VascularSectionProps {
  onOpenBooking: () => void;
}

export const VascularSection: React.FC<VascularSectionProps> = ({ onOpenBooking }) => {
  const vascularExams = EXAMS_LIST.filter(exam => exam.category === 'vascular');

  return (
    <section 
      id="cirurgia-vascular"
      aria-labelledby="titulo-cirurgia"
      className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E4570] text-xs font-bold uppercase tracking-wider mb-3">
            <Waves className="w-3.5 h-3.5" />
            <span>Cirurgia Vascular & Endovascular</span>
          </div>
          <h2 
            id="titulo-cirurgia"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight leading-tight"
          >
            Cirurgia Vascular em Itabuna, pela dúvida real de quem procura
          </h2>
        </div>

        {/* Detailed Condition Cards (Varizes, Pé Diabético, Dor nas Pernas) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {VASCULAR_CONDITIONS.map((cond) => (
            <article 
              key={cond.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-lg shadow-[#1E4570]/5 p-6 sm:p-7 flex flex-col justify-between card-specular hover:border-[#1E4570]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#1E4570] border border-blue-100">
                    {cond.badge}
                  </span>
                  <Waves className="w-5 h-5 text-[#2B578A]" />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E4570] mb-5">
                  {cond.title}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="font-bold text-[#1E4570] text-xs uppercase tracking-wider mb-1">
                      O que você sente ou teme
                    </p>
                    <p className="leading-relaxed">{cond.whatYouFeelOrFear}</p>
                  </div>

                  <div>
                    <p className="font-bold text-[#1E4570] text-xs uppercase tracking-wider mb-1">
                      Por que acontece
                    </p>
                    <p className="leading-relaxed">{cond.whyItHappens}</p>
                  </div>

                  <div>
                    <p className="font-bold text-[#1E4570] text-xs uppercase tracking-wider mb-1">
                      Verdades sobre o tratamento
                    </p>
                    <p className="leading-relaxed">{cond.treatmentTruths}</p>
                  </div>

                  <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/60 text-amber-900">
                    <p className="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1 text-amber-800">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      Quando procurar avaliação
                    </p>
                    <p className="text-xs leading-relaxed">{cond.whenToSeek}</p>
                  </div>

                  <div>
                    <p className="font-bold text-[#1E4570] text-xs uppercase tracking-wider mb-1">
                      Como conduzimos o cuidado
                    </p>
                    <p className="leading-relaxed">{cond.howWeCare}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col gap-3">
                <span className="text-xs text-slate-500 font-medium">
                  <strong>Próximo passo:</strong> {cond.nextStep}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="w-full ruby-button-glossy text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Agendar com Dr. João</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Other Vascular Services Block */}
        <div className="mb-14 p-6 sm:p-8 bg-gradient-to-r from-[#16365C] to-[#1E4570] text-white rounded-3xl shadow-xl card-specular">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-[#93C5FD]" />
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Outras situações atendidas em cirurgia vascular
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-4xl">
            {OTHER_VASCULAR_SERVICES}
          </p>
        </div>

        {/* Exames de Ecografia Vascular Feitos na Própria Clínica */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm mb-12">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E4570] mb-6 flex items-center gap-2.5">
            <Waves className="w-6 h-6 text-[#2B578A]" />
            <span>Exames de ecografia vascular feitos na própria clínica</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vascularExams.map((exam) => (
              <div 
                key={exam.id}
                className="p-4 bg-[#F0F4F8] rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#1E4570] mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#1E4570] mb-1">
                    {exam.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {exam.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-600">
            <strong>Credibilidade Médica:</strong> Consultas e procedimentos conduzidos pelo Dr. João Cardoso Neto, CRM 20684, RQEs 13382, 22262 e 17371.
          </div>
        </div>

        {/* Onde as cirurgias são realizadas */}
        <div className="p-6 sm:p-8 bg-[#F0F4F8] rounded-3xl border border-slate-200">
          <div className="flex items-center gap-2.5 mb-3">
            <Building2 className="w-6 h-6 text-[#1E4570]" />
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E4570]">
              Onde as cirurgias são realizadas
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl mb-6">
            {SURGERY_HOSPITALS.text}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SURGERY_HOSPITALS.hospitals.map((hosp, i) => (
              <div 
                key={i}
                className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E4570]/10 text-[#1E4570] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1E4570]">{hosp.name}</div>
                  <div className="text-xs text-slate-500">{hosp.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
