import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NODES = [
  { label: 'STRATEGY', x: 150, y: 120 },
  { label: 'DESIGN', x: 150, y: 220 },
  { label: 'FRONTEND', x: 150, y: 320 },
  { label: 'BACKEND', x: 150, y: 420 },
  { label: 'DATA', x: 150, y: 520 },
  { label: 'INFRASTRUCTURE', x: 150, y: 620 },
  { label: 'QA', x: 150, y: 720 },
  { label: 'DEPLOYMENT', x: 150, y: 820 },
]

export default function BuildSystem({ reducedMotion }: { reducedMotion: boolean }) {
  const section = useRef<HTMLDivElement>(null)
  const linesRef = useRef<(SVGLineElement | null)[]>([])
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reducedMotion || !section.current) return
    const ctx = gsap.context(() => {
      linesRef.current.forEach((l) => {
        if (!l) return
        const len = l.getTotalLength()
        gsap.set(l, { strokeDasharray: len, strokeDashoffset: len })
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: '+=160%',
          scrub: 0.6,
          pin: true,
        },
      })
        .to(linesRef.current, { strokeDashoffset: 0, stagger: 0.08, duration: 0.7, ease: 'none' })
        .to(dotRef.current, { scale: 1.5, duration: 0.2 })
        .to(dotRef.current, { scale: 1, duration: 0.2 })
    }, section)
    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      ref={section}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center px-6"
      style={{ background: 'var(--bean-100)' }}
    >
      {/* Header & Tagline Overlay — Aligned with max-w-7xl layout */}
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between py-12 md:py-16">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          <p className="meta text-[11px] tracking-[0.2em] text-[var(--almond-40)] mb-1">SYSTEM ARCHITECTURE</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-[var(--almond-100)]">
            HOW WE ENGINEER
          </h2>
        </div>

        {/* Enhanced IDEA -> PRODUCT Editorial Badge */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 flex justify-end">
          <div className="pointer-events-auto flex items-center gap-3 md:gap-5 px-6 py-3 rounded-full bg-[var(--almond-06)] border border-[var(--almond-12)] backdrop-blur-sm shadow-xl">
            <span className="meta text-xs md:text-sm lg:text-base font-bold tracking-[0.22em] text-[var(--almond-100)] uppercase">
              IDEA
            </span>
            <span className="text-base md:text-xl text-[var(--almond-60)] font-light">&rarr;</span>
            <span className="font-medium tracking-tight text-sm md:text-lg lg:text-xl text-[var(--almond-100)] uppercase">
              PRODUCT
            </span>
          </div>
        </div>
      </div>

      {/* Enlarged Center Mind Map Diagram */}
      <div className="relative w-full max-w-4xl lg:max-w-5xl flex items-center justify-center z-0 py-8">
        <svg viewBox="0 0 900 940" className="w-full h-auto max-h-[82vh]">
          {NODES.map((n, i) => (
            <line
              key={n.label}
              ref={(el) => { linesRef.current[i] = el }}
              x1="450"
              y1="470"
              x2={n.x}
              y2={n.y}
              stroke="var(--almond-100)"
              strokeOpacity="0.6"
              strokeWidth="2"
            />
          ))}
          {NODES.map((n) => (
            <g key={`n-${n.label}`}>
              <circle cx={n.x} cy={n.y} r="6" fill="var(--almond-100)" fillOpacity="1" />
              <circle cx={n.x} cy={n.y} r="12" stroke="var(--almond-100)" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
              <text
                x={n.x + (n.x < 450 ? -18 : 18)}
                y={n.y + 5}
                fontSize="14"
                fontWeight="700"
                letterSpacing="0.14em"
                fill="var(--almond-100)"
                textAnchor={n.x < 450 ? 'end' : 'start'}
                fontFamily="var(--font-grotesk)"
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>

        {/* Central Core Pulse Dot */}
        <div
          ref={dotRef}
          className="absolute flex items-center justify-center pointer-events-none"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
        >
          <div className="w-5 h-5 rounded-full bg-[var(--almond-100)] shadow-[0_0_30px_rgba(239,225,213,0.8)]" />
          <div className="absolute w-10 h-10 rounded-full border border-[var(--almond-40)] animate-ping opacity-40" />
        </div>
      </div>
    </section>
  )
}

