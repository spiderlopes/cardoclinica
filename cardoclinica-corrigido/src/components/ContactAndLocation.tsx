import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicalData';
import { MapPin, MessageCircle, Mail, Clock, ExternalLink, Check, Copy, Building2, Navigation } from 'lucide-react';

interface ContactAndLocationProps {
  onOpenBooking: () => void;
}

export const ContactAndLocation: React.FC<ContactAndLocationProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Avenida+Princesa+Isabel+395+Itabuna+Trade+Center+Itabuna+BA`;

  return (
    <section 
      id="contato"
      aria-labelledby="titulo-contato"
      className="py-16 sm:py-24 bg-white border-b border-slate-200 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4570]/10 text-[#1E4570] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização & Contato</span>
          </div>
          <h2 
            id="titulo-contato"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight leading-tight"
          >
            Venha cuidar do seu coração e da sua circulação
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Localização privilegiada no centro empresarial de Itabuna, com facilidade de acesso, segurança e estacionamento.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 bg-[#F0F4F8] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm card-specular">
            <div>
              <h3 className="font-heading text-xl font-bold text-[#1E4570] mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#C81D25]" />
                <span>Cardo Clínica Cardiovascular</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                {/* Endereço */}
                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/80">
                  <MapPin className="w-5 h-5 text-[#C81D25] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <strong className="block text-[#1E4570] text-xs uppercase tracking-wider mb-1">
                      Endereço
                    </strong>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      {CLINIC_INFO.address}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <button
                        onClick={handleCopyAddress}
                        className="text-xs font-semibold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? "Endereço copiado!" : "Copiar endereço"}</span>
                      </button>
                      <span className="text-slate-300">•</span>
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Abrir no Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contatos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-[#E63946] transition-all flex items-start gap-3 group shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-xl bg-red-100 text-[#C81D25] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-[#1E4570] text-xs uppercase tracking-wider">
                        WhatsApp
                      </strong>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#C81D25]">
                        {CLINIC_INFO.whatsapp}
                      </span>
                      <span className="block text-[10px] text-slate-500">Agendamento & Informações</span>
                    </div>
                  </a>

                  <div className="p-4 bg-white rounded-2xl border border-slate-200/80 flex items-start gap-3 shadow-xs">
                    <Mail className="w-5 h-5 text-[#1E4570] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#1E4570] text-xs uppercase tracking-wider mb-0.5">
                        E-mail Institucional
                      </strong>
                      <a href={`mailto:${CLINIC_INFO.email}`} className="text-xs text-[#1E4570] hover:underline break-all font-medium">
                        {CLINIC_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horário */}
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 flex items-start gap-3 shadow-xs">
                  <Clock className="w-5 h-5 text-[#1E4570] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1E4570] text-xs uppercase tracking-wider mb-0.5">
                      Horário de Atendimento
                    </strong>
                    <p className="text-xs text-slate-700">
                      {CLINIC_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full ruby-button-glossy text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Solicitar Agendamento Particular</span>
              </button>
            </div>
          </div>

          {/* Interactive Map & Building Preview Column */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="p-6 bg-gradient-to-r from-[#1E4570] to-[#2B578A] text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-lg font-bold text-white">Edifício Itabuna Trade Center</h4>
                  <p className="text-xs text-slate-200 mt-0.5">Sala 401 • Bairro Banco Raso, Itabuna - BA</p>
                </div>
                <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-xs">
                  4º Andar
                </div>
              </div>
            </div>

            {/* Embedded Interactive Map iframe */}
            <div className="relative w-full h-[320px] bg-slate-100 border-y border-slate-200">
              <iframe
                title="Localização Cardo Clínica - Itabuna Trade Center"
                src="https://maps.google.com/maps?q=Edif%C3%ADcio+Itabuna+Trade+Center,+Avenida+Princesa+Isabel+395,+Itabuna+-+BA&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-105"
              />
            </div>

            {/* Map footer info */}
            <div className="p-5 bg-[#F8FAFC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <span>Atendimento a pacientes de Itabuna, Ilhéus e região sul da Bahia.</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1 flex-shrink-0"
              >
                <span>Traçar rota</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
