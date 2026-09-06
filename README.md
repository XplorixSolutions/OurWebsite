# Xplorix Solutions — Website

A motion-first, one-continuous-canvas homepage for **Xplorix Solutions**, built as a real
React + TypeScript + Vite project (not a single HTML file), using GSAP + ScrollTrigger for
scroll choreography and Lenis for smooth scroll.

## Why this stack, not the Next.js/Sanity/Resend stack from the brief

The original creative brief called for Next.js + Sanity CMS + Resend email + a full backend.
Standing that up for real would mean provisioning external accounts (a CMS project, an email
API key, a hosting project) that only you can own. Instead, this delivers the **entire
front-end experience** — every scene, transition and interaction from the brief — as a clean,
portable Vite + React app that:

- runs anywhere with `npm install && npm run dev`
- builds to plain static files (`npm run build` → `dist/`) you can deploy to Vercel, Netlify,
  Cloudflare Pages, GitHub Pages, or any static host
- is straightforward to port into Next.js later if you want file-based routing/CMS/ISR — the
  components don't use any Vite-only APIs

## Getting started

```bash
npm install
npm run dev       # local dev server with HMR
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    Frame.tsx           fixed corner nav (logo, INDEX+, footer meta)
    Menu.tsx             full-screen index overlay with hover previews
    Preloader.tsx         BLACKOUT -> SIGNAL -> XPLORIX opening sequence
    Hero.tsx               "WE / BUILD / THE UNEXPECTED" composition + scroll portal
    Statement.tsx          "WE MAKE TECHNOLOGY FEEL INEVITABLE" scene
    Capabilities.tsx       pinned capability instrument (12 disciplines, one morphing visual)
    Projects.tsx           project campaigns (varied full-bleed layouts, not a card grid)
    BuildSystem.tsx        IDEA -> disciplines -> PRODUCT system diagram
    TechMarquee.tsx         stack list with hover use-case
    Process.tsx             DISCOVER -> EVOLVE film-strip scanner
    Studio.tsx               "The people behind the pixels"
    Testimonials.tsx        scroll-controlled single-quote proof section
    VisualBreak.tsx          visual-silence triptych
    FinalCTA.tsx             "Have something / worth building?" merge into "Let's build it."
    Contact.tsx              multi-step project configurator + accessible form fallback
    Footer.tsx               power-down footer, echoes the opening wordmark
    DigitalMaterial.tsx      the recurring abstract "digital material" motif, in pure SVG
  lib/
    useLenis.ts             Lenis <-> GSAP ScrollTrigger sync, disabled under reduced motion
    useReducedMotion.ts     prefers-reduced-motion listener
  index.css                 design tokens (Coffee Bean / Almond), fonts, base resets
  App.tsx                    composes every scene in order, tracks active scene for the frame
```

## Design system

- **Color** — two hex values only: Coffee Bean `#2E0D14` and Almond `#EFE1D5`, expanded into
  tints via CSS custom properties in `src/index.css`. No blue, purple, or neon anywhere.
- **Type** — Space Grotesk (grotesk, does the heavy lifting) + Instrument Serif (accent only,
  used for a handful of italic moments — never more than ~15% of the type on a page).
- **Motion** — GSAP `ScrollTrigger` pinned timelines drive the large structural transitions
  (hero portal, capability morph, process scanner, final CTA merge). Everything respects
  `prefers-reduced-motion`: Lenis and all scrub/pin animations are skipped entirely, and content
  still renders in full, in order, with no motion dependency.
- **Visual motif** — instead of stock photography (which would either be generic or
  copyrighted), the "digital material" concept from the brief is rendered as a single reusable
  SVG component (`DigitalMaterial.tsx`) with several variants (`sculpture`, `grid`, `wireframe`,
  `particles`, `tiles`, `nodes`, `paths`, `app`) that recur across the hero, capabilities,
  projects, process and studio sections — giving the whole site one consistent visual language
  without needing a photo shoot to ship a working build.

## Before you launch — replace placeholder content

Per the brief's own rule ("never fabricate client work, fake testimonials, or fake results"),
everything below is clearly placeholder and must be swapped for the real thing before this goes
live:

- **Project names & case studies** (`Projects.tsx`) — `MERIDIAN`, `FIELDNOTE`, `ORELLA`,
  `ATLASWORKS` are placeholder names standing in for real Xplorix case studies. Replace with
  real project names, real screenshots/video, and real outcomes once available.
- **Testimonials** (`Testimonials.tsx`) — currently generic, unattributed placeholder quotes.
  Replace with real, verifiable client quotes only.
- **Hero / capability / process imagery** — currently rendered as abstract generative SVG
  (`DigitalMaterial`) rather than commissioned photography, since no real Xplorix photo/3D
  assets exist yet. Swap `DigitalMaterial` usages for `<img>`/`<video>` once a real asset
  library exists (see brief sections on hero/capability/process image direction).
- **Contact form** (`Contact.tsx`) — the multi-step configurator and validation are fully
  functional client-side, but submission is stubbed (see the `NOTE` comment in the file). Wire
  it to a real backend endpoint (e.g. a serverless function calling Resend) before launch, and
  keep the honeypot field and server-side validation in place.
- **Social/email links** in `Footer.tsx` and `Menu.tsx` are placeholders — update with real
  handles and a real inbox.
- **CMS** — there is no CMS wired in. If you want projects/testimonials/team to be editable
  without a code deploy, the cleanest path is porting this into Next.js and adding Sanity (or
  similar), swapping the arrays in `Projects.tsx` / `Testimonials.tsx` / `Studio.tsx` for CMS
  queries.

## Accessibility & resilience already built in

- Skip link, visible focus states, semantic headings/landmarks, keyboard-operable menu and
  contact flow.
- `prefers-reduced-motion` fully respected — no content or navigation depends on animation.
- All GSAP contexts are cleaned up with `gsap.context().revert()` on unmount; no leaked
  ScrollTriggers.
- Every animated section still renders complete, readable content if JavaScript fails to run
  (progressive enhancement — the DOM order is the reading order).

## Known gaps vs. the original 81-point brief

This ships the full narrative arc, scene-to-scene continuity, and the core interaction patterns
(pinned scroll scenes, morphing capability visual, project campaigns, process scanner, CTA
merge, project configurator). Not included, and out of scope for a front-end-only deliverable:
WebGL/Three.js shader distortion on the hero portal (done instead with a performant scale/opacity
transform), Sanity CMS, real email delivery, GA4/Clarity analytics wiring, and a dedicated 404
route (this is a single-page experience with no router yet).
