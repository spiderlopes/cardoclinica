import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FluidRibbons3D } from '../components/FluidRibbons3D';
import { VASCULAR_CONDITIONS, SURGERY_HOSPITALS, OTHER_VASCULAR_SERVICES, SPECIALISTS } from '../data/clinicalData';
import { Waves, CheckCircle2, ShieldCheck, Building2, ArrowRight, Activity, Calendar, MapPin, Award } from 'lucide-react';

interface VascularSurgeryPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const VascularSurgeryPage: React.FC<VascularSurgeryPageProps> = ({ onNavigate, onOpenBooking }) => {
  const drJoao = SPECIALISTS.find(s => s.id === 'dr-joao');

  return (
    <div className="animate-fadeIn fluid-ribbons-bg">
      <PageHeader
        badge="Cirurgia Vascular & Angiologia"
        title="Cirurgia Vascular e Tratamento Circulatório em Itabuna"
        description="Diagnóstico preciso com ecografia vascular no local, tratamentos modernos para varizes com endolaser e espuma, cuidados com pé diabético e cirurgias nos melhores hospitais de Itabuna."
        onNavigate={onNavigate}
        icon={<Waves className="w-3.5 h-3.5 text-[#93C5FD]" />}
      />

      {/* Specialist Authority Spotlight */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1E4570] via-[#1A3F67] to-[#122E4D] text-white rounded-3xl p-8 sm:p-10 shadow-2xl liquid-glass-dark flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-dark text-[#93C5FD] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Responsável Técnico pela Cirurgia Vascular</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white beveled-dark-text">
                {drJoao?.name}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#FF7A85] font-bold">
                {drJoao?.crm} • {drJoao?.rqes.map(r => `${r.label} ${r.number}`).join(' • ')}
              </p>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {drJoao?.treats}
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
                Agendar Avaliação Vascular
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Vascular Conditions Section */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E4570] block mb-1">
              Condições & Tratamentos
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-[#1E4570] tracking-tight beveled-text">
              Varizes, Circulação Periférica e Pé Diabético
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Esclarecimentos transparentes sobre as principais queixas circulatórias atendidas na Cardo Clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VASCULAR_CONDITIONS.map((cond) => (
              <article 
                key={cond.id}
                className="rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all liquid-glass-card liquid-glass-card-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl icon-pod-blue flex items-center justify-center">
                      <Waves className="w-5 h-5 text-[#1E4570]" />
                    </div>
                    <span className="text-xs font-bold text-[#1E4570] bg-blue-50/90 border border-blue-200/60 px-3 py-1 rounded-full">
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
                    <span>Avaliar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Outros Cuidados Vasculares */}
      <section className="py-14 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl liquid-glass-card space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1E4570] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#1E4570]" />
              <span>Procedimentos & Acessos Vasculares</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E4570] beveled-text">
              Outros Cuidados em Cirurgia Vascular e Angiologia
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed max-w-4xl">
              {OTHER_VASCULAR_SERVICES}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('exames')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E4570] hover:text-[#C81D25] transition-colors cursor-pointer"
              >
                <span>Conhecer os 5 exames de Eco Color Doppler realizados na clínica</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Credenciamento Hospitalar */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1E4570] to-[#122E4D] text-white p-8 sm:p-12 rounded-3xl shadow-2xl liquid-glass-dark">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-dark text-xs font-bold uppercase tracking-wider text-[#FF7A85]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Estrutura Cirúrgica em Itabuna</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white beveled-dark-text">
                  Cirurgias realizadas nos principais hospitais da região
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {SURGERY_HOSPITALS.text}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {SURGERY_HOSPITALS.hospitals.map((h, i) => (
                    <div key={i} className="p-4 rounded-2xl liquid-glass-dark">
                      <strong className="text-sm font-bold text-white block">{h.name}</strong>
                      <span className="text-xs text-[#93C5FD]">{h.city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full ruby-button-glossy text-white font-bold text-xs sm:text-sm py-4 px-6 rounded-2xl flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Consulta com Cirurgião Vascular</span>
                </button>
                <button
                  onClick={() => onNavigate('contato')}
                  className="w-full py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all border border-white/15 cursor-pointer text-center"
                >
                  Ver Endereço do Consultório
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
