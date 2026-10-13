import React, { useEffect, useRef } from 'react';

export const HeroVideoBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // ECG & Heart pulse physics
    let time = 0;

    // ECG points buffer
    const points: { x: number; y: number }[] = [];
    const sampleRate = 3;

    const render = () => {
      time += 0.035;
      ctx.clearRect(0, 0, width, height);

      // Studio 45° Ambient Light gradient
      const studioGlow = ctx.createRadialGradient(
        width * 0.3,
        height * 0.2,
        20,
        width * 0.5,
        height * 0.5,
        width * 0.7
      );
      studioGlow.addColorStop(0, 'rgba(255, 255, 255, 0.07)');
      studioGlow.addColorStop(0.5, 'rgba(30, 69, 112, 0.25)');
      studioGlow.addColorStop(1, 'rgba(15, 30, 50, 0.75)');

      ctx.fillStyle = studioGlow;
      ctx.fillRect(0, 0, width, height);

      const centerY = height * 0.52;
      const speed = 3.8;

      // Draw metallic ECG Waveform Line traversing across screen
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 3.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Gradient for metallic blue/cyan and ruby pulse on the ECG line
      const ecgGrad = ctx.createLinearGradient(0, centerY, width, centerY);
      ecgGrad.addColorStop(0, 'rgba(147, 197, 253, 0.15)');
      ecgGrad.addColorStop(0.35, 'rgba(147, 197, 253, 0.7)');
      ecgGrad.addColorStop(0.5, 'rgba(255, 122, 133, 0.95)');
      ecgGrad.addColorStop(0.65, 'rgba(147, 197, 253, 0.7)');
      ecgGrad.addColorStop(1, 'rgba(147, 197, 253, 0.15)');

      ctx.strokeStyle = ecgGrad;
      ctx.shadowColor = 'rgba(255, 122, 133, 0.6)';
      ctx.shadowBlur = 12;

      // Build ECG signal across width
      for (let x = 0; x <= width; x += sampleRate) {
        // Shift wave along time
        const phase = (x - time * 90) % (width * 0.6);
        const normalizedPhase = (phase + width * 0.6) % (width * 0.6);
        
        let yOffset = 0;
        // P-Q-R-S-T cardiac waveform pattern
        if (normalizedPhase > 180 && normalizedPhase < 210) {
          // P wave
          yOffset = -Math.sin(((normalizedPhase - 180) / 30) * Math.PI) * 12;
        } else if (normalizedPhase >= 210 && normalizedPhase < 225) {
          // Q dip
          yOffset = Math.sin(((normalizedPhase - 210) / 15) * Math.PI) * 16;
        } else if (normalizedPhase >= 225 && normalizedPhase < 245) {
          // R peak (tall spike)
          yOffset = -Math.sin(((normalizedPhase - 225) / 20) * Math.PI) * 75;
        } else if (normalizedPhase >= 245 && normalizedPhase < 265) {
          // S dip
          yOffset = Math.sin(((normalizedPhase - 245) / 20) * Math.PI) * 28;
        } else if (normalizedPhase >= 285 && normalizedPhase < 340) {
          // T wave
          yOffset = -Math.sin(((normalizedPhase - 285) / 55) * Math.PI) * 22;
        }

        const y = centerY + yOffset;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.restore();

      // Draw secondary subtle metallic reflection line (parallel echo)
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      for (let x = 0; x <= width; x += sampleRate * 2) {
        const phase = (x - time * 90) % (width * 0.6);
        const normalizedPhase = (phase + width * 0.6) % (width * 0.6);
        let yOffset = 0;
        if (normalizedPhase >= 225 && normalizedPhase < 245) {
          yOffset = -Math.sin(((normalizedPhase - 225) / 20) * Math.PI) * 65;
        }
        const y = centerY + yOffset - 4;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* HTML5 video element if user has uploaded a video file or uses video tag */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen scale-105 filter brightness-110 contrast-125"
        poster="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%231E4570'></svg>"
      >
        <source src="/hero_heart_video.mp4" type="video/mp4" />
      </video>

      {/* Dynamic 60fps ECG wave & studio lighting canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen"
      />

      {/* Central 3D Pulsating Beating Ruby Heart & Light Beam (matching video frames) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] flex items-center justify-center opacity-30 sm:opacity-40 mix-blend-screen pointer-events-none">
        
        {/* Ambient pulse glow */}
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#C81D25] to-[#FF7A85] blur-3xl animate-pulse opacity-45" />

        {/* 3D Heart Acrylic Glass SVG with Systolic/Diastolic Beat Animation */}
        <div className="relative transform animate-[heartbeat_2.4s_ease-in-out_infinite]">
          <svg
            viewBox="0 0 200 200"
            className="w-56 h-56 sm:w-72 sm:h-72 drop-shadow-[0_20px_45px_rgba(200,29,37,0.65)]"
          >
            <defs>
              {/* Outer Shell Ruby Gloss Gradient */}
              <radialGradient id="videoHeartGloss" cx="35%" cy="30%" r="75%">
                <stop offset="0%" stopColor="#FFA4AC" />
                <stop offset="35%" stopColor="#E63946" />
                <stop offset="70%" stopColor="#C81D25" />
                <stop offset="100%" stopColor="#67080E" />
              </radialGradient>

              {/* Inner Heart Core */}
              <radialGradient id="videoHeartCore" cx="40%" cy="35%" r="70%">
                <stop offset="0%" stopColor="#FF6B7A" />
                <stop offset="50%" stopColor="#C81D25" />
                <stop offset="100%" stopColor="#4A050A" />
              </radialGradient>

              {/* Specular Highlight */}
              <linearGradient id="specularGleam" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Outer Translucent Glass Layer */}
            <path
              d="M100,165 C40,120 15,90 15,55 C15,25 38,10 65,10 C82,10 94,22 100,32 C106,22 118,10 135,10 C162,10 185,25 185,55 C185,90 160,120 100,165 Z"
              fill="url(#videoHeartGloss)"
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="2.5"
            />

            {/* Inner Core Heart */}
            <path
              d="M100,145 C55,110 35,85 35,58 C35,36 50,25 70,25 C84,25 93,34 100,42 C107,34 116,25 130,25 C150,25 165,36 165,58 C165,85 145,110 100,145 Z"
              fill="url(#videoHeartCore)"
              stroke="rgba(255, 122, 133, 0.5)"
              strokeWidth="1.5"
            />

            {/* Top-Left Specular Gleam Arc */}
            <path
              d="M40,48 C40,32 52,22 68,22 C78,22 84,26 89,32"
              fill="none"
              stroke="url(#specularGleam)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Right Sub-reflection */}
            <path
              d="M160,52 C160,38 150,28 138,25"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* 45° Directional Studio Light Beam */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 30%, transparent 65%)'
        }}
      />

      {/* Vignette & Contrast Overlay so text stays 100% clear and legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#122E4D] via-transparent to-[#1E4570]/70" />
    </div>
  );
};
