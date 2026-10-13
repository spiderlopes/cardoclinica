import React, { useState } from 'react';
import { EXAMS_LIST } from '../data/clinicalData';
import { Activity, Waves, HeartPulse, Clock, Stethoscope, Search, Calendar, CheckCircle2 } from 'lucide-react';

interface ExamsCatalogProps {
  onOpenBooking: () => void;
}

export const ExamsCatalog: React.FC<ExamsCatalogProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'todos' | 'cardiologia' | 'vascular'>('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExams = EXAMS_LIST.filter(exam => {
    const matchesFilter = filter === 'todos' || exam.category === filter;
    const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          exam.purpose.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section 
      id="exames"
      aria-labelledby="titulo-exames"
      className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4570]/10 text-[#1E4570] text-xs font-bold uppercase tracking-wider mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Estrutura Própria de Diagnóstico</span>
            </div>
            <h2 
              id="titulo-exames"
              className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight leading-tight"
            >
              Exames Realizados no Próprio Local
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Investigação completa sem deslocamentos para outras clínicas em Itabuna e região sul da Bahia
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#F0F4F8] rounded-2xl border border-slate-200 flex-shrink-0">
            <button
              onClick={() => setFilter('todos')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'todos'
                  ? 'bg-[#1E4570] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos ({EXAMS_LIST.length})
            </button>
            <button
              onClick={() => setFilter('cardiologia')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'cardiologia'
                  ? 'bg-[#C81D25] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cardiologia (4)
            </button>
            <button
              onClick={() => setFilter('vascular')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'vascular'
                  ? 'bg-[#2B578A] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cirurgia Vascular (5)
            </button>
          </div>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => {
            const isCardio = exam.category === 'cardiologia';
            return (
              <div 
                key={exam.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md shadow-[#1E4570]/5 p-6 flex flex-col justify-between hover:border-[#1E4570]/50 transition-all hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      isCardio 
                        ? 'bg-red-50 text-[#C81D25] border border-red-100' 
                        : 'bg-blue-50 text-[#1E4570] border border-blue-100'
                    }`}>
                      {isCardio ? 'Cardiologia' : 'Cirurgia Vascular'}
                    </span>
                    
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isCardio ? 'bg-red-100 text-[#C81D25]' : 'bg-blue-100 text-[#1E4570]'
                    }`}>
                      {isCardio ? <HeartPulse className="w-4 h-4" /> : <Waves className="w-4 h-4" />}
                    </div>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1E4570] mb-3 group-hover:text-[#C81D25] transition-colors">
                    {exam.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    {exam.description}
                  </p>

                  <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-100 text-xs text-slate-600">
                    <strong className="text-[#1E4570] block mb-0.5">Indicação principal:</strong>
                    {exam.purpose}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Exame próprio no local
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-bold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Agendar</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#F0F4F8] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading text-lg font-bold text-[#1E4570]">
              Precisa de exame cardiológico ou vascular em Itabuna?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Realização no Edifício Itabuna Trade Center com laudos emitidos pelos próprios especialistas titulados.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="ruby-button-glossy text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl flex-shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Consultar Disponibilidade</span>
          </button>
        </div>

      </div>
    </section>
  );
};
