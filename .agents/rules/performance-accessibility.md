---
description: Performance, Core Web Vitals, SEO, and Accessibility rules
trigger: always_on
---

# Performance, SEO & Accessibility Standards

1. **Performance**:
   - Zero heavyweight runtime dependencies; pure vanilla HTML5, CSS3, and modern JavaScript.
   - Self-hosted local fonts in `assets/fonts/` with `.woff2` compression and `font-display: swap`. Zero external font CDN calls (Google Fonts, Adobe, etc.) for sub-second LCP and network independence.
   - Preload primary display font and hero imagery with `fetchpriority="high"`.
   - Responsive layouts optimized for all screen sizes from 320px mobile to 4K ultra-wide monitors.

2. **Accessibility**:
   - Semantic landmarks: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`.
   - WCAG AA contrast compliance across all dark-mode text and badge elements.
   - `prefers-reduced-motion` support for smooth fallbacks.
   - Distinct `:focus-visible` styles with glowing focus rings.

3. **SEO & Metadata**:
   - Descriptive OpenGraph, Twitter Cards, Schema.org Person JSON-LD metadata.
   - Clean canonical tags and robots directives.
