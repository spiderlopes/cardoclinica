/* Aviso de cookies - Cardo Clínica Cardiovascular
 * Mostra um aviso informativo na primeira visita e lembra que o visitante já viu.
 * Não coleta nem envia nenhum dado. A escolha fica apenas no navegador do visitante.
 */
(function () {
  var CHAVE = 'cardo-cookie-aviso';

  function jaViu() {
    try { return window.localStorage.getItem(CHAVE) === 'ok'; } catch (e) { return false; }
  }
  function lembrar() {
    try { window.localStorage.setItem(CHAVE, 'ok'); } catch (e) { /* sem armazenamento: some só nesta visita */ }
  }

  function criar() {
    if (jaViu() || document.getElementById('aviso-cookies')) return;

    var css = document.createElement('style');
    css.textContent =
      '#aviso-cookies{position:fixed;left:16px;right:16px;bottom:16px;margin:0 auto;max-width:760px;z-index:9999;' +
      'background:#fff;color:#2D325E;border:1px solid rgba(45,50,94,.18);border-radius:16px;' +
      'box-shadow:0 10px 40px rgba(20,24,60,.18);padding:16px 20px;display:flex;align-items:center;' +
      'gap:16px;flex-wrap:wrap;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;' +
      'font-size:14px;line-height:1.5;box-sizing:border-box}' +
      '#aviso-cookies p{margin:0;flex:1 1 280px}' +
      '#aviso-cookies a{color:#BC2E35;text-decoration:underline;font-weight:600}' +
      '#aviso-cookies button{flex:0 0 auto;background:#2D325E;color:#fff;border:0;border-radius:999px;' +
      'padding:10px 22px;font:600 14px Inter,system-ui,sans-serif;cursor:pointer}' +
      '#aviso-cookies button:hover{background:#1f2347}' +
      '#aviso-cookies a:focus-visible,#aviso-cookies button:focus-visible{outline:3px solid #BC2E35;outline-offset:2px}' +
      '@media (max-width:520px){#aviso-cookies{left:12px;right:12px;bottom:12px;padding:14px 16px}' +
      '#aviso-cookies button{width:100%}}';
    document.head.appendChild(css);

    var aviso = document.createElement('section');
    aviso.id = 'aviso-cookies';
    aviso.setAttribute('role', 'region');
    aviso.setAttribute('aria-label', 'Aviso de cookies');
    aviso.innerHTML =
      '<p>Este site usa cookies essenciais e de medição de audiência para funcionar bem e melhorar sua experiência. ' +
      'Saiba mais na nossa <a href="/politica-de-privacidade.html#cookies">Política de Privacidade</a>.</p>' +
      '<button type="button">Entendi</button>';

    aviso.querySelector('button').addEventListener('click', function () {
      lembrar();
      if (aviso.parentNode) aviso.parentNode.removeChild(aviso);
    });

    document.body.appendChild(aviso);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', criar);
  } else {
    criar();
  }
})();
