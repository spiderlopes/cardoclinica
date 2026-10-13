import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          filosofia: path.resolve(__dirname, 'filosofia.html'),
          solucoes: path.resolve(__dirname, 'solucoes.html'),
          quemCuidaDeVoce: path.resolve(__dirname, 'quem-cuida-de-voce.html'),
          exames: path.resolve(__dirname, 'exames.html'),
          contato: path.resolve(__dirname, 'contato.html'),
          faq: path.resolve(__dirname, 'faq.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          artigoHipertensao: path.resolve(__dirname, 'artigo-hipertensao-mapa.html'),
          artigoColesterol: path.resolve(__dirname, 'artigo-colesterol-alto.html'),
          artigoVarizes: path.resolve(__dirname, 'artigo-varizes-sinais-iniciais.html'),
          artigoDorCaminhar: path.resolve(__dirname, 'artigo-dor-ao-caminhar.html'),
          artigoPeDiabetico: path.resolve(__dirname, 'artigo-pe-diabetico.html'),
          artigoExames: path.resolve(__dirname, 'artigo-guia-exames-cardiovasculares.html'),
          artigoRiscoCirurgico: path.resolve(__dirname, 'artigo-risco-cirurgico.html'),
          politicaPrivacidade: path.resolve(__dirname, 'politica-de-privacidade.html'),
          termosCondicoes: path.resolve(__dirname, 'termos-e-condicoes.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
