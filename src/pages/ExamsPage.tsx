import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { FluidRibbons3D } from '../components/FluidRibbons3D';
import { EXAMS_LIST } from '../data/clinicalData';
import { Activity, Search, ShieldCheck, HeartPulse, Waves, ArrowRight, MessageCircle, Clock } from 'lucide-react';

interface ExamsPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const ExamsPage: React.FC<ExamsPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cardiologia' | 'vascular'>('all');

  const filteredExams = EXAMS_LIST.filter(exam => {
    const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          exam.purpose.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || exam.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-fadeIn fluid-ribbons-bg">
      <PageHeader
        badge="Exames Próprios"
        title="Catálogo de Exames Diagnósticos no Próprio Local"
        description="Ecocardiograma com Doppler, ECG, MAPA 24h, Holter e modalidades completas de Eco Color Doppler vascular realizados na sede da Cardo Clínica."
        onNavigate={onNavigate}
        icon={<Activity className="w-3.5 h-3.5" />}
      />

      <section className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Filter Bar with Frosted Glass */}
          <div className="p-4 sm:p-6 rounded-3xl liquid-glass-card flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar exame (ex: MAPA, Doppler, Holter)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/90 border border-slate-200/80 text-xs sm:text-sm focus:outline-none focus:border-[#1E4570] focus:ring-1 focus:ring-[#1E4570] shadow-inner"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'blue-button-glassy text-white shadow-md'
                    : 'bg-white/90 border border-slate-200/80 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Todos ({EXAMS_LIST.length})
              </button>

              <button
                onClick={() => setSelectedCategory('cardiologia')}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'cardiologia'
                    ? 'ruby-button-glossy text-white shadow-md'
                    : 'bg-white/90 border border-slate-200/80 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Cardiológicos (4)
              </button>

              <button
                onClick={() => setSelectedCategory('vascular')}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'vascular'
                    ? 'blue-button-glassy text-white shadow-md'
                    : 'bg-white/90 border border-slate-200/80 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Doppler Vascular (5)
              </button>
            </div>
          </div>

          {/* Exams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredExams.map((exam) => {
              const isCardio = exam.category === 'cardiologia';

              return (
                <div
                  key={exam.id}
                  id={exam.id}
                  className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all liquid-glass-card liquid-glass-card-hover group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isCardio ? 'bg-red-50/90 text-[#C81D25] border border-red-200/60' : 'bg-blue-50/90 text-[#1E4570] border border-blue-200/60'
                      }`}>
                        {isCardio ? 'Cardiologia' : 'Cirurgia Vascular'}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        No Local
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        isCardio ? 'icon-pod-ruby' : 'icon-pod-blue'
                      }`}>
                        {isCardio ? <HeartPulse className="w-5 h-5" /> : <Waves className="w-5 h-5" />}
                      </div>

                      <h3 className="font-heading text-lg font-bold text-[#1E4570] group-hover:text-[#C81D25] transition-colors leading-snug beveled-text">
                        {exam.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {exam.description}
                    </p>

                    {/* Pre-Exam Indication / Purpose */}
                    <div className="p-3.5 rounded-2xl bg-white/70 border border-slate-200/80 text-[11px] text-slate-600">
                      <strong className="text-[#1E4570] block font-semibold mb-0.5">Indicação & Finalidade:</strong>
                      <span>{exam.purpose}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Edifício Trade Center</span>
                    <button
                      onClick={onOpenBooking}
                      className="ruby-button-glossy text-white font-bold text-xs py-2 px-4 rounded-xl cursor-pointer shadow-sm flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Agendar</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Disclaimer / Direct Assistance */}
          <div className="bg-gradient-to-r from-[#1E4570] to-[#16365C] text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 liquid-glass-dark">
            <div className="space-y-1">
              <h4 className="font-heading text-lg font-bold text-white beveled-dark-text">
                Dúvidas sobre o preparo de algum exame?
              </h4>
              <p className="text-xs text-slate-200">
                Nossa equipe de recepção orienta detalhadamente todos os passos antes da sua chegada.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="ruby-button-glossy text-white font-bold text-xs py-3 px-6 rounded-2xl flex-shrink-0 cursor-pointer shadow-lg"
            >
              Falar com Atendimento
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
