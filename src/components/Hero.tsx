import React from 'react';
import { MessageCircle, Sparkles, CheckCircle2, ShieldCheck, Clock, MapPin, Stethoscope, Waves } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicalData';
import { Cardo3DLogo } from './Cardo3DLogo';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="inicio"
      aria-labelledby="titulo-principal"
      className="relative overflow-hidden bg-gradient-to-b from-[#1E4570] via-[#1A3F67] to-[#122E4D] text-white pt-12 pb-20 lg:pt-16 lg:pb-28"
    >
      {/* 3D Background Lighting & Subtle Fluid Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* 45° Studio Top-Left Spotlight */}
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-gradient-to-br from-white/15 via-[#2B578A]/20 to-transparent rounded-full blur-3xl" />
        
        {/* Soft Ruby Ambient Light on Bottom-Right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#C81D25]/15 via-[#E63946]/5 to-transparent rounded-full blur-3xl" />
        
        {/* 3D Curved Flow Lines representing vascular/cardiac fluid dynamics */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-10" 
          viewBox="0 0 1440 900" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M-100,200 C300,50 600,450 1100,200 C1300,100 1500,300 1600,400" 
            stroke="url(#heroLineGrad1)" 
            strokeWidth="3" 
          />
          <path 
            d="M-50,600 C400,800 800,400 1200,700 C1400,800 1550,600 1650,550" 
            stroke="url(#heroLineGrad2)" 
            strokeWidth="2" 
          />
          <defs>
            <linearGradient id="heroLineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E63946" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#2B578A" />
            </linearGradient>
            <linearGradient id="heroLineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2B578A" />
              <stop offset="100%" stopColor="#E63946" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Subhead & AEO Box */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-sm text-xs font-semibold tracking-wide text-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
              <span>Itabuna & Sul da Bahia • Cardiologia e Cirurgia Vascular Integradas</span>
            </div>

            {/* H1 Principal Headline */}
            <h1 
              id="titulo-principal"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] beveled-text"
            >
              {CLINIC_INFO.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              {CLINIC_INFO.subheadline}
            </p>

            {/* Resposta Direta (AEO Block for AI and Search citations) */}
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border-l-4 border-l-[#E63946] border-y border-r border-white/15 p-5 sm:p-6 shadow-xl shadow-slate-950/20 card-specular">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B74] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sobre a Clínica</span>
              </div>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                <strong className="text-white font-semibold">
                  A Cardo Clínica Cardiovascular é uma clínica particular em Itabuna, Bahia, especializada na prevenção, diagnóstico e tratamento de doenças cardiovasculares.
                </strong>{' '}
                Reúne cardiologia, com a Dra. Eulina Maria dos Santos Chaves Cardoso, e cirurgia vascular, com o Dr. João Cardoso Neto, no mesmo endereço. Atende Itabuna e as cidades vizinhas da região sul da Bahia.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ruby-button-glossy text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 text-base shadow-xl group"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Agendar pelo WhatsApp (73) 98138 6868</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF7A85] flex-shrink-0" />
                <span>Consulta sem pressa (30 min)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF7A85] flex-shrink-0" />
                <span>Exames próprios no local</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#FF7A85] flex-shrink-0" />
                <span>Atendimento particular</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Visual Centerpiece & Doctor Cards */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* 3D Glass Emblem Container with High Contrast Pure White Card */}
            <div className="w-full max-w-[340px] sm:max-w-[360px] relative bg-white rounded-3xl p-6 sm:p-7 text-center shadow-2xl shadow-[#0A1A2E]/50 border border-white">
              <div className="py-2 flex justify-center items-center transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://i.postimg.cc/k4YRg32n/Logo-Cardo-3D-SEM-FUNDO.webp" 
                  alt="Cardo Clínica Cardiovascular - Logo 3D" 
                  className="w-48 sm:w-52 max-w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(30,69,112,0.18)]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Integrated specialties display */}
              <div className="mt-3 pt-4 border-t border-slate-100 space-y-2">
                <div className="bg-slate-50 hover:bg-slate-100 transition-colors p-3 rounded-2xl border border-slate-200/70 text-left flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center flex-shrink-0 text-[#C81D25]">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#C81D25]">Cardiologia</div>
                    <div className="text-xs font-bold text-slate-900">Dra. Eulina Maria Cardoso</div>
                    <div className="text-[10px] text-slate-600">CRM 20685 • RQEs 14173, 14174, 14179</div>
                  </div>
                </div>

                <div className="bg-slate-50 hover:bg-slate-100 transition-colors p-3 rounded-2xl border border-slate-200/70 text-left flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 text-[#1E4570]">
                    <Waves className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#1E4570]">Cirurgia Vascular</div>
                    <div className="text-xs font-bold text-slate-900">Dr. João Cardoso Neto</div>
                    <div className="text-[10px] text-slate-600">CRM 20684 • RQEs 13382, 22262, 17371</div>
                  </div>
                </div>
              </div>

              {/* Address micro-tag */}
              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-[#E63946]" />
                <span>Itabuna Trade Center, Sala 401 - Banco Raso</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
