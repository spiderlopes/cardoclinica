import React from 'react';
import { Cardo3DLogo } from '../components/Cardo3DLogo';
import { FluidRibbons3D } from '../components/FluidRibbons3D';
import { HeroVideoBackground } from '../components/HeroVideoBackground';
import { CLINIC_INFO, ABOUT_DATA, SPECIALISTS, EXAMS_LIST, WARNING_SIGNS, FAQ_LIST, BLOG_ARTICLES } from '../data/clinicalData';
import { 
  HeartPulse, 
  Waves, 
  ShieldCheck, 
  Clock, 
  Activity, 
  Award, 
  ArrowRight, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Building2, 
  HelpCircle, 
  BookOpen, 
  AlertTriangle,
  ChevronRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onOpenBookingWithSpecialty: (specialty: 'cardiologia' | 'vascular') => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenBookingWithSpecialty
}) => {
  return (
    <div className="animate-fadeIn fluid-ribbons-bg">
      
      {/* =========================================================================
          1. HERO SECTION (Apple Scene: Central Idea, Symmetrical, Studio 45° Lighting)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1E4570] via-[#1A3F67] to-[#122E4D] text-white pt-16 pb-28 sm:pt-24 sm:pb-36 lg:pt-28 lg:pb-40 border-b border-white/10">
        
        {/* Dynamic Video & 3D Pulsating Heart Background */}
        <HeroVideoBackground />

        {/* 3D Translucent Ribbons */}
        <FluidRibbons3D variant="hero" />

        {/* 45° Studio Top-Left Directional Lighting Flare */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-[#C81D25]/25 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Symmetrical Headline & Exploration */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10 text-center lg:text-left">
              
              {/* Main Headline with 3D Bevel & Emboss */}
              <div className="space-y-4">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] beveled-dark-text text-white">
                  {CLINIC_INFO.slogan}
                </h1>
                <p className="text-base sm:text-lg text-slate-200/95 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {CLINIC_INFO.subheadline}
                </p>
              </div>

              {/* Navigation Action Buttons - Symmetrical & Clean 3D Liquid Glass */}
              <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onNavigate('sobre')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl liquid-glass-dark hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] transition-transform"
                >
                  <span>Conhecer a Clínica & Estrutura</span>
                  <ArrowRight className="w-4 h-4 text-[#FF7A85]" />
                </button>

                <button
                  onClick={() => onNavigate('especialistas')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md text-slate-100 hover:text-white font-semibold text-xs sm:text-sm border border-white/20 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
                >
                  <Award className="w-4 h-4 text-[#93C5FD]" />
                  <span>Corpo Clínico Titulado</span>
                </button>
              </div>

              {/* 3D Liquid Glass Badges strip - Symmetrical 4-grid */}
              <div className="pt-1 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
                <div className="p-4 liquid-glass-dark rounded-2xl text-center sm:text-left transition-transform hover:scale-[1.02]">
                  <div className="text-xs text-[#FF7A85] font-extrabold">30 min</div>
                  <div className="text-[11px] text-slate-300">Consulta sem pressa</div>
                </div>
                <div className="p-4 liquid-glass-dark rounded-2xl text-center sm:text-left transition-transform hover:scale-[1.02]">
                  <div className="text-xs text-[#93C5FD] font-extrabold">Exames Próprios</div>
                  <div className="text-[11px] text-slate-300">No próprio local</div>
                </div>
                <div className="p-4 liquid-glass-dark rounded-2xl text-center sm:text-left transition-transform hover:scale-[1.02]">
                  <div className="text-xs text-[#FF7A85] font-extrabold">SBC & SBACV</div>
                  <div className="text-[11px] text-slate-300">Médicos titulados</div>
                </div>
                <div className="p-4 liquid-glass-dark rounded-2xl text-center sm:text-left transition-transform hover:scale-[1.02]">
                  <div className="text-xs text-[#93C5FD] font-extrabold">Particular</div>
                  <div className="text-[11px] text-slate-300">Atenção exclusiva</div>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Emblem Showcase - 3D Liquid Glass Pedestal */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] sm:max-w-[300px] p-6 rounded-3xl liquid-glass-emblem text-center transition-all duration-300">
                
                {/* 3D Logo Centerpiece with maximum contrast and crispness */}
                <div className="py-1 px-1 flex justify-center items-center transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://i.postimg.cc/k4YRg32n/Logo-Cardo-3D-SEM-FUNDO.webp" 
                    alt="Cardo Clínica Cardiovascular - Logo 3D" 
                    className="w-36 sm:w-40 max-w-full h-auto object-contain drop-shadow-[0_12px_20px_rgba(30,69,112,0.2)]"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </div>

                <div className="mt-3 pt-3.5 border-t border-slate-200/80 space-y-2 text-left">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">Dra. Eulina Maria</span>
                    <span className="text-[#C81D25] font-mono font-bold bg-red-50/90 border border-red-200/60 px-2 py-0.5 rounded-md text-[10.5px]">CRM 20685</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">Dr. João Cardoso Neto</span>
                    <span className="text-[#1E4570] font-mono font-bold bg-blue-50/90 border border-blue-200/60 px-2 py-0.5 rounded-md text-[10.5px]">CRM 20684</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          2. SOBRE TEASER (Apple Scene: Focused Idea, Generous Breathing Room)
          ========================================================================= */}
      <section className="py-24 sm:py-32 lg:py-36 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-[#1E4570] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Sobre a Cardo Clínica</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#1E4570] tracking-tight leading-tight beveled-text">
                Cardiologia e cirurgia vascular juntas, porque o paciente não precisa escolher entre as duas
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Coração e circulação não funcionam separados. Uma alteração na pressão ou no colesterol afeta as artérias do corpo inteiro, assim como um problema nas veias das pernas reflete a saúde do sistema cardiovascular.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-6 rounded-3xl liquid-glass-card liquid-glass-card-hover">
                  <div className="w-9 h-9 rounded-2xl icon-pod-blue flex items-center justify-center font-bold mb-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  <strong className="text-sm font-bold text-[#1E4570] block mb-1">Escuta Ativa & 30 min</strong>
                  <p className="text-xs text-slate-600 leading-relaxed">Tempo dedicado para compreender histórico familiar e hábitos.</p>
                </div>

                <div className="p-6 rounded-3xl liquid-glass-card liquid-glass-card-hover">
                  <div className="w-9 h-9 rounded-2xl icon-pod-ruby flex items-center justify-center font-bold mb-3">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <strong className="text-sm font-bold text-[#1E4570] block mb-1">Exames no Local</strong>
                  <p className="text-xs text-slate-600 leading-relaxed">Ecocardiograma, ECG, MAPA, Holter e Doppler no mesmo endereço.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('sobre')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1E4570] hover:text-[#C81D25] transition-colors cursor-pointer group"
                >
                  <span>Conhecer nossa história e estrutura completa</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Card: Clean informative overview of the patient journey */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1E4570] via-[#1A3F67] to-[#122E4D] text-white p-8 sm:p-10 rounded-3xl shadow-2xl liquid-glass-dark space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A85] block mb-1">
                  Fluxo de Cuidado Integrado
                </span>
                <h3 className="font-heading text-xl font-bold text-white beveled-dark-text">
                  Como funciona o atendimento
                </h3>
              </div>

              <div className="space-y-4">
                {ABOUT_DATA.flowSteps.map((stepItem) => (
                  <div key={stepItem.step} className="flex items-start gap-3.5">
                    <span className="w-8 h-8 rounded-xl bg-white/15 text-[#FF7A85] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm border border-white/20">
                      {stepItem.step}
                    </span>
                    <div>
                      <strong className="text-xs font-bold text-white block">{stepItem.title}</strong>
                      <span className="text-[11px] text-slate-300 leading-tight block">{stepItem.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs text-slate-300">Estrutura no Edifício Trade Center</span>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="text-xs font-bold text-[#FF7A85] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Ver detalhes do fluxo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. ESPECIALISTAS TEASER (Apple Scene: Aggressive Hierarchy, Calmer Tone)
          ========================================================================= */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-[#1E4570] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Corpo Clínico</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight beveled-text">
                Quem Cuida de Você
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 text-justify leading-relaxed pt-1">
                Antes de falar de títulos, vale falar do essencial: aqui você é recebido por médicos que escolheram a escuta como método. Por trás de cada consulta existe formação médica sólida, residência formal e títulos de especialista registrados no CREMEB. E tudo isso é aplicado da forma que mais importa para você, com acolhimento, atenção individualizada e o tempo que cada caso pede, na Cardo Clínica Cardiovascular.
              </p>
            </div>

            <button
              onClick={() => onNavigate('especialistas')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E4570] hover:text-[#C81D25] transition-colors cursor-pointer shrink-0"
            >
              <span>Ver currículo completo dos médicos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {SPECIALISTS.map((specialist) => {
              const isCardio = specialist.id === 'dra-eulina';

              return (
                <div 
                  key={specialist.id}
                  className="rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all liquid-glass-card liquid-glass-card-hover"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-tight sm:tracking-wider px-3.5 py-1 rounded-full whitespace-nowrap shrink-0 ${
                        isCardio ? 'bg-red-50/90 text-[#C81D25] border border-red-200/60' : 'bg-blue-50/90 text-[#1E4570] border border-blue-200/60'
                      }`}>
                        {specialist.role}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold font-mono text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-lg border border-slate-200/60 whitespace-nowrap shrink-0">
                        {specialist.crm}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E4570] mb-1.5">
                      {specialist.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-5">
                      {specialist.rqes.map(r => `${r.label} ${r.number}`).join(' • ')}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                      {specialist.treats}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-200/70 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('especialistas')}
                      className="text-xs font-bold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Ver formação completa</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenBookingWithSpecialty(isCardio ? 'cardiologia' : 'vascular')}
                      className="text-xs font-bold text-slate-700 hover:text-[#1E4570] py-2 px-4 rounded-xl bg-white/90 hover:bg-slate-100 border border-slate-200/80 shadow-sm transition-all cursor-pointer"
                    >
                      Solicitar horário
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          4. CARDIOLOGIA & VASCULAR TEASER (Apple Scene: Clean 3-Column Visual Rationale)
          ========================================================================= */}
      <section className="py-24 sm:py-32 lg:py-36 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-[#1E4570] text-xs font-bold uppercase tracking-wider">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Condições Clínicas</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight beveled-text">
              Cardiologia e Cirurgia Vascular em Itabuna
            </h2>
            <p className="text-sm sm:text-base text-slate-600 pt-1">
              Respostas diretas e esclarecimentos para as principais queixas dos pacientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="p-7 sm:p-8 rounded-3xl flex flex-col justify-between liquid-glass-card liquid-glass-card-hover">
              <div>
                <div className="w-10 h-10 rounded-2xl icon-pod-ruby flex items-center justify-center mb-4">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase text-[#C81D25] block mb-1">Cardiologia</span>
                <h3 className="font-heading text-lg font-bold text-[#1E4570] mb-2">Pressão Alta & Colesterol</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Avaliação detalhada com MAPA e ECG no local para controle silencioso e seguro da pressão arterial.
                </p>
              </div>
              <button
                onClick={() => onNavigate('cardiologia')}
                className="mt-6 text-xs font-bold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1 cursor-pointer"
              >
                <span>Saber mais</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl flex flex-col justify-between liquid-glass-card liquid-glass-card-hover">
              <div>
                <div className="w-10 h-10 rounded-2xl icon-pod-blue flex items-center justify-center mb-4">
                  <Waves className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase text-[#1E4570] block mb-1">Cirurgia Vascular</span>
                <h3 className="font-heading text-lg font-bold text-[#1E4570] mb-2">Varizes com Endolaser & Espuma</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tratamento moderno com rápida recuperação, sem necessidade de internação prolongada.
                </p>
              </div>
              <button
                onClick={() => onNavigate('vascular')}
                className="mt-6 text-xs font-bold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1 cursor-pointer"
              >
                <span>Saber mais</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl flex flex-col justify-between liquid-glass-card liquid-glass-card-hover">
              <div>
                <div className="w-10 h-10 rounded-2xl icon-pod-blue flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase text-[#1E4570] block mb-1">Cirurgia Vascular</span>
                <h3 className="font-heading text-lg font-bold text-[#1E4570] mb-2">Pé Diabético & Dor ao Caminhar</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Investigação da circulação arterial para prevenir complicações graves e feridas que demoram a cicatrizar.
                </p>
              </div>
              <button
                onClick={() => onNavigate('vascular')}
                className="mt-6 text-xs font-bold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1 cursor-pointer"
              >
                <span>Saber mais</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('cardiologia')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl blue-button-glassy text-white font-bold text-xs sm:text-sm transition-transform cursor-pointer hover:scale-[1.02]"
            >
              <HeartPulse className="w-4 h-4 text-[#FF7A85]" />
              <span>Página de Cardiologia Clínica</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('vascular')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#1E4570] border border-slate-300 font-bold text-xs sm:text-sm transition-transform cursor-pointer shadow-md hover:scale-[1.02]"
            >
              <Waves className="w-4 h-4 text-[#1E4570]" />
              <span>Página de Cirurgia Vascular & Angiologia</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          5. EXAMES NO LOCAL TEASER (Apple Scene: Subtle Tone Shift, Clear Units)
          ========================================================================= */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#F0F4F8] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-[#1E4570] text-xs font-bold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5" />
                <span>Exames Próprios</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight beveled-text">
                Estrutura de Exames no Local
              </h2>
            </div>

            <button
              onClick={() => onNavigate('exames')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E4570] hover:text-[#C81D25] transition-colors cursor-pointer"
            >
              <span>Ver catálogo completo com 9 exames</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {EXAMS_LIST.slice(0, 4).map((exam) => (
              <div 
                key={exam.id}
                className="rounded-3xl p-7 flex flex-col justify-between transition-all liquid-glass-card liquid-glass-card-hover"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {exam.category === 'cardiologia' ? 'Cardiológico' : 'Vascular'}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#1E4570] mb-2">
                    {exam.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {exam.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">No local</span>
                  <button
                    onClick={() => onNavigate('exames')}
                    className="text-xs font-bold text-[#1E4570] hover:text-[#C81D25] cursor-pointer"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 sm:p-8 rounded-3xl liquid-glass-card flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Eco Color Doppler:</strong> Membros inferiores, superiores, carótidas, aorta abdominal e fístula arteriovenosa.
            </div>
            <button
              onClick={() => onNavigate('exames')}
              className="px-6 py-3 rounded-xl blue-button-glassy text-white text-xs font-bold transition-transform cursor-pointer whitespace-nowrap shrink-0 hover:scale-[1.02]"
            >
              Consultar Todos os Exames
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          6. SINAIS DE ALERTA TEASER (Apple Scene: Pure Visual Weight Contrast)
          ========================================================================= */}
      <section className="py-24 sm:py-32 lg:py-36 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                <span>Prevenção & Atenção</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight leading-tight beveled-text">
                {WARNING_SIGNS.title}
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                {WARNING_SIGNS.intro}
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2 text-[#1E4570] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C81D25] shrink-0" />
                  <span>Sinais da circulação: inchaço assimétrico, dor ao caminhar, feridas.</span>
                </div>
                <div className="flex items-center gap-2 text-[#1E4570] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C81D25] shrink-0" />
                  <span>Sinais do coração: pressão alta silenciosa, palpitações, dor no peito.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('sinais-de-alerta')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E4570] hover:text-[#C81D25] transition-colors cursor-pointer group"
                >
                  <span>Explorar Guia Completo de Sinais de Alerta</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 bg-gradient-to-br from-[#16365C] via-[#1E4570] to-[#16365C] text-white p-8 sm:p-12 rounded-3xl shadow-2xl liquid-glass-dark space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A85]">
                Conclusão Preventiva
              </span>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                {WARNING_SIGNS.conclusion}
              </p>
              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                <span>Não espere o sintoma se intensificar.</span>
                <span className="font-semibold text-white">Atendimento particular em Itabuna</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          7. FAQ TEASER (Apple Scene: Clean Focused FAQ List)
          ========================================================================= */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-[#1E4570] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight beveled-text">
              Perguntas Frequentes dos Pacientes
            </h2>
          </div>

          <div className="space-y-4 mb-12">
            {FAQ_LIST.slice(0, 4).map((faq, idx) => (
              <div 
                key={idx}
                onClick={() => onNavigate('faq')}
                className="p-5 sm:p-6 rounded-2xl flex items-center justify-between gap-4 cursor-pointer transition-all liquid-glass-card liquid-glass-card-hover group"
              >
                <span className="font-heading font-bold text-sm sm:text-base text-[#1E4570] group-hover:text-[#C81D25] transition-colors">
                  {faq.question}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#C81D25] flex-shrink-0" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E4570] hover:text-[#C81D25] transition-colors cursor-pointer"
            >
              <span>Ver todas as 12 perguntas frequentes com respostas completas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          8. BLOG TEASER (Apple Scene: Editorial Rhythm)
          ========================================================================= */}
      <section className="py-24 sm:py-32 lg:py-36 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <FluidRibbons3D />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-[#1E4570] text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Educação em Saúde</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E4570] tracking-tight beveled-text">
                Conteúdo Original para Pacientes
              </h2>
            </div>

            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E4570] hover:text-[#C81D25] transition-colors cursor-pointer"
            >
              <span>Acessar todos os 7 artigos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {BLOG_ARTICLES.slice(0, 3).map((art) => (
              <article 
                key={art.id}
                className="rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all liquid-glass-card liquid-glass-card-hover group"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E4570] block mb-2">
                    {art.category} • {art.readTime}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#1E4570] mb-2.5 group-hover:text-[#C81D25] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70">
                  <button
                    onClick={() => onNavigate('blog')}
                    className="text-xs font-bold text-[#1E4570] hover:text-[#C81D25] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ler artigo completo</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          9. CONTATO & LOCALIZAÇÃO TEASER (Apple Scene: Dignified Direct CTA)
          ========================================================================= */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl p-8 sm:p-12 lg:p-16 liquid-glass-card flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-[#1E4570] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Edifício Itabuna Trade Center</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E4570] beveled-text">
                Venha cuidar do seu coração e da sua circulação em Itabuna
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {CLINIC_INFO.address} • {CLINIC_INFO.hours}.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto ruby-button-glossy text-white font-bold text-xs sm:text-sm py-4 px-8 rounded-2xl flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar no WhatsApp</span>
              </button>

              <button
                onClick={() => onNavigate('contato')}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/90 hover:bg-white text-[#1E4570] border border-slate-200/80 text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer"
              >
                Ver Mapa & Detalhes
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
