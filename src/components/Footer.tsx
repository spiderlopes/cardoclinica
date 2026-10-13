import React from 'react';
import { Cardo3DLogo } from './Cardo3DLogo';
import { CLINIC_INFO } from '../data/clinicalData';
import { MessageCircle, Mail, MapPin, Clock, Instagram, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      scrollToTop();
    }
  };

  return (
    <footer className="bg-[#0A1E34] text-slate-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Top Specular Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <Cardo3DLogo variant="full" />
            </button>
            
            <div className="text-xs text-slate-300 max-w-md leading-relaxed mt-3 space-y-1.5">
              <p className="font-bold text-white text-sm">Especialistas:</p>
              <p>Dra. Eulina Maria dos Santos Chaves Cardoso, CRM 20685, RQEs 14173, 14174 e 14179.</p>
              <p>Dr. João Cardoso Neto, CRM 20684, RQEs 13382, 22262 e 17371.</p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ruby-button-glossy text-white font-bold text-xs py-2.5 px-4 rounded-xl inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (73) 98138 6868</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links to Dedicated Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('sobre')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sobre a Cardo Clínica
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('especialistas')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Nossos Especialistas Titulados
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('cardiologia')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cardiologia Clínica
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('vascular')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cirurgia Vascular & Angiologia
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('exames')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Exames no Local (Doppler, MAPA, ECG)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('sinais-de-alerta')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sinais de Alerta
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('faq')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Perguntas Frequentes (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('blog')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Conteúdo para Blog & Redes
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Detailed Verbatim Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Contato e Localização
            </h4>
            
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7A85] flex-shrink-0 mt-0.5" />
                <span><strong>Endereço:</strong> {CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#FF7A85] flex-shrink-0" />
                <span><strong>WhatsApp:</strong> <a href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">{CLINIC_INFO.whatsapp}</a></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF7A85] flex-shrink-0" />
                <span><strong>E-mail:</strong> <a href={`mailto:${CLINIC_INFO.email}`} className="text-white hover:underline">{CLINIC_INFO.email}</a></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#FF7A85] flex-shrink-0" />
                <span><strong>Instagram:</strong> <a href="https://www.instagram.com/cardoclinica/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@cardoclinica</a></span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF7A85] flex-shrink-0 mt-0.5" />
                <span><strong>Horário:</strong> {CLINIC_INFO.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FF7A85] flex-shrink-0 mt-0.5" />
                <span><strong>Atendimento:</strong> {CLINIC_INFO.pricingType}, para {CLINIC_INFO.areaServed}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer CFM & Bottom bar */}
        <div className="pt-8 pb-2 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="max-w-4xl text-left text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              As informações deste site têm caráter informativo e não substituem consulta médica. Em caso de emergência, procure o serviço de saúde mais próximo. Publicidade médica em conformidade com a Resolução CFM nº 2.336/2023.
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="p-2.5 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer text-xs self-end sm:self-auto"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-semibold">Topo</span>
            </button>
          </div>

          <div className="pt-2 text-center sm:text-left text-[11px] text-slate-500 border-t border-white/5">
            © {new Date().getFullYear()} Cardo Clínica Cardiovascular. Todos os direitos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
};
