import { useEffect, useRef, useState, type ReactNode } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Quote {
  number: string
  quote: string
  author: string
  role: string
  company: string
  logo: ReactNode
}

const QUOTES: Quote[] = [
  {
    number: '01',
    quote: 'Xplorix understood our product architecture better than we did after week one. The build never felt like a hand-off — it felt like an extended engineering lab.',
    author: 'ALEXANDER VANCE',
    role: 'FOUNDER & CEO',
    company: 'AURORA GLOBAL FINANCIAL',
    logo: (
      <svg className="w-6 h-6 text-[var(--bean-100)] flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '02',
    quote: 'They designed and shipped the entire ecosystem in-house. We never had to translate between a separate design agency and a developer team.',
    author: 'ELENA ROSTOVA',
    role: 'HEAD OF PRODUCT',
    company: 'AURELIAN ATELIER PARIS',
    logo: (
      <svg className="w-6 h-6 text-[var(--bean-100)] flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="16" height="16" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 16 16)" />
        <path d="M16 8V24M8 16H24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    quote: 'The speed of execution, mathematical precision in design tokens, and WebGL motion performance set a new benchmark across our global campaigns.',
    author: 'MARCUS CHEN',
    role: 'VP OF ENGINEERING',
    company: 'FIELDNOTE INDUSTRIAL',
    logo: (
      <svg className="w-6 h-6 text-[var(--bean-100)] flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L27 10.5V21.5L16 28L5 21.5V10.5L16 4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 10L21 13V19L16 22L11 19V13L16 10Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
]

export default function Testimonials({ reducedMotion }: { reducedMotion: boolean }) {
  const section = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reducedMotion || !section.current) return
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section.current,
        start: 'top top',
        end: `+=${QUOTES.length * 50}%`,
        scrub: 0.8,
        pin: true,
        onUpdate: (self) => {
          const idx = Math.min(QUOTES.length - 1, Math.floor(self.progress * QUOTES.length))
          setActive(idx)
        },
      })
    }, section)
    return () => ctx.revert()
  }, [reducedMotion])

  const current = QUOTES[active]

  return (
    <section
      ref={section}
      className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-10 py-24"
      style={{ background: 'var(--almond-100)', color: 'var(--bean-100)' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header — aligned with max-w-7xl */}
        <div className="flex items-end justify-between pb-8 mb-12 border-b border-[var(--bean-20)]">
          <div>
            <p className="meta text-[11px] tracking-[0.2em] text-[var(--bean-40)] mb-2">
              PROOF & TESTIMONIALS
            </p>
            <h2
              className="font-medium tracking-tight text-[var(--bean-100)] leading-none"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
            >
              WHAT OUR PARTNERS SAY.
            </h2>
          </div>

          {/* Synced Scroll Highlight Numbers */}
          <div className="flex items-center gap-3">
            {QUOTES.map((q, idx) => (
              <button
                key={q.number}
                type="button"
                onClick={() => setActive(idx)}
                className={`meta text-xs tracking-[0.18em] px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                  active === idx
                    ? 'bg-[var(--bean-100)] text-[var(--almond-100)] border-[var(--bean-100)] font-bold shadow-md scale-105'
                    : 'border-[var(--bean-25)] text-[var(--bean-60)] hover:text-[var(--bean-100)] hover:border-[var(--bean-60)] bg-transparent'
                }`}
              >
                {q.number}
              </button>
            ))}
          </div>
        </div>

        {/* Spacious Quote Display Box */}
        <div className="max-w-5xl py-4 min-h-[300px] flex flex-col justify-between">
          <blockquote className="space-y-8 animate-fadeIn" key={current.number}>
            
            {/* Quote Body — spacious, crisp grotesk typography */}
            <p
              className="font-medium tracking-tight text-[var(--bean-100)] leading-[1.35]"
              style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
            >
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Author & Client Logo Block */}
            <div className="pt-6 border-t border-[var(--bean-20)] flex items-center gap-4">
              {/* Minimal Theme-Synced Geometric Client Logo */}
              <div className="w-12 h-12 rounded-xl bg-[rgba(46,13,20,0.06)] border border-[rgba(46,13,20,0.12)] flex items-center justify-center p-2.5 flex-shrink-0 shadow-sm">
                {current.logo}
              </div>

              <div>
                <cite className="not-italic text-base md:text-lg font-bold tracking-wide text-[var(--bean-100)] block">
                  {current.author}
                </cite>
                <span className="meta text-[11px] tracking-[0.16em] text-[var(--bean-70)] block mt-0.5 font-medium">
                  {current.role} — <span className="text-[var(--bean-100)] font-semibold">{current.company}</span>
                </span>
              </div>
            </div>

          </blockquote>
        </div>

      </div>
    </section>
  )
}


