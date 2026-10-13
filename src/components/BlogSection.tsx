import React, { useState } from 'react';
import { BLOG_ARTICLES } from '../data/clinicalData';
import { BlogArticle } from '../types';
import { BookOpen, ArrowRight, Clock, X, HeartPulse, CheckCircle2 } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <section 
      id="blog"
      aria-labelledby="titulo-blog"
      className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4570]/10 text-[#1E4570] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Educação em Saúde</span>
          </div>
          <h2 
            id="titulo-blog"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight leading-tight"
          >
            Conteúdo Original para Blog e Redes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Ideias de artigos que respondem às buscas informacionais e alimentam a autoridade do site diante do Google e dos buscadores de IA.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_ARTICLES.map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-md shadow-[#1E4570]/5 p-6 flex flex-col justify-between hover:border-[#1E4570]/40 transition-all hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-[#1E4570]">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <div className="text-xs font-extrabold text-slate-400 mb-1">
                  Artigo #{article.id}
                </div>

                <h3 className="font-heading text-lg font-bold text-[#1E4570] mb-3 group-hover:text-[#C81D25] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-bold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Ler resumo clínico</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#C81D25]">
              {selectedArticle.category}
            </span>

            <h3 className="font-heading text-xl font-bold text-[#1E4570] mt-1 mb-4 leading-snug">
              {selectedArticle.title}
            </h3>

            <div className="p-4 bg-[#F0F4F8] rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Contexto & Resposta Direta:</strong> {selectedArticle.summary}
            </div>

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
              <p>{selectedArticle.fullOverview}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-[#1E4570] text-white text-xs font-bold hover:bg-[#2B578A] transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
