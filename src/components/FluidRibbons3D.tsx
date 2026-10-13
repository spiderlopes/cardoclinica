import React from 'react';

interface FluidRibbons3DProps {
  className?: string;
  variant?: 'hero' | 'card' | 'ambient';
}

export const FluidRibbons3D: React.FC<FluidRibbons3DProps> = ({ className = '', variant = 'ambient' }) => {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
        {/* 3D Translucent Ruby Ribbon Flow */}
        <svg 
          className="absolute -right-20 -top-20 w-[600px] h-[600px] opacity-35 transform rotate-12 filter blur-[1px]"
          viewBox="0 0 500 500" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroRubyRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E63946" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#C81D25" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#800D12" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="heroSpecularHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M 50 150 C 150 50, 300 250, 450 150 C 500 250, 350 450, 200 400 C 80 350, 0 250, 50 150 Z" 
            fill="url(#heroRubyRibbon)" 
          />
          <path 
            d="M 60 160 C 160 60, 290 240, 440 160" 
            stroke="url(#heroSpecularHighlight)" 
            strokeWidth="3" 
            strokeLinecap="round" 
          />
        </svg>

        {/* 3D Metallic Petroleum Blue Ribbon Flow */}
        <svg 
          className="absolute -left-24 -bottom-20 w-[550px] h-[550px] opacity-40 transform -rotate-12 filter blur-[0.5px]" 
          viewBox="0 0 500 500" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroBlueRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2B578A" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#1E4570" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0F2844" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="blueSpecularHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M 80 100 C 250 80, 400 300, 320 450 C 200 480, 80 350, 50 250 C 20 150, 50 100, 80 100 Z" 
            fill="url(#heroBlueRibbon)" 
          />
          <path 
            d="M 90 110 C 240 90, 390 290, 310 440" 
            stroke="url(#blueSpecularHighlight)" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden opacity-30 ${className}`} aria-hidden="true">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 800 600" 
        fill="none" 
        preserveAspectRatio="xMidYMid slice" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ambientRuby" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E63946" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C81D25" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="ambientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2B578A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1E4570" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path 
          d="M -100 200 C 150 100, 400 500, 700 300 C 900 200, 850 600, 600 550 C 350 500, 50 600, -100 200 Z" 
          fill="url(#ambientBlue)" 
        />
        <path 
          d="M 200 -50 C 450 150, 600 50, 900 200 C 850 400, 650 300, 450 350 C 250 400, 100 200, 200 -50 Z" 
          fill="url(#ambientRuby)" 
        />
      </svg>
    </div>
  );
};
