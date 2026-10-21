// Mykola Zozul — portfolio interactions. Vanilla, no dependencies.

const root = document.documentElement;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------------------------------------------------------------- preloader */
function preloader() {
  const el = $('.preloader');
  const finish = () => {
    root.classList.add('is-loaded');
    setTimeout(() => root.classList.add('has-anchors'), 400);
  };
  if (!el || root.classList.contains('no-preload') || reduced) {
    if (el) el.classList.add('is-gone');
    requestAnimationFrame(finish);
    return;
  }
  const count = $('[data-count-loader]', el);
  const heroImg = $('.hero__figure img');
  const imgReady = new Promise((res) => {
    if (!heroImg || heroImg.complete) res();
    else { heroImg.addEventListener('load', res, { once: true }); heroImg.addEventListener('error', res, { once: true }); }
  });
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
  let assetsDone = false;
  Promise.all([imgReady, fontsReady]).then(() => { assetsDone = true; });
  setTimeout(() => { assetsDone = true; }, 4000);

  const start = performance.now();
  const MIN = 1500;
  let shown = 0;
  (function tick(now) {
    const t = clamp((now - start) / MIN);
    const target = assetsDone ? easeOut(t) * 100 : Math.min(easeOut(t) * 100, 86);
    shown = Math.max(shown, target);
    count.textContent = String(Math.round(shown)).padStart(3, '0');
    if (shown > 55) el.classList.add('is-slit');
    if (shown >= 100) {
      setTimeout(() => {
        el.classList.add('is-open');
        finish();
        try { sessionStorage.setItem('mz-seen', '1'); } catch (e) {}
        setTimeout(() => el.classList.add('is-gone'), 1300);
      }, 380);
      return;
    }
    requestAnimationFrame(tick);
  })(start);
}

/* ---------------------------------------------------------------- clock */
function clock() {
  const els = $$('[data-clock]');
  if (!els.length) return;
  const fmt = new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit' });
  const set = () => { const t = fmt.format(new Date()); els.forEach((e) => (e.textContent = t)); };
  set();
  setInterval(set, 15000);
}

/* ---------------------------------------------------------------- nav + menu */
const nav = $('[data-nav]');
function menu() {
  const burger = $('.burger');
  const panel = $('#menu');
  if (!burger || !panel) return;
  const toggle = (open) => {
    root.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    panel.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => toggle(!root.classList.contains('menu-open')));
  $$('a', panel).forEach((a) => a.addEventListener('click', () => toggle(false)));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });
}

/* ---------------------------------------------------------------- cursor + magnetic */
function cursor() {
  if (!finePointer) return;
  const c = $('.cursor');
  if (!c) return;
  let x = -100, y = -100, cx = -100, cy = -100;
  window.addEventListener('pointermove', (e) => { x = e.clientX; y = e.clientY; c.classList.add('is-on'); }, { passive: true });
  document.addEventListener('pointerleave', () => c.classList.remove('is-on'));
  (function loop() {
    cx = lerp(cx, x, 0.22); cy = lerp(cy, y, 0.22);
    c.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener('pointerover', (e) => {
    const view = e.target.closest('[data-cursor="view"]');
    const link = e.target.closest('a, button, select, input, textarea, label');
    c.classList.toggle('is-view', !!view);
    c.classList.toggle('is-link', !view && !!link);
  });
}

function magnetic() {
  if (!finePointer || reduced) return;
  $$('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * 0.22}px, ${dy * 0.3}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1), color .5s, border-color .5s';
      el.style.transform = '';
      setTimeout(() => (el.style.transition = ''), 600);
    });
  });
}

/* ---------------------------------------------------------------- reveal */
function reveal() {
  $$('[data-reveal-lines]').forEach((wrap) => {
    $$('.line-mask > span', wrap).forEach((s, i) => (s.style.transitionDelay = `${i * 0.09}s`));
  });
  const targets = $$('[data-reveal], [data-reveal-lines], .step');
  if (!('IntersectionObserver' in window) || reduced) {
    targets.forEach((t) => t.classList.add('is-in'));
    return;
  }
  // A clip-path reveal starts fully clipped, and Chrome then never reports the
  // element as intersecting — so those are observed through their parent.
  const proxy = new Map();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = proxy.get(en.target) || en.target;
      el.classList.add('is-in');
      io.unobserve(en.target);
      $$('[data-count]', el).forEach(countUp);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  targets.forEach((t) => {
    if (t.dataset.reveal === 'clip') {
      // an unclipped, invisible sentinel sitting exactly over the element
      const parent = t.parentElement;
      if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';
      const host = document.createElement('span');
      host.setAttribute('aria-hidden', 'true');
      const place = () => {
        host.style.cssText = `position:absolute;pointer-events:none;visibility:hidden;left:${t.offsetLeft}px;top:${t.offsetTop}px;width:${t.offsetWidth}px;height:${t.offsetHeight}px`;
      };
      place();
      parent.appendChild(host);
      proxy.set(host, t);
      io.observe(host);
      new ResizeObserver(place).observe(parent);
    } else io.observe(t);
  });
}

function countUp(el) {
  const to = parseFloat(el.dataset.count);
  if (reduced) { el.textContent = to; return; }
  const start = performance.now(), dur = 1600;
  (function tick(now) {
    const t = clamp((now - start) / dur);
    el.textContent = Math.round(to * easeOut(t));
    if (t < 1) requestAnimationFrame(tick);
  })(start);
}

/* ---------------------------------------------------------------- manifesto words */
function splitWords(el) {
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(part));
          else { const s = document.createElement('span'); s.className = 'w'; s.textContent = part; frag.appendChild(s); }
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  walk(el);
  return $$('.w', el);
}

/* ---------------------------------------------------------------- map (illustrative network) */
const CITIES = [
  [52.23, 21.01], [50.06, 19.94], [51.11, 17.03], [54.35, 18.65], [52.41, 16.93], [51.76, 19.46], [51.25, 22.57], [50.04, 22.0], [53.43, 14.55],
  [52.52, 13.4], [53.55, 9.99], [48.14, 11.58], [50.11, 8.68], [50.94, 6.96], [51.05, 13.74], [51.34, 12.37], [48.78, 9.18],
  [50.08, 14.44], [49.2, 16.61], [48.21, 16.37], [47.07, 15.44], [48.15, 17.11], [48.72, 21.26], [47.5, 19.04],
  [54.69, 25.28], [54.9, 23.9], [56.95, 24.11], [59.44, 24.75], [52.37, 4.9], [51.92, 4.48], [50.85, 4.35], [51.22, 4.4],
  [48.86, 2.35], [45.76, 4.84], [55.68, 12.57], [59.33, 18.07], [59.91, 10.75], [60.17, 24.94], [47.38, 8.54], [45.46, 9.19],
  [41.9, 12.5], [40.42, -3.7], [41.39, 2.17], [38.72, -9.14], [53.35, -6.26], [51.51, -0.13], [44.43, 26.1], [47.01, 28.86],
  [46.06, 14.51], [45.81, 15.98], [42.7, 23.32], [57.71, 11.97],
];
// largest US cities in the network
const US_CITIES = [
  [40.71, -74.01], [34.05, -118.24], [41.88, -87.63], [29.76, -95.37], [33.45, -112.07], [39.95, -75.17], [29.42, -98.49],
  [32.72, -117.16], [32.78, -96.8], [37.77, -122.42], [47.61, -122.33], [38.91, -77.04], [42.36, -71.06], [25.9, -80.19],
];
const HUBS = [[49.84, 24.03, 'Lviv'], [50.45, 30.52, 'Kyiv'], [49.99, 36.23, 'Kharkiv'], [46.48, 30.72, 'Odesa'], [48.46, 35.05, 'Dnipro']];
const LABELS = [[52.23, 21.01, 'PL'], [52.52, 13.4, 'DE'], [50.08, 14.44, 'CZ'], [48.21, 16.37, 'AT'], [54.69, 25.28, 'LT'], [52.37, 4.9, 'NL'], [50.85, 4.35, 'BE'], [48.86, 2.35, 'FR'], [41.9, 12.5, 'IT'], [40.42, -3.7, 'ES'], [59.33, 18.07, 'SE'], [55.68, 12.57, 'DK'], [47.5, 19.04, 'HU'], [48.15, 17.11, 'SK'], [40.71, -74.01, 'NYC'], [34.05, -118.24, 'LA'], [41.88, -87.63, 'CHI'], [29.76, -95.37, 'HOU'], [38.6, -100, 'USA']];

function buildMap() {
  const box = $('[data-map]');
  if (!box) return;
  // Panorama North America → Europe. Must match the projection in map-outline.svg.
  const W = 1600, H = 560, NS = 'http://www.w3.org/2000/svg';
  const lon0 = -128, lat1 = 68, k = 13, cosL = Math.cos(45 * Math.PI / 180);
  const P = (lat, lon) => [(lon - lon0) * cosL * k, (lat1 - lat) * k];
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  // on narrow screens keep the right side (US East Coast → Europe) in frame
  svg.setAttribute('preserveAspectRatio', 'xMaxYMid slice');
  svg.setAttribute('aria-hidden', 'true');
  let html = '<g class="map__grid">';
  for (let y = 12; y < H; y += 22) for (let x = 12; x < W; x += 22) html += `<circle cx="${x}" cy="${y}" r="1"/>`;
  html += `</g><image class="map__land" href="/assets/img/map-outline.svg" x="0" y="0" width="${W}" height="${H}" preserveAspectRatio="none"/><g class="map__arcs">`;
  const all = [...CITIES, ...US_CITIES];
  const arcs = [];
  all.forEach(([lat, lon], i) => {
    const [x, y] = P(lat, lon);
    const hub = lon < -30 ? HUBS[i % 2] : HUBS[lon < 18 ? (i % 3 === 0 ? 1 : 0) : (i % 4) + (i % 4 === 0 ? 0 : 1)] || HUBS[0];
    const [hx, hy] = P(hub[0], hub[1]);
    const mx = (x + hx) / 2, my = Math.max(8, (y + hy) / 2 - Math.hypot(hx - x, hy - y) * (lon < -30 ? 0.22 : 0.28));
    arcs.push(`<path class="map__arc${lon < -30 ? ' map__arc--far' : ''}" d="M${x.toFixed(1)} ${y.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${hx.toFixed(1)} ${hy.toFixed(1)}"/>`);
  });
  html += arcs.join('') + '</g><g>';
  all.forEach(([lat, lon]) => { const [x, y] = P(lat, lon); html += `<circle class="map__city" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6"/>`; });
  LABELS.forEach(([lat, lon, t]) => { const [x, y] = P(lat, lon); html += `<text class="map__label" x="${(x + 6).toFixed(1)}" y="${(y - 5).toFixed(1)}">${t}</text>`; });
  HUBS.forEach(([lat, lon, name], i) => {
    const [x, y] = P(lat, lon);
    html += `<circle class="map__ring" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" style="animation-delay:${i * 0.5}s"/><circle class="map__hub" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.6"/>`;
  });
  html += '</g>';
  svg.innerHTML = html;
  box.prepend(svg);

  const paths = $$('.map__arc', svg);
  paths.forEach((p) => {
    const len = p.getTotalLength();
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = reduced ? 0 : len;
  });
  if (reduced) return;
  // draw the arcs once the map's clip reveal starts (see reveal())
  const draw = () => paths.forEach((p, i) => {
    p.style.transition = `stroke-dashoffset 1.8s cubic-bezier(.22,1,.36,1) ${0.3 + i * 0.035}s`;
    p.style.strokeDashoffset = 0;
  });
  const mo = new MutationObserver(() => {
    if (!box.classList.contains('is-in')) return;
    mo.disconnect();
    draw();
  });
  mo.observe(box, { attributes: true, attributeFilter: ['class'] });
}

/* ---------------------------------------------------------------- slit mountains */
function buildMountains() {
  const svg = $('[data-mountains]');
  if (!svg) return;
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const layer = (base, amp, step, fill, phase) => {
    let d = `M0 200 L0 ${base}`;
    for (let x = 0; x <= 1600; x += step) {
      const y = base - (Math.sin(x * 0.004 + phase) * 0.5 + 0.5) * amp - (Math.sin(x * 0.013 + phase * 2) * 0.5 + 0.5) * amp * 0.45 - rnd() * amp * 0.18;
      d += ` L${x} ${y.toFixed(1)}`;
    }
    return `<path d="${d} L1600 200 Z" fill="${fill}"/>`;
  };
  svg.innerHTML = layer(150, 120, 14, '#a8a8a5', 1.2) + layer(180, 90, 10, '#7b7b79', 3.4) + layer(200, 40, 8, '#5e5e5c', 0.4);
}

/* ---------------------------------------------------------------- tilt / glow */
function tilt() {
  if (!finePointer || reduced) return;
  $$('[data-tilt]').forEach((el) => {
    const inner = $('.case__media-inner', el) || el;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      inner.style.transform = `rotateY(${px * 7}deg) rotateX(${-py * 7}deg) scale(1.02)`;
    });
    el.addEventListener('pointerleave', () => (inner.style.transform = ''));
  });
  $$('[data-glow] > *').forEach((cell) => {
    cell.addEventListener('pointermove', (e) => {
      const r = cell.getBoundingClientRect();
      cell.style.setProperty('--mx', `${e.clientX - r.left}px`);
      cell.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* ---------------------------------------------------------------- copy + form */
function copy() {
  $$('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try { await navigator.clipboard.writeText(text); }
      catch (e) {
        const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select();
        try { document.execCommand('copy'); } catch (err) {} t.remove();
      }
      const label = $('[data-copy-label]', btn) || btn;
      const old = label.textContent;
      label.textContent = btn.dataset.copyDone || 'Copied ✓'; btn.classList.add('is-done');
      setTimeout(() => { label.textContent = old; btn.classList.remove('is-done'); }, 1800);
    });
  });
}

function form() {
  const f = $('[data-form]');
  if (!f) return;
  $$('[data-plan]').forEach((b) => b.addEventListener('click', () => {
    const plan = b.dataset.plan;
    if (plan.startsWith('Full-time')) f.type.value = 'Full-time / contract role';
    if (plan === 'Retainer') f.budget.value = 'Monthly retainer';
  }));
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    ['name', 'email', 'message'].forEach((n) => {
      const el = f[n];
      const valid = el.value.trim() && (n !== 'email' || /\S+@\S+\.\S+/.test(el.value));
      el.style.borderColor = valid ? '' : 'var(--signal)';
      if (!valid) ok = false;
    });
    if (!ok) return;
    const subject = `Project inquiry — ${f.type.value} — ${f.name.value.trim()}`;
    const body = [
      `Name: ${f.name.value.trim()}`,
      `Email: ${f.email.value.trim()}`,
      f.company.value.trim() ? `Company: ${f.company.value.trim()}` : '',
      `Need: ${f.type.value}`,
      `Budget: ${f.budget.value}`,
      '',
      f.message.value.trim(),
    ].filter((l, i) => l !== '' || i === 5).join('\n');
    window.location.href = `mailto:mikolazozul@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const btn = $('button[type="submit"]', f);
    btn.firstChild.textContent = 'Opening your email… ';
  });
}

/* ---------------------------------------------------------------- scroll-driven scene */
function scrollScene() {
  const hero = $('.hero');
  const heroName = $('[data-hero-name]');
  const heroFig = $('[data-hero-figure]');
  const manifesto = $('[data-words]');
  const words = manifesto ? splitWords(manifesto) : [];
  const slit = $('[data-slit]');
  const slitWin = slit && $('.slit__window', slit);
  const slitText = slit && $('.slit__text', slit);
  const slitSub = slit && $('.slit__sub', slit);
  const walker = slit && $('[data-walker]', slit);
  const light = $('[data-nav-theme="dark"]');
  const process = $('[data-process]');
  const strips = $$('[data-strips] .strips__s img');
  const stripsBox = $('[data-strips]');
  const triImg = $('[data-tri] img');

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  if (finePointer && !reduced) {
    window.addEventListener('pointermove', (e) => {
      mouse.tx = e.clientX / window.innerWidth - 0.5;
      mouse.ty = e.clientY / window.innerHeight - 0.5;
    }, { passive: true });
  }

  let lastY = window.scrollY, navHidden = false;
  let vh = window.innerHeight;
  window.addEventListener('resize', () => (vh = window.innerHeight));

  function frame() {
    const y = window.scrollY;
    const navH = nav ? nav.offsetHeight : 0;

    // nav: hide on scroll down, show on up
    if (nav && !root.classList.contains('menu-open')) {
      nav.classList.toggle('is-scrolled', y > 40);
      if (Math.abs(y - lastY) > 6) {
        const hide = y > lastY && y > vh * 0.8;
        if (hide !== navHidden) { nav.classList.toggle('is-hidden', hide); navHidden = hide; }
        lastY = y;
      }
    }

    // hero parallax
    mouse.x = lerp(mouse.x, mouse.tx, 0.06);
    mouse.y = lerp(mouse.y, mouse.ty, 0.06);
    if (hero && y < vh * 1.2 && !reduced) {
      const p = clamp(y / vh);
      if (heroName) {
        heroName.style.transform = `translate3d(${mouse.x * -26}px, calc(-50% + ${y * 0.42 + mouse.y * -10}px), 0)`;
        heroName.style.opacity = String(1 - p * 1.1);
      }
      if (heroFig) heroFig.style.transform = `translate3d(calc(-42% + ${mouse.x * 18}px), ${y * 0.12 + mouse.y * 6}px, 0) scale(${1 + p * 0.06})`;
      hero.style.setProperty('--hp', easeInOut(p).toFixed(3));
    }

    // manifesto: words light up as you read
    if (words.length) {
      const r = manifesto.getBoundingClientRect();
      const p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.32));
      const lit = Math.floor(p * (words.length + 1));
      words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
    }

    // slit interlude
    let darkNav = false;
    if (slit) {
      const r = slit.getBoundingClientRect();
      const p = clamp(-r.top / (r.height - vh));
      // the window is fully open before the light area slides up over the end of the slit
      const e = easeInOut(clamp((p - 0.06) / 0.56));
      const vw = window.innerWidth;
      slitWin.style.setProperty('--w', `${(0.034 + 0.966 * e) * vw}px`);
      slitText.style.opacity = String(1 - clamp((p - 0.3) / 0.22));
      slitSub.style.opacity = String(1 - clamp((p - 0.2) / 0.2));
      walker.style.setProperty('--s', String(1 + e * 1.6));
    }
    if (light) {
      const r = light.getBoundingClientRect();
      if (r.top <= navH * 0.5 && r.bottom >= navH * 0.5) darkNav = true;
    }
    if (nav) nav.classList.toggle('is-dark', darkNav && !root.classList.contains('menu-open'));

    // process line
    if (process) {
      const r = process.getBoundingClientRect();
      process.style.setProperty('--p', clamp((vh * 0.75 - r.top) / (r.width * 0.35 + vh * 0.2)).toFixed(3));
    }

    // strips + triangle parallax
    if (stripsBox && !reduced) {
      const r = stripsBox.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) {
        const p = (r.top + r.height / 2 - vh / 2) / vh;
        strips.forEach((img, i) => img.style.setProperty('--ty', `${p * (i % 2 ? -1 : 1) * (20 + i * 14)}px`));
      }
    }
    if (triImg && !reduced) {
      const r = triImg.parentElement.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) triImg.style.setProperty('--py', `${((r.top + r.height / 2 - vh / 2) / vh) * -60}px`);
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---------------------------------------------------------------- hero name fit */
// Keeps both words clear of the silhouette on any aspect ratio: the portrait's alpha
// is sampled once, then the name shrinks until it no longer touches the figure at its height.
function fitHeroName() {
  const name = $('[data-hero-name]');
  const fig = $('[data-hero-figure]');
  const hero = $('.hero');
  const img = fig && $('img', fig);
  if (!name || !fig || !img) return;
  const words = $$('.hero__word', name);
  let mask = null;
  const run = () => {
    name.style.fontSize = '';
    if (window.innerWidth <= 960 || words.length < 2 || !mask) return;
    const W = document.documentElement.clientWidth;
    const figW = fig.offsetWidth, figH = fig.offsetHeight;
    const figLeft = W / 2 - 0.42 * figW, figTop = hero.offsetHeight - figH;   // matches translate(-42%), bottom: 0
    const cs = getComputedStyle(name);
    const size = parseFloat(cs.fontSize);
    const cy = parseFloat(cs.top);
    // widest extent of the figure across the rows the name covers
    let l = Infinity, r = -Infinity;
    for (let y = cy - size * 0.42; y <= cy + size * 0.42; y += 4) {
      const my = Math.floor((y - figTop) / figH * mask.h);
      if (my < 0 || my >= mask.h) continue;
      for (let mx = 0; mx < mask.w; mx++) if (mask.d[(my * mask.w + mx) * 4 + 3] > 110) { l = Math.min(l, mx); r = Math.max(r, mx); }
    }
    if (l === Infinity) return;
    const headL = figLeft + l / mask.w * figW, headR = figLeft + (r + 1) / mask.w * figW;
    const w1 = words[0].getBoundingClientRect().width, w2 = words[1].getBoundingClientRect().width;
    const pad = 18;
    const k = Math.min(1, (headL - pad - parseFloat(cs.paddingLeft)) / w1, (W - parseFloat(cs.paddingRight) - headR - pad) / w2);
    if (k < 1) name.style.fontSize = `${(size * Math.max(k, 0.45)).toFixed(1)}px`;
  };
  const sample = () => {
    const c = document.createElement('canvas'), w = 120, h = Math.round(w * img.naturalHeight / img.naturalWidth);
    c.width = w; c.height = h;
    const x = c.getContext('2d'); x.drawImage(img, 0, 0, w, h);
    try { mask = { w, h, d: x.getImageData(0, 0, w, h).data }; } catch (e) {}
    run();
  };
  if (img.complete && img.naturalWidth) sample(); else img.addEventListener('load', sample, { once: true });
  if (document.fonts) document.fonts.ready.then(run);
  window.addEventListener('resize', run);
}

/* ---------------------------------------------------------------- hero typography backdrop */
function heroType() {
  const canvas = $('.hero__type');
  if (!canvas) return;
  import('./hero-type.js').then((m) => m.initHeroType(canvas, { reduced })).catch(() => {});
}

/* ---------------------------------------------------------------- boot */
preloader();
clock();
menu();
cursor();
magnetic();
buildMap();
buildMountains();
reveal();
tilt();
copy();
form();
fitHeroName();
scrollScene();
heroType();
