import React from 'react';

interface CardoLogoProps {
  variant?: 'full' | 'compact' | 'symbol-only' | 'hero-3d';
  size?: number;
  className?: string;
  lightMode?: boolean;
}

export const Cardo3DLogo: React.FC<CardoLogoProps> = ({
  variant = 'full',
  className = '',
  lightMode = false
}) => {
  if (variant === 'symbol-only') {
    return null;
  }

  if (variant === 'hero-3d') {
    return (
      <div className={`relative inline-flex flex-col items-center justify-center p-6 ${className}`}>
        {/* Soft Ambient Radial Light Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1E4570]/30 via-[#C81D25]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight beveled-text">
                <span className="bg-gradient-to-r from-[#FFFFFF] via-[#E2E8F0] to-[#CBD5E1] bg-clip-text text-transparent">
                  CARDO
                </span>
              </span>
              <span className="text-base sm:text-lg font-bold tracking-wider text-slate-200">
                CLÍNICA
              </span>
            </div>
            
            <span className="text-xs sm:text-sm font-bold tracking-[0.24em] uppercase mt-2 text-[#FF7A85] font-heading drop-shadow-sm">
              CARDIOVASCULAR
            </span>
            <span className="text-[12px] font-medium tracking-wide text-slate-300 mt-1 opacity-90">
              Tudo que te faz viver
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col justify-center text-left select-none ${className}`}>
      <div className="flex items-baseline gap-1.5 leading-none">
        <span 
          className={`font-heading font-black tracking-tight leading-none ${
            variant === 'compact' ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
          } ${
            lightMode
              ? 'bg-gradient-to-r from-[#1E4570] via-[#2B578A] to-[#16365C] bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent beveled-text'
          }`}
        >
          CARDO
        </span>
        <span className={`text-xs sm:text-sm font-bold tracking-wider ${
          lightMode ? 'text-[#1E4570]' : 'text-white/90'
        }`}>
          CLÍNICA
        </span>
      </div>

      <span 
        className={`font-heading text-[10px] sm:text-[11px] font-extrabold tracking-[0.18em] uppercase mt-1 ${
          lightMode ? 'text-[#C81D25]' : 'text-[#FF7A85]'
        }`}
      >
        Cardiovascular
      </span>
      <span 
        className={`text-[9px] sm:text-[10px] font-medium tracking-normal mt-0.5 ${
          lightMode ? 'text-slate-500' : 'text-slate-300/85'
        }`}
      >
        Tudo que te faz viver
      </span>
    </div>
  );
};
