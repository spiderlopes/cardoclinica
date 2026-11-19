import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { FluidRibbons3D } from '../components/FluidRibbons3D';
import { BLOG_ARTICLES } from '../data/clinicalData';
import { BookOpen, Clock, Tag, ArrowRight, X, HeartPulse, Waves, Share2, MessageCircle } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  const selectedArticle = BLOG_ARTICLES.find(a => a.id === selectedArticleId);

  return (
    <div className="animate-fadeIn fluid-ribbons-bg">
      <PageHeader
        badge="Conteúdo & Educação"
        title="Artigos e Orientações Médicas para Pacientes"
        description="Textos educativos com embasamento científico e linguagem clara sobre hipertensão, varizes, ecocardiograma, cuidados com o coração e circulação."
        onNavigate={onNavigate}
        icon={<BookOpen className="w-3.5 h-3.5" />}
      />

      <section className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_ARTICLES.map((article) => {
              const isCardio = article.category.toLowerCase().includes('cardio') || article.category.toLowerCase().includes('pressão') || article.category.toLowerCase().includes('eco');

              return (
                <article
                  key={article.id}
                  id={`article-${article.id}`}
                  className="rounded-3xl p-7 flex flex-col justify-between transition-all liquid-glass-card liquid-glass-card-hover group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className={`font-bold uppercase tracking-wider px-3 py-1 rounded-full text-[10px] ${
                        isCardio ? 'bg-red-50/90 text-[#C81D25] border border-red-200/60' : 'bg-blue-50/90 text-[#1E4570] border border-blue-200/60'
                      }`}>
                        {article.category}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-[#1E4570] group-hover:text-[#C81D25] transition-colors leading-snug beveled-text">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticleId(article.id)}
                      className="text-xs font-bold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Ler artigo completo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-[#0F2844]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="liquid-glass-card rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative my-8">
            
            <button
              onClick={() => setSelectedArticleId(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100/80 hover:bg-slate-200 text-slate-600 cursor-pointer"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C81D25] block mb-2">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1E4570] leading-tight beveled-text">
                  {selectedArticle.title}
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-[#F0F4F8]/90 border border-slate-200 text-xs sm:text-sm text-[#1E4570] font-medium leading-relaxed">
                <strong>Resumo Clínico:</strong> {selectedArticle.summary}
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-4">
                <p>{selectedArticle.fullOverview}</p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedArticleId(null)}
                  className="text-xs font-bold text-slate-500 hover:underline cursor-pointer"
                >
                  Voltar para a lista de artigos
                </button>

                <button
                  onClick={() => {
                    setSelectedArticleId(null);
                    onOpenBooking();
                  }}
                  className="w-full sm:w-auto ruby-button-glossy text-white font-bold text-xs py-3 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Consulta com Especialista</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
