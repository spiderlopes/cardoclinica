import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { FluidRibbons3D } from './FluidRibbons3D';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  onNavigate: (page: string) => void;
  icon?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  onNavigate,
  icon
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#1E4570] via-[#1A3F67] to-[#122E4D] text-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-white/10">
      
      {/* 3D Fluid Translucent Ribbons */}
      <FluidRibbons3D variant="hero" />

      {/* 45° Studio Top-Left Directional Lighting Flare */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-white/15 via-[#2B578A]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#C81D25]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300 mb-5">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#FF7A85] font-semibold">{badge}</span>
        </nav>

        {/* Header content */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-slate-100 mb-3 shadow-md">
            {icon && <span className="text-[#FF7A85]">{icon}</span>}
            <span>{badge}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight beveled-dark-text mb-4">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
