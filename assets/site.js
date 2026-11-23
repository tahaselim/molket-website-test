/* MolKet site script: language switcher, menu, fade-ins, hero animation.
   Translations live in assets/translations.js, keyed by the English text on the page.
   If you change English text in the HTML, add/update its entry there so FR/NL follow;
   text without an entry simply stays in English. */
(function () {
  'use strict';
  var T = window.MOLKET_TRANSLATIONS || {};
  var LANGS = ['en', 'fr', 'nl'];
  var STORE = 'i18nextLng';

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function getLang() {
    var l = null;
    try { l = localStorage.getItem(STORE); } catch (e) {}
    l = (l || navigator.language || 'en').slice(0, 2).toLowerCase();
    return LANGS.indexOf(l) < 0 ? 'en' : l;
  }

  /* ---------- Language ---------- */
  var textNodes = null, enTitle = document.title;
  function collect() {
    textNodes = [];
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName) || (p.closest && p.closest('[data-no-i18n]')))
          return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = w.nextNode())) textNodes.push({ node: n, en: n.nodeValue });
  }
  function translate(en, lang) {
    if (lang === 'en') return en;
    var e = T[norm(en)];
    if (!e || !e[lang]) return en;
    var lead = en.match(/^\s*/)[0], trail = en.match(/\s*$/)[0];
    return lead + e[lang] + trail;
  }
  function applyLang(lang) {
    if (!textNodes) collect();
    textNodes.forEach(function (it) { it.node.nodeValue = translate(it.en, lang); });
    document.title = translate(enTitle, lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('select.lang-select').forEach(function (s) { s.value = lang; });
    var h = document.getElementById('hero-title');            // longer FR/NL title gets a smaller size
    if (h) {
      var big = ['text-2xl', 'sm:text-3xl', 'md:text-4xl', 'lg:text-5xl'];
      var small = ['text-xl', 'sm:text-2xl', 'md:text-3xl', 'lg:text-4xl'];
      h.classList.remove.apply(h.classList, big.concat(small));
      h.classList.add.apply(h.classList, lang === 'en' ? big : small);
    }
  }
  document.querySelectorAll('select.lang-select').forEach(function (s) {
    s.addEventListener('change', function () {
      try { localStorage.setItem(STORE, s.value); } catch (e) {}
      applyLang(s.value);
    });
  });
  applyLang(getLang());

  /* ---------- Menu: background on scroll ---------- */
  var nav = document.getElementById('site-nav');
  var navTop = ['bg-transparent'], navScrolled = ['bg-gray-900/90', 'shadow-md', 'backdrop-blur-sm'];
  var selTop = ['bg-transparent', 'border-white', 'hover:border-blue-400'];
  var selScrolled = ['bg-gray-800', 'border-gray-600', 'hover:border-blue-500', 'focus:ring-blue-500'];
  function swap(el, off, on) { el.classList.remove.apply(el.classList, off); el.classList.add.apply(el.classList, on); }
  function onScroll() {
    if (!nav) return;
    var s = window.scrollY > 50;
    swap(nav, s ? navTop : navScrolled, s ? navScrolled : navTop);
    nav.querySelectorAll('select.lang-select').forEach(function (el) {
      swap(el, s ? selTop : selScrolled, s ? selScrolled : selTop);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menu: mobile toggle ---------- */
  var btn = document.getElementById('mobile-menu-button');
  var menu = document.getElementById('mobile-menu');
  var ICON_MENU = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
  var ICON_X = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
  function setMenu(open) {
    if (!btn || !menu) return;
    swap(menu, open ? ['max-h-0', 'opacity-0', 'invisible'] : ['max-h-screen', 'opacity-100'],
               open ? ['max-h-screen', 'opacity-100'] : ['max-h-0', 'opacity-0', 'invisible']);
    btn.innerHTML = open ? ICON_X : ICON_MENU;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (btn && menu) {
    btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  }

  /* ---------- Fade-in on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Arriving with #section from another page ---------- */
  if (location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      var go = function () { window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80 }); };
      window.addEventListener('load', function () { go(); setTimeout(go, 800); });
    }
  }

  /* ---------- Hero particle animation ---------- */
  var canvas = document.getElementById('hero-canvas');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var resize = function () { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize); resize();
    var colors = ['rgba(59, 130, 246, 0.7)', 'rgba(79, 70, 229, 0.7)', 'rgba(139, 92, 246, 0.7)'];
    var ps = [];
    for (var i = 0; i < Math.min(100, Math.floor(window.innerWidth / 10)); i++) {
      ps.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 3 + 1,
                vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
                c: colors[Math.floor(Math.random() * colors.length)] });
    }
    (function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ps.forEach(function (p) {
        p.x += p.vx; p.y += p.vy;
        if (p.x > canvas.width || p.x < 0) p.vx = -p.vx;
        if (p.y > canvas.height || p.y < 0) p.vy = -p.vy;
        ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      });
      var max = Math.min(100, canvas.width / 8);
      for (var a = 0; a < ps.length; a++) for (var b = a; b < ps.length; b++) {
        var dx = ps[a].x - ps[b].x, dy = ps[a].y - ps[b].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < max) {
          ctx.strokeStyle = 'rgba(79, 70, 229, ' + (1 - d / max) + ')'; ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(ps[a].x, ps[a].y); ctx.lineTo(ps[b].x, ps[b].y); ctx.stroke();
        }
      }
      requestAnimationFrame(frame);
    })();
  }
})();
