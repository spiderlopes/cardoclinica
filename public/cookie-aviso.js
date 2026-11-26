/* Aviso de cookies com Aceitar e Recusar - Cardo Clínica Cardiovascular
 *
 * Este arquivo roda no <head>, ANTES do Google Analytics (que o Netlify insere no fim do head).
 * 1) Define o consentimento como NEGADO por padrão (Google Consent Mode).
 * 2) Se o visitante já escolheu antes, aplica a escolha dele.
 * 3) Na primeira visita, mostra o banner. Aceitar libera a medição; Recusar mantém bloqueada.
 *
 * A escolha fica apenas no navegador do visitante (localStorage). O banner não envia dados.
 */
(function () {
  var CHAVE = 'cardo-cookie-consent'; // 'aceito' | 'recusado'

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  if (!window.gtag) window.gtag = gtag;

  function ler() {
    try { return window.localStorage.getItem(CHAVE); } catch (e) { return null; }
  }
  function gravar(v) {
    try { window.localStorage.setItem(CHAVE, v); } catch (e) { /* sem armazenamento: vale só nesta visita */ }
  }
  function aplicar(v) {
    var estado = v === 'aceito' ? 'granted' : 'denied';
    return {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: estado
    };
  }

  // 1 e 2: consentimento inicial, antes de qualquer tag do Google
  var salvo = ler();
  gtag('consent', 'default', aplicar(salvo));

  // 3: banner
  var css =
    '#aviso-cookies{position:fixed;left:16px;right:16px;bottom:16px;margin:0 auto;max-width:820px;z-index:9999;' +
    'background:#fff;color:#2D325E;border:1px solid rgba(45,50,94,.18);border-radius:16px;' +
    'box-shadow:0 10px 40px rgba(20,24,60,.18);padding:16px 20px;display:flex;align-items:center;' +
    'gap:16px;flex-wrap:wrap;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;' +
    'font-size:14px;line-height:1.5;box-sizing:border-box}' +
    '#aviso-cookies p{margin:0;flex:1 1 300px}' +
    '#aviso-cookies a{color:#BC2E35;text-decoration:underline;font-weight:600}' +
    '#aviso-cookies .cookie-botoes{display:flex;gap:10px;flex:0 0 auto}' +
    '#aviso-cookies button{border-radius:999px;padding:10px 22px;font:600 14px Inter,system-ui,sans-serif;cursor:pointer;' +
    'border:2px solid #2D325E}' +
    '#aviso-cookies .cookie-aceitar{background:#2D325E;color:#fff}' +
    '#aviso-cookies .cookie-aceitar:hover{background:#1f2347;border-color:#1f2347}' +
    '#aviso-cookies .cookie-recusar{background:#fff;color:#2D325E}' +
    '#aviso-cookies .cookie-recusar:hover{background:#eceef7}' +
    '#aviso-cookies a:focus-visible,#aviso-cookies button:focus-visible{outline:3px solid #BC2E35;outline-offset:2px}' +
    '@media (max-width:520px){#aviso-cookies{left:12px;right:12px;bottom:12px;padding:14px 16px}' +
    '#aviso-cookies .cookie-botoes{width:100%}#aviso-cookies button{flex:1 1 0}}';

  function fechar() {
    var a = document.getElementById('aviso-cookies');
    if (a && a.parentNode) a.parentNode.removeChild(a);
  }

  function escolher(v) {
    gravar(v);
    gtag('consent', 'update', aplicar(v));
    fechar();
  }

  function mostrar() {
    if (document.getElementById('aviso-cookies')) return;

    if (!document.getElementById('aviso-cookies-css')) {
      var st = document.createElement('style');
      st.id = 'aviso-cookies-css';
      st.textContent = css;
      document.head.appendChild(st);
    }

    var aviso = document.createElement('section');
    aviso.id = 'aviso-cookies';
    aviso.setAttribute('role', 'region');
    aviso.setAttribute('aria-label', 'Aviso de cookies');
    aviso.innerHTML =
      '<p>Usamos cookies essenciais para o site funcionar e, com a sua permissão, cookies de medição de audiência ' +
      '(Google Analytics) para melhorar sua experiência. Você pode aceitar ou recusar. ' +
      'Saiba mais na nossa <a href="/politica-de-privacidade.html#cookies">Política de Privacidade</a>.</p>' +
      '<div class="cookie-botoes">' +
      '<button type="button" class="cookie-recusar">Recusar</button>' +
      '<button type="button" class="cookie-aceitar">Aceitar</button>' +
      '</div>';

    aviso.querySelector('.cookie-aceitar').addEventListener('click', function () { escolher('aceito'); });
    aviso.querySelector('.cookie-recusar').addEventListener('click', function () { escolher('recusado'); });
    document.body.appendChild(aviso);
  }

  // Permite mudar a escolha depois: qualquer elemento com data-abrir-cookies reabre o banner
  function ligarGatilhos() {
    var els = document.querySelectorAll('[data-abrir-cookies]');
    for (var i = 0; i < els.length; i++) {
      els[i].addEventListener('click', function (ev) { ev.preventDefault(); mostrar(); });
    }
  }

  function iniciar() {
    ligarGatilhos();
    if (!salvo) mostrar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
