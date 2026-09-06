import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ProcessStage {
  label: string
  image: string
  desc: string
  deliverable: string
}

const STAGES: ProcessStage[] = [
  {
    label: 'DISCOVER',
    image: '/images/htbr section/discover.jpg',
    desc: 'We map the technical architecture, business goals, and user mental model before touching a single line of code.',
    deliverable: 'Technical Roadmap & Scope Contract',
  },
  {
    label: 'FRAME',
    image: '/images/htbr section/frame.png',
    desc: 'Defining core data schemas, performance budgets, design tokens, and success metrics up front.',
    deliverable: 'Design Tokens & Schema Spec',
  },
  {
    label: 'DESIGN',
    image: '/images/htbr section/design.jpg',
    desc: 'Crafting editorial, high-precision interfaces from real content and interactive prototypes — no generic SaaS templates.',
    deliverable: 'High-Fidelity Component System',
  },
  {
    label: 'ENGINEER',
    image: '/images/htbr section/engineer.png',
    desc: 'Writing clean, resilient, production-grade Next.js, WebGL, and backend code backed by automated testing.',
    deliverable: 'Production Code & API Middleware',
  },
  {
    label: 'SHIP',
    image: '/images/htbr section/ship.png',
    desc: 'Deploying with real-time telemetry, zero-downtime CI/CD pipelines, and multi-region CDN edge caching.',
    deliverable: 'Production Deployment & Monitoring',
  },
  {
    label: 'EVOLVE',
    image: '/images/htbr section/evolve.jpg',
    desc: 'Analyzing user telemetry post-launch to continuously refine performance, conversion, and feature sets.',
    deliverable: 'Telemetry Analytics & Iteration Plan',
  },
]

export default function Process({ reducedMotion }: { reducedMotion: boolean }) {
  const section = useRef<HTMLDivElement>(null)
  const scanner = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reducedMotion || !section.current || !scanner.current) return
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: '+=160%',
          scrub: 0.6,
          pin: true,
          onUpdate: (self) => {
            const idx = Math.min(STAGES.length - 1, Math.floor(self.progress * STAGES.length))
            setActive(idx)
          },
        },
      }).to(scanner.current, { left: '100%', ease: 'none' })
    }, section)
    return () => ctx.revert()
  }, [reducedMotion])

  const current = STAGES[active]

  return (
    <section id="process" ref={section} className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between px-6 md:px-10 pt-32 md:pt-40 pb-12" style={{ background: 'var(--almond-100)', color: 'var(--bean-100)' }}>
      {/* Prominent High-Contrast Section Header with clear navbar clearance */}
      <div className="max-w-7xl mx-auto w-full mb-8 pb-6 border-b border-[var(--bean-20)] z-10">
        <div>
          <p className="meta text-[11px] tracking-[0.2em] text-[var(--bean-60)] font-semibold mb-2">
            OUR PROCESS
          </p>
          <h2
            className="font-medium tracking-tight text-[var(--bean-100)] leading-none"
            style={{ fontSize: 'clamp(26px, 3.6vw, 44px)' }}
          >
            HOW THINGS BECOME REAL.
          </h2>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 max-w-7xl mx-auto w-full my-auto py-6">
        {/* Stage Artwork Visual */}
        <div className="w-full md:w-[42vw] max-w-[440px] aspect-[16/10] rounded-xl overflow-hidden shadow-xl border border-[var(--bean-10)] group">
          <img
            key={current.image}
            src={current.image}
            alt={current.label}
            className="w-full h-full object-cover filter brightness-95 contrast-105 transition-all duration-700 animate-fadeIn"
          />
        </div>

        {/* Stage Content Info */}
        <div className="max-w-lg flex-1">
          <span className="meta text-xs text-[var(--bean-60)] tracking-wider font-semibold">PROCESS PHASE</span>
          <h3 className="font-medium tracking-tight mt-1 text-[var(--bean-100)]" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>{current.label}</h3>
          <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: 'var(--bean-80)' }}>{current.desc}</p>
          <div className="mt-6 pt-4 border-t border-[var(--bean-20)] flex items-center gap-3">
            <span className="meta text-xs text-[var(--bean-60)] font-semibold">DELIVERABLE:</span>
            <span className="meta text-xs font-bold text-[var(--bean-100)] px-3.5 py-1.5 rounded-full bg-[var(--bean-10)] border border-[var(--bean-20)]">
              {current.deliverable}
            </span>
          </div>
        </div>
      </div>

      {/* Film Strip Progress Scanner Bar */}
      <div className="max-w-7xl mx-auto w-full mt-6 z-10">
        <div className="relative h-1.5 w-full rounded-full" style={{ background: 'var(--bean-20)' }}>
          <div ref={scanner} className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-md border-2 border-[var(--almond-100)]" style={{ background: 'var(--bean-100)', left: '0%' }} />
        </div>
        <div className="flex justify-between mt-4">
          {STAGES.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className="meta text-xs tracking-wider transition-all cursor-pointer"
              style={{ opacity: i === active ? 1 : 0.4, color: 'var(--bean-100)', fontWeight: i === active ? 700 : 500 }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

