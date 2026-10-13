import React from 'react';
import { WARNING_SIGNS } from '../data/clinicalData';
import { AlertTriangle, HeartPulse, Waves, ArrowRight, ShieldCheck } from 'lucide-react';

interface WarningSignsSectionProps {
  onOpenBooking: () => void;
}

export const WarningSignsSection: React.FC<WarningSignsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="sinais-de-alerta"
      aria-labelledby="titulo-sinais"
      className="py-16 sm:py-24 bg-[#F0F4F8] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            <span>Prevenção & Atenção</span>
          </div>
          <h2 
            id="titulo-sinais"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight leading-tight"
          >
            {WARNING_SIGNS.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {WARNING_SIGNS.intro}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Circulação das Pernas */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg shadow-[#1E4570]/5 card-specular">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E4570] flex items-center justify-center">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1E4570]">
                Sinais relacionados à circulação das pernas
              </h3>
            </div>

            <ul className="space-y-3.5">
              {WARNING_SIGNS.vascularSigns.map((sign, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 bg-[#F8FAFC] p-3 rounded-xl border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-[#1E4570] flex-shrink-0 mt-1.5" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sinais Relacionados ao Coração */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg shadow-[#1E4570]/5 card-specular">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#C81D25] flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1E4570]">
                Sinais relacionados ao coração
              </h3>
            </div>

            <ul className="space-y-3.5">
              {WARNING_SIGNS.cardioSigns.map((sign, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 bg-[#F8FAFC] p-3 rounded-xl border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-[#C81D25] flex-shrink-0 mt-1.5" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Conclusion Callout Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1E4570] via-[#244E7E] to-[#16365C] text-white shadow-xl card-specular flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B74] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Conclusão Preventiva</span>
            </div>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
              {WARNING_SIGNS.conclusion}
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="ruby-button-glossy text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl flex-shrink-0 flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Buscar Avaliação Médica</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
