// Hero backdrop — oversized outline words on tilted bands.
// Rushes in on load, follows the speed and direction of the scroll, tilts away as the hero leaves,
// and a sweep of light runs across the words on load and whenever you come back to the top.

let WORDS = ['DESIGN', 'STRATEGY', 'BRAND', 'PRODUCT', 'GROWTH'];
let FONT = 'Archivo, sans-serif';
const SEP = '  ·  ';
const ANGLE = -0.13;

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const offscreen = (w, h) => { const c = document.createElement('canvas'); c.width = Math.max(1, w); c.height = Math.max(1, h); return c; };
const setFont = (ctx, px) => { ctx.font = `800 ${px}px ${FONT}`; try { ctx.fontStretch = 'extra-condensed'; } catch (e) {} };
const rowText = (r) => WORDS.map((_, k) => WORDS[(r * 2 + k) % WORDS.length] + SEP).join('');

// a strip holding the row text twice plus the band length, so it can scroll seamlessly
function strip(text, px, extra, style) {
  const m = offscreen(1, 1).getContext('2d'); setFont(m, px);
  const cyc = Math.ceil(m.measureText(text).width), c = offscreen(cyc * 2 + Math.ceil(extra), Math.ceil(px * 1.12));
  const z = c.getContext('2d'); setFont(z, px);
  for (let x = 0; x < c.width; x += cyc) {
    if (style.fill) { z.fillStyle = `rgba(255,255,255,${style.alpha})`; z.fillText(text, x, px * .92); }
    else { z.lineWidth = style.lw; z.strokeStyle = `rgba(255,255,255,${style.alpha})`; z.strokeText(text, x, px * .92); }
  }
  return { c, cyc };
}

export function initHeroType(canvas, { reduced = false } = {}) {
  const hero = canvas.closest('.hero') || canvas.parentElement;
  if (canvas.dataset.words) WORDS = canvas.dataset.words.split(',');
  FONT = getComputedStyle(document.documentElement).getPropertyValue('--display').trim() || FONT;
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 1.75);
  let W = 1, H = 1, D = 1, rows = [], lit = null, ready = false;

  function build() {
    W = canvas.width = Math.round(canvas.clientWidth * DPR);
    H = canvas.height = Math.round(canvas.clientHeight * DPR);
    D = Math.hypot(W, H) * 1.4;                          // band length: covers the screen while tilting and zooming
    const fs = Math.min(H * .17, W * .2);
    const old = rows;
    rows = [];
    let y = 0;
    for (let r = 0; y < D; r++) {
      const solid = r % 3 === 1;
      rows.push({
        ...strip(rowText(r), fs, D, solid ? { fill: true, alpha: .08 } : { fill: false, alpha: .17, lw: DPR }),
        lit: strip(rowText(r), fs, D, { fill: true, alpha: .8 }),
        y, dir: r % 2 ? 1 : -1, x: old[r] ? old[r].x : r * 157 * DPR,
      });
      y += fs * .95;
    }
    for (const r of rows) r.y -= y / 2;
    lit = offscreen(W, H);
    ready = true;
  }

  // ---- state
  let introAt = null, sweepAt = null, vel = 0, lastY = window.scrollY, last = performance.now(), wentAway = false, visible = true;

  function startIntro() {
    if (introAt !== null) return;
    introAt = performance.now();
    sweepAt = introAt + 750;
  }

  function bands(c, angle, scale, spread, set, intro, alpha) {
    c.save(); c.translate(W / 2, H * .5); c.rotate(angle); c.scale(scale, scale);
    rows.forEach((r, i) => {
      const src = set === 'lit' ? r.lit : r;
      // on load every row flies in from its own side, slightly staggered
      const k = intro === null ? 1 : clamp((intro - i * .055) / 1.7);
      const fly = (1 - easeOutExpo(k)) * D * .55 * r.dir;
      const off = ((r.x + fly) % r.cyc + r.cyc) % r.cyc;
      c.globalAlpha = alpha * (intro === null ? 1 : clamp((intro - i * .055) / .45));
      c.drawImage(src.c, -D / 2 - off, r.y * spread);
    });
    c.restore(); c.globalAlpha = 1;
  }

  function frame(now) {
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    const y = window.scrollY, hh = hero.offsetHeight || 1;
    // scroll velocity (CSS px / s), smoothed; it drives and can reverse the rows
    vel = lerp(vel, dt > 0 ? (y - lastY) / dt : 0, .12); lastY = y;
    const p = clamp(y / hh);
    if (p > .9) wentAway = true;
    if (wentAway && p < .2 && sweepAt === null) { wentAway = false; sweepAt = now; }  // welcome back

    if (!ready || !visible || document.hidden) return;
    const intro = introAt === null ? 0 : (now - introAt) / 1000;
    const introK = easeOut(clamp(intro / 2.1));
    if (!reduced) for (const r of rows) r.x += r.dir * (16 + clamp(vel, -2400, 2400) * .55) * DPR * dt;

    const angle = lerp(-.62, ANGLE, introK) - p * .3;
    const scale = lerp(1.35, 1, introK) * (1 + p * .3);
    const spread = 1 + p * .45;
    const fade = 1 - p * .55;

    ctx.clearRect(0, 0, W, H);
    if (introAt === null) return;
    bands(ctx, angle, scale, spread, 'out', intro < 3 ? intro : null, fade);

    // a sweep of light along the bands: words ignite as it passes
    if (sweepAt !== null) {
      const q = (now - sweepAt) / 1500;
      if (q >= 1) sweepAt = null;
      else if (q > 0) {
        const L = lit.getContext('2d');
        L.globalCompositeOperation = 'source-over'; L.clearRect(0, 0, W, H);
        bands(L, angle, scale, spread, 'lit', intro < 3 ? intro : null, 1);
        L.save(); L.globalCompositeOperation = 'destination-in';
        L.translate(W / 2, H * .5); L.rotate(angle); L.scale(scale, scale);
        const u = lerp(-D * .45, D * .45, easeOut(q)), band = D * .09;
        const g = L.createLinearGradient(u - band, 0, u + band, 0);
        g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.5, '#000'); g.addColorStop(1, 'rgba(0,0,0,0)');
        L.fillStyle = g; L.fillRect(-D / 2, -D / 2, D, D); L.restore();
        ctx.globalAlpha = Math.sin(q * Math.PI) * fade; ctx.drawImage(lit, 0, 0); ctx.globalAlpha = 1;
      }
    }

    // vignette keeps the edges and the copy calm
    const g = ctx.createRadialGradient(W / 2, H * .45, 0, W / 2, H * .45, Math.hypot(W, H) * .62);
    g.addColorStop(.45, 'rgba(5,5,5,0)'); g.addColorStop(1, 'rgba(5,5,5,.85)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }

  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
    build();
    canvas.classList.add('is-ready');
    const root = document.documentElement;
    if (reduced) { introAt = performance.now() - 1e5; sweepAt = null; frame(performance.now()); return; }
    if (root.classList.contains('is-loaded')) startIntro();
    else new MutationObserver((_, mo) => { if (root.classList.contains('is-loaded')) { mo.disconnect(); startIntro(); } })
      .observe(root, { attributes: true, attributeFilter: ['class'] });
    (function loop(t) { frame(t); requestAnimationFrame(loop); })(performance.now());
  });

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(hero);
  let rt;
  new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(() => { if (ready) { build(); if (reduced) frame(performance.now()); } }, 120); }).observe(canvas);
}
