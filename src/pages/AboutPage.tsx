import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FluidRibbons3D } from '../components/FluidRibbons3D';
import { ABOUT_DATA, CLINIC_INFO } from '../data/clinicalData';
import { Building2, Award, CheckCircle2, ArrowRight, ShieldCheck, HeartPulse, Clock, Sparkles, MapPin, MessageCircle } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="animate-fadeIn fluid-ribbons-bg">
      <PageHeader
        badge="Sobre a Clínica"
        title="Cardiologia e Cirurgia Vascular no mesmo endereço"
        description="Uma estrutura moderna e integrada no Edifício Itabuna Trade Center, pensada para cuidar do coração e da circulação com escuta atenta, sem pressa e com exames próprios."
        onNavigate={onNavigate}
        icon={<Building2 className="w-3.5 h-3.5" />}
      />

      {/* Main Narrative Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Narrative Text */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1E4570] tracking-tight leading-snug beveled-text">
                {ABOUT_DATA.title}
              </h2>

              {ABOUT_DATA.paragraphs.map((paragraph, idx) => (
                <div 
                  key={idx} 
                  className={idx === 1 ? "p-6 bg-[#F0F4F8] rounded-3xl border-l-4 border-[#1E4570] text-[#1E4570] font-medium my-6 shadow-sm card-specular" : ""}
                >
                  <p>{paragraph}</p>
                </div>
              ))}

              {/* Clinic Atmosphere & Infrastructure Highlights */}
              <div className="pt-6 border-t border-slate-200/80">
                <h3 className="font-heading text-xl font-bold text-[#1E4570] mb-4 beveled-text">
                  Estrutura e Instalações Próprias
                </h3>
                <p className="text-base text-slate-700 leading-relaxed mb-6">
                  A Cardo Clínica conta com recepção acolhedora, consultório médico privativo e sala própria para a realização de exames diagnósticos (Ecocardiograma, ECG, MAPA, Holter e Doppler vascular) e procedimentos de fleboestética. Isso significa comodidade e rapidez: o paciente investiga e trata sem precisar se deslocar para múltiplos laboratórios.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-3xl liquid-glass-card liquid-glass-card-hover">
                    <div className="w-9 h-9 rounded-2xl icon-pod-blue flex items-center justify-center font-bold mb-3">
                      <Clock className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-[#1E4570]">Consulta de 30 min</h4>
                    <p className="text-xs text-slate-600 mt-1">Tempo dedicado à escuta clínica minuciosa.</p>
                  </div>

                  <div className="p-5 rounded-3xl liquid-glass-card liquid-glass-card-hover">
                    <div className="w-9 h-9 rounded-2xl icon-pod-ruby flex items-center justify-center font-bold mb-3">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-[#1E4570]">Exames no Local</h4>
                    <p className="text-xs text-slate-600 mt-1">Cardiológicos e ecografia vascular integrados.</p>
                  </div>

                  <div className="p-5 rounded-3xl liquid-glass-card liquid-glass-card-hover">
                    <div className="w-9 h-9 rounded-2xl icon-pod-blue flex items-center justify-center font-bold mb-3">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-[#1E4570]">SBC & SBACV</h4>
                    <p className="text-xs text-slate-600 mt-1">Condutas guiadas por diretrizes oficiais.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Principles & Fast CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl p-6 sm:p-8 liquid-glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl icon-pod-blue flex items-center justify-center shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1E4570] beveled-text">
                    O que orienta o trabalho da equipe
                  </h3>
                </div>

                <ul className="space-y-4">
                  {ABOUT_DATA.principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-[#C81D25] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{principle}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-200/80">
                  <button
                    onClick={onOpenBooking}
                    className="w-full ruby-button-glossy text-white font-bold py-4 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agendar sua Consulta</span>
                  </button>
                </div>
              </div>

              {/* Location Mini Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#16365C] via-[#1E4570] to-[#122E4D] text-white shadow-xl liquid-glass-dark">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-2xl icon-pod-ruby flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-white mb-1 beveled-dark-text">
                      Edifício Itabuna Trade Center
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Avenida Princesa Isabel, nº 395, Sala 401, Bairro Banco Raso, Itabuna - BA.
                    </p>
                    <button
                      onClick={() => onNavigate('contato')}
                      className="mt-3 text-xs font-bold text-[#FF7A85] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Ver rota e detalhes de localização</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Patient Journey Section */}
      <section className="py-16 sm:py-24 bg-[#F0F4F8] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1E4570] tracking-tight beveled-text">
              Como funciona o atendimento, do início ao fim
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Um fluxo estruturado e acolhedor para cuidar da sua saúde
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.flowSteps.map((stepItem) => (
              <div 
                key={stepItem.step}
                className="rounded-3xl p-6 flex flex-col justify-between transition-all liquid-glass-card liquid-glass-card-hover"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl icon-pod-blue text-white flex items-center justify-center font-heading font-black text-lg mb-4 shadow-md">
                    {stepItem.step}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#1E4570] mb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="ruby-button-glossy text-white font-bold text-sm py-4 px-8 rounded-2xl inline-flex items-center gap-2 cursor-pointer shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar com a Recepção no WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
