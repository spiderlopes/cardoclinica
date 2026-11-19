import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FluidRibbons3D } from '../components/FluidRibbons3D';
import { CARDIOLOGY_CONDITIONS, OTHER_CARDIOLOGY_SERVICES, SPECIALISTS } from '../data/clinicalData';
import { HeartPulse, Waves, ArrowRight, ShieldCheck, CheckCircle2, Building, MessageCircle, Award, Calendar } from 'lucide-react';

interface CardiologyPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const CardiologyPage: React.FC<CardiologyPageProps> = ({ onNavigate, onOpenBooking }) => {
  const draEulina = SPECIALISTS.find(s => s.id === 'dra-eulina');

  return (
    <div className="animate-fadeIn fluid-ribbons-bg">
      <PageHeader
        badge="Cardiologia Clínica"
        title="Cardiologia e Saúde do Coração em Itabuna"
        description="Diagnóstico precoce, controle da pressão alta e do colesterol, avaliação de risco cirúrgico e exames no mesmo local para cuidar da sua saúde cardiovascular."
        onNavigate={onNavigate}
        icon={<HeartPulse className="w-3.5 h-3.5 text-[#FF7A85]" />}
      />

      {/* Specialist Authority Spotlight */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1E4570] via-[#1A3F67] to-[#122E4D] text-white rounded-3xl p-8 sm:p-10 shadow-2xl liquid-glass-dark flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-dark text-[#FF7A85] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Responsável Técnica pela Cardiologia</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white beveled-dark-text">
                {draEulina?.name}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#FF7A85] font-bold">
                {draEulina?.crm} • {draEulina?.rqes.map(r => `${r.label} ${r.number}`).join(' • ')}
              </p>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {draEulina?.treats}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <button
                onClick={() => onNavigate('especialistas')}
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all border border-white/20 text-center cursor-pointer"
              >
                Ver Currículo Completo
              </button>
              <button
                onClick={onOpenBooking}
                className="ruby-button-glossy text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-2xl cursor-pointer shadow-lg text-center"
              >
                Agendar Consulta Cardiológica
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Conditions Section */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C81D25] block mb-1">
              Cardiologia em Itabuna
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-[#1E4570] tracking-tight beveled-text">
              Hipertensão, Colesterol e Prevenção Cardiovascular
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Avaliação contínua para manter a saúde do coração com exames no local e planos terapêuticos individualizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CARDIOLOGY_CONDITIONS.map((cond) => (
              <article 
                key={cond.id}
                className="rounded-3xl p-8 flex flex-col justify-between transition-all liquid-glass-card liquid-glass-card-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl icon-pod-ruby flex items-center justify-center">
                      <HeartPulse className="w-5 h-5 text-[#C81D25]" />
                    </div>
                    <span className="text-xs font-bold text-[#C81D25] bg-red-50/90 border border-red-200/60 px-3 py-1 rounded-full">
                      {cond.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#1E4570] beveled-text">
                    {cond.title}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p><strong>O que você sente:</strong> {cond.whatYouFeelOrFear}</p>
                    <p><strong>Por que acontece:</strong> {cond.whyItHappens}</p>
                    <div className="p-3.5 rounded-2xl bg-[#F0F4F8]/80 text-[#1E4570] font-medium border border-slate-200/60">
                      <strong>Verdades sobre o tratamento:</strong> {cond.treatmentTruths}
                    </div>
                    <p><strong>Quando buscar atendimento:</strong> {cond.whenToSeek}</p>
                    <p><strong>Como cuidamos na Cardo:</strong> {cond.howWeCare}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">{cond.nextStep}</span>
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-bold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Agendar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Outros Cuidados Cardiológicos */}
      <section className="py-14 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl liquid-glass-card space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1E4570] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#C81D25]" />
              <span>Acompanhamento Contínuo</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E4570] beveled-text">
              Outros Cuidados em Cardiologia Clínica
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed max-w-4xl">
              {OTHER_CARDIOLOGY_SERVICES}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('exames')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E4570] hover:text-[#C81D25] transition-colors cursor-pointer"
              >
                <span>Conhecer exames cardiológicos (Eco, ECG, Holter, MAPA)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('vascular')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E4570] hover:text-[#C81D25] transition-colors cursor-pointer"
              >
                <span>Conhecer a área de Cirurgia Vascular</span>
                <Waves className="w-4 h-4 text-[#1E4570]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de Ação */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1E4570] to-[#122E4D] text-white p-8 sm:p-12 rounded-3xl shadow-2xl liquid-glass-dark flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-heading text-2xl font-bold text-white beveled-dark-text">
                Cuide do seu coração com consulta sem pressa
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                Atendimento particular com tempo dedicado de escuta ativa e exames no próprio consultório.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="ruby-button-glossy text-white font-bold text-xs sm:text-sm py-4 px-7 rounded-2xl flex items-center gap-2 cursor-pointer shadow-lg flex-shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
