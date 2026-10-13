import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { FluidRibbons3D } from '../components/FluidRibbons3D';
import { WARNING_SIGNS, CLINIC_INFO } from '../data/clinicalData';
import { AlertTriangle, HeartPulse, Waves, CheckCircle2, MessageCircle, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface WarningSignsPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const WarningSignsPage: React.FC<WarningSignsPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedSigns, setSelectedSigns] = useState<string[]>([]);

  const toggleSign = (sign: string) => {
    if (selectedSigns.includes(sign)) {
      setSelectedSigns(selectedSigns.filter(s => s !== sign));
    } else {
      setSelectedSigns([...selectedSigns, sign]);
    }
  };

  const handleSendToWhatsApp = () => {
    const text = `Olá! Estava navegando no site da Cardo Clínica e identifiquei os seguintes sinais de alerta que gostaria de avaliar em consulta:\n\n${selectedSigns.map(s => `- ${s}`).join('\n')}\n\nGostaria de verificar os horários disponíveis para consulta com o especialista.`;
    const url = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="animate-fadeIn fluid-ribbons-bg">
      <PageHeader
        badge="Prevenção & Alerta"
        title={WARNING_SIGNS.title}
        description="Aprenda a reconhecer os sintomas vasculares e cardiológicos mais importantes e saiba quando procurar atendimento médico especializado em Itabuna."
        onNavigate={onNavigate}
        icon={<AlertTriangle className="w-3.5 h-3.5 text-amber-300" />}
      />

      <section className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Introductory Guide Card */}
          <div className="p-6 sm:p-8 rounded-3xl liquid-glass-card">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl icon-pod-ruby flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1E4570] beveled-text">
                  Por que a atenção preventiva salva vidas?
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {WARNING_SIGNS.intro}
                </p>
              </div>
            </div>
          </div>

          {/* Sinais Divididos por Categoria */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* 1. Sinais da Circulação */}
            <div className="rounded-3xl p-6 sm:p-8 liquid-glass-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/80">
                  <div className="w-10 h-10 rounded-2xl icon-pod-blue flex items-center justify-center">
                    <Waves className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#1E4570] beveled-text">
                      Sinais da Circulação (Cirurgia Vascular)
                    </h3>
                    <span className="text-[11px] text-slate-500">Veias, artérias periféricas e membros inferiores</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {WARNING_SIGNS.vascularSigns.map((sign, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 p-3 rounded-2xl bg-white/80 border border-slate-200/60 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#1E4570] flex-shrink-0" />
                      <span className="text-slate-700 font-medium leading-relaxed">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/70">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 rounded-2xl bg-white/90 hover:bg-[#E2E8F0] text-[#1E4570] text-xs font-bold transition-all border border-slate-200/80 cursor-pointer shadow-xs"
                >
                  Agendar com Cirurgião Vascular
                </button>
              </div>
            </div>

            {/* 2. Sinais do Coração */}
            <div className="rounded-3xl p-6 sm:p-8 liquid-glass-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/80">
                  <div className="w-10 h-10 rounded-2xl icon-pod-ruby flex items-center justify-center">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#1E4570] beveled-text">
                      Sinais do Coração (Cardiologia)
                    </h3>
                    <span className="text-[11px] text-slate-500">Músculo cardíaco, ritmo, válvulas e pressão</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {WARNING_SIGNS.cardioSigns.map((sign, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 p-3 rounded-2xl bg-red-50/50 border border-red-100/70 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#C81D25] flex-shrink-0" />
                      <span className="text-slate-700 font-medium leading-relaxed">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/70">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 rounded-2xl bg-red-50/90 hover:bg-red-100/90 text-[#C81D25] text-xs font-bold transition-all border border-red-200/60 cursor-pointer shadow-xs"
                >
                  Agendar com Cardiologista
                </button>
              </div>
            </div>

          </div>

          {/* Interactive Symptom Triaging Checklist */}
          <div className="bg-gradient-to-br from-[#1E4570] via-[#1A3F67] to-[#122E4D] text-white p-8 sm:p-10 rounded-3xl shadow-2xl liquid-glass-dark space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A85]">
                Checklist Interativo de Triagem
              </span>
              <h3 className="font-heading text-2xl font-bold text-white beveled-dark-text">
                Está sentindo algum desses sintomas?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                Selecione os sinais abaixo para gerar uma mensagem pronta de triagem para a equipe da Cardo Clínica no WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                ...WARNING_SIGNS.vascularSigns,
                ...WARNING_SIGNS.cardioSigns
              ].map((signText, i) => {
                const isSelected = selectedSigns.includes(signText);
                return (
                  <button
                    key={i}
                    onClick={() => toggleSign(signText)}
                    className={`p-3.5 rounded-2xl text-xs font-medium text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white text-[#1E4570] font-bold shadow-lg scale-[1.02]'
                        : 'bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15'
                    }`}
                  >
                    <span>{signText}</span>
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-[#C81D25]' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {selectedSigns.length > 0 && (
              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                <div className="text-xs text-[#FF7A85] font-semibold">
                  {selectedSigns.length} sintoma(s) selecionado(s).
                </div>
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto ruby-button-glossy text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-2xl flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Enviar Sintomas para Triagem no WhatsApp</span>
                </button>
              </div>
            )}
          </div>

          {/* Conclusion */}
          <div className="p-6 sm:p-8 rounded-3xl liquid-glass-card text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-[#1E4570] block font-bold text-base mb-2">Conclusão Médica:</strong>
            <p>{WARNING_SIGNS.conclusion}</p>
          </div>

        </div>
      </section>
    </div>
  );
};
