import React from 'react';
import { CARDIOLOGY_CONDITIONS, OTHER_CARDIOLOGY_SERVICES, EXAMS_LIST } from '../data/clinicalData';
import { HeartPulse, Activity, AlertCircle, HelpCircle, ArrowRight, ShieldAlert, CheckCircle, Stethoscope } from 'lucide-react';

interface CardiologySectionProps {
  onOpenBooking: () => void;
}

export const CardiologySection: React.FC<CardiologySectionProps> = ({ onOpenBooking }) => {
  const cardioExams = EXAMS_LIST.filter(exam => exam.category === 'cardiologia');

  return (
    <section 
      id="cardiologia"
      aria-labelledby="titulo-cardiologia"
      className="py-16 sm:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#C81D25] text-xs font-bold uppercase tracking-wider mb-3">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Cardiologia Especializada</span>
          </div>
          <h2 
            id="titulo-cardiologia"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight leading-tight"
          >
            Cardiologia em Itabuna, pela dúvida real de quem procura
          </h2>
        </div>

        {/* Intro Block: Quando devo procurar um cardiologista */}
        <div className="mb-12 p-6 sm:p-8 bg-[#F0F4F8] rounded-3xl border border-slate-200">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E4570] mb-3 flex items-center gap-2.5">
            <HelpCircle className="w-6 h-6 text-[#C81D25]" />
            <span>Quando devo procurar um cardiologista?</span>
          </h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
            Dor no peito, aumento da pressão arterial, falta de ar, palpitações e alterações no colesterol são os motivos mais comuns que levam uma pessoa à consulta de cardiologia. A avaliação começa sempre por um exame clínico detalhado, antes de qualquer exame complementar.
          </p>
        </div>

        {/* Detailed Condition Cards (Pressão Alta & Colesterol Alto) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {CARDIOLOGY_CONDITIONS.map((cond) => (
            <article 
              key={cond.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-lg shadow-[#1E4570]/5 p-6 sm:p-8 flex flex-col justify-between card-specular hover:border-[#1E4570]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-[#C81D25] border border-red-100">
                    {cond.badge}
                  </span>
                  <Activity className="w-5 h-5 text-[#C81D25]" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#1E4570] mb-6">
                  {cond.title}
                </h3>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
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

                  <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/60 text-amber-900">
                    <p className="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5 text-amber-800">
                      <AlertCircle className="w-3.5 h-3.5" />
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

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                  <strong>Próximo passo:</strong> {cond.nextStep}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="ruby-button-glossy text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  <span>Agendar Avaliação</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Other Cardiology Services Block */}
        <div className="mb-14 p-6 sm:p-8 bg-gradient-to-r from-[#1E4570] to-[#2B578A] text-white rounded-3xl shadow-xl card-specular">
          <div className="flex items-center gap-3 mb-3">
            <Stethoscope className="w-6 h-6 text-[#FF7A85]" />
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Outras situações atendidas em cardiologia
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-4xl">
            {OTHER_CARDIOLOGY_SERVICES}
          </p>
        </div>

        {/* Exames de Cardiologia Feitos na Própria Clínica */}
        <div className="p-6 sm:p-8 bg-[#F0F4F8] rounded-3xl border border-slate-200">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E4570] mb-6 flex items-center gap-2.5">
            <Activity className="w-6 h-6 text-[#C81D25]" />
            <span>Exames de cardiologia feitos na própria clínica</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cardioExams.map((exam) => (
              <div 
                key={exam.id}
                className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#C81D25] mt-1.5 flex-shrink-0" />
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

          <div className="mt-8 pt-4 border-t border-slate-300/60 text-xs sm:text-sm text-slate-600">
            <strong>Credibilidade Médica:</strong> Consultas e exames conduzidos pela Dra. Eulina Maria dos Santos Chaves Cardoso, CRM 20685, RQEs 14173, 14174 e 14179.
          </div>
        </div>

      </div>
    </section>
  );
};
