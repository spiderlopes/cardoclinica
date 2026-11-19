import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { FluidRibbons3D } from '../components/FluidRibbons3D';
import { CLINIC_INFO } from '../data/clinicalData';
import { MapPin, MessageCircle, Mail, Clock, ExternalLink, ShieldCheck, CheckCircle2, Copy, ArrowRight, HeartPulse, Waves, Sparkles, Instagram } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const getWhatsAppUrl = (topic: string) => {
    let msg = 'Olá, gostaria de agendar uma consulta na Cardo Clínica.';
    if (topic === 'cardio') {
      msg = 'Olá, gostaria de agendar uma consulta em Cardiologia Clínica com a Dra. Eulina Maria.';
    } else if (topic === 'vascular') {
      msg = 'Olá, gostaria de agendar uma consulta em Cirurgia Vascular & Varizes com o Dr. João Cardoso Neto.';
    } else if (topic === 'exames') {
      msg = 'Olá, gostaria de agendar exames cardiovasculares na Cardo Clínica.';
    }
    return `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="animate-fadeIn fluid-ribbons-bg">
      <PageHeader
        badge="Localização & Contato"
        title="Venha Conhecer a Cardo Clínica em Itabuna"
        description="Localizada no Edifício Itabuna Trade Center, Sala 401, com fácil acesso, estacionamento nas proximidades e atendimento particular acolhedor."
        onNavigate={onNavigate}
        icon={<MapPin className="w-3.5 h-3.5" />}
      />

      <section className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left: Contact Info Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl p-8 liquid-glass-card space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C81D25] block mb-1">
                    Canais Diretos de Atendimento
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-[#1E4570] beveled-text">
                    Fale com nossa recepção
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  {/* Address */}
                  <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-start justify-between gap-3 shadow-xs">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl icon-pod-ruby flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#1E4570] block font-bold">Endereço Completo:</strong>
                        <span className="text-slate-600 leading-relaxed block mt-0.5">{CLINIC_INFO.address}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyAddress}
                      className="p-2 rounded-xl bg-white/90 hover:bg-slate-100 text-slate-500 border border-slate-200 text-xs flex items-center gap-1 cursor-pointer flex-shrink-0 shadow-xs"
                      title="Copiar endereço"
                    >
                      {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span className="hidden sm:inline">{copied ? 'Copiado' : 'Copiar'}</span>
                    </button>
                  </div>

                  {/* WhatsApp */}
                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200/60 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl icon-pod-ruby flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#C81D25] block font-bold">WhatsApp Oficial:</strong>
                        <a href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:underline">
                          {CLINIC_INFO.whatsapp}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ruby-button-glossy text-white font-bold text-xs py-1.5 px-3 rounded-lg"
                    >
                      Conversar
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-start gap-3 shadow-xs">
                    <div className="w-8 h-8 rounded-xl icon-pod-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#1E4570] block font-bold">Horário de Funcionamento:</strong>
                      <span className="text-slate-600">{CLINIC_INFO.hours}</span>
                    </div>
                  </div>

                  {/* Instagram & Email */}
                  <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-start gap-3 shadow-xs">
                    <div className="w-8 h-8 rounded-xl icon-pod-ruby flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#1E4570] block font-bold">Instagram Oficial:</strong>
                      <a href="https://www.instagram.com/cardoclinica/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#C81D25] font-bold hover:underline mt-0.5 inline-block">
                        @cardoclinica
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-start gap-3 shadow-xs">
                    <div className="w-8 h-8 rounded-xl icon-pod-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#1E4570] block font-bold">E-mail:</strong>
                      <span className="text-slate-600 block">{CLINIC_INFO.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Direct WhatsApp Agendamento Cards */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl p-8 liquid-glass-card space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C81D25] block mb-1">
                    Agendamento Imediato via WhatsApp
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#1E4570] beveled-text">
                    Inicie seu atendimento sem burocracia
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Clique abaixo para falar diretamente com a nossa recepção pelo WhatsApp. Tiramos todas as dúvidas sobre horários, valores e preparo para exames.
                  </p>
                </div>

                {/* Primary Big WhatsApp Button */}
                <a
                  href={getWhatsAppUrl('geral')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full ruby-button-glossy text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 text-base shadow-xl group hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-6 h-6 fill-white/20" />
                  <span>Chamar no WhatsApp (73) 98138 6868</span>
                </a>

                <div className="pt-2 border-t border-slate-200/80">
                  <span className="text-xs font-bold text-[#1E4570] block mb-3 uppercase tracking-wider">
                    Ou escolha o assunto direto:
                  </span>

                  <div className="space-y-2.5">
                    {/* Cardio */}
                    <a
                      href={getWhatsAppUrl('cardio')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 flex items-center justify-between group transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl icon-pod-ruby flex items-center justify-center flex-shrink-0">
                          <HeartPulse className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="text-xs sm:text-sm font-bold text-[#1E4570] group-hover:text-[#C81D25] transition-colors block">
                            Consulta em Cardiologia Clínica
                          </strong>
                          <span className="text-[11px] text-slate-500">Dra. Eulina Maria • CRM 20685</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C81D25] group-hover:translate-x-1 transition-all" />
                    </a>

                    {/* Vascular */}
                    <a
                      href={getWhatsAppUrl('vascular')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 flex items-center justify-between group transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl icon-pod-blue flex items-center justify-center flex-shrink-0">
                          <Waves className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="text-xs sm:text-sm font-bold text-[#1E4570] group-hover:text-[#C81D25] transition-colors block">
                            Cirurgia Vascular & Varizes
                          </strong>
                          <span className="text-[11px] text-slate-500">Dr. João Cardoso Neto • CRM 20684</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C81D25] group-hover:translate-x-1 transition-all" />
                    </a>

                    {/* Exams */}
                    <a
                      href={getWhatsAppUrl('exames')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 flex items-center justify-between group transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl icon-pod-blue flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-[#1E4570]" />
                        </div>
                        <div>
                          <strong className="text-xs sm:text-sm font-bold text-[#1E4570] group-hover:text-[#C81D25] transition-colors block">
                            Agendamento de Exames no Local
                          </strong>
                          <span className="text-[11px] text-slate-500">Eco, Doppler, MAPA, Holter, ECG</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C81D25] group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Atendimento exclusivamente particular com emissão de nota para reembolso.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Google Maps Frame */}
          <div className="rounded-3xl p-8 liquid-glass-card space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-[#1E4570] beveled-text">
                  Localização no Google Maps
                </h3>
                <p className="text-xs text-slate-500">
                  Av. Félix Mendonça, 555 - Góes Calmon, Itabuna - BA, 45605-300
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Edificio+Itabuna+Trade+Center+Itabuna+BA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C81D25] hover:underline"
              >
                <span>Abrir rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
              <iframe
                title="Mapa de Localização da Cardo Clínica"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.344406206038!2d-39.2778393!3d-14.7937966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739aa2bbf8478ff%3A0x88981df104d41a87!2sEdif%C3%ADcio%20Itabuna%20Trade%20Center!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
