import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ORBIT = [
  { label: 'DESIGN', code: '01', side: 'left', pos: { top: '6%', left: '1%' } },
  { label: 'PRODUCT', code: '02', side: 'right', pos: { top: '6%', right: '1%' } },
  { label: 'ENGINEERING', code: '03', side: 'left', pos: { top: '46%', left: '0%' } },
  { label: 'DATA', code: '04', side: 'right', pos: { top: '46%', right: '0%' } },
  { label: 'SYSTEMS', code: '05', side: 'left', pos: { top: '82%', left: '2%' } },
  { label: 'EXPERIENCE', code: '06', side: 'right', pos: { top: '82%', right: '2%' } },
]

export default function Statement({ reducedMotion }: { reducedMotion: boolean }) {
  const section = useRef<HTMLDivElement>(null)
  const wrap = useRef<HTMLDivElement>(null)
  const imageWrap = useRef<HTMLDivElement>(null)
  const words = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (reducedMotion || !section.current) return
    const ctx = gsap.context(() => {
      // Set initial states for left and right orbiting tags
      ORBIT.forEach((item, i) => {
        const el = words.current[i]
        if (!el) return
        const xOffset = item.side === 'left' ? -40 : 40
        gsap.set(el, { opacity: 0, scale: 0.8, x: xOffset })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: '+=180%',
          scrub: 0.7,
          pin: true,
        },
      })

      // Orbiting words reveal with lateral slide & scale into position
      tl.to(words.current, {
        opacity: 1,
        scale: 1,
        x: 0,
        stagger: 0.09,
        duration: 0.6,
        ease: 'power2.out',
      })

      // Image reveal & narrowing strip transition
      if (imageWrap.current) {
        tl.fromTo(
          imageWrap.current,
          { clipPath: 'inset(20% 25% 20% 25%)', opacity: 0, y: 60 },
          { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '<0.2'
        )
      }
    }, section)
    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      ref={section}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 py-20"
      style={{ background: 'var(--almond-100)', color: 'var(--bean-100)' }}
    >
      {/* Central Philosophy Section with Flanking Orbiting Badges */}
      <div ref={wrap} className="relative w-full max-w-7xl text-center z-10 my-auto py-12 px-4 md:px-8">
        <p className="meta text-xs tracking-[0.2em] text-[var(--bean-40)] mb-5 font-semibold">
          OUR PHILOSOPHY
        </p>

        {/* Main Headline with controlled max-width so side popups don't overlap */}
        <h2
          className="font-medium tracking-tight leading-[0.96] max-w-3xl md:max-w-4xl mx-auto text-[var(--bean-100)]"
          style={{ fontSize: 'clamp(34px, 5.8vw, 74px)' }}
        >
          WE MAKE TECHNOLOGY FEEL INEVITABLE.
        </h2>

        {/* Orbiting Discipline Badges - Positioned on Left & Right Flanks */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {ORBIT.map((item, i) => (
            <div
              key={item.label}
              ref={(el) => { words.current[i] = el }}
              className="absolute pointer-events-auto group flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bean-100)] text-[var(--almond-100)] border border-[var(--bean-90)] shadow-[0_10px_25px_rgba(46,13,20,0.18)] transition-transform duration-300 hover:scale-105 cursor-default select-none"
              style={item.pos}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--almond-40)] group-hover:bg-[var(--almond-100)] transition-colors" />
              <span className="font-mono text-[10px] text-[var(--almond-40)] tracking-normal">{item.code}</span>
              <span className="meta text-[11px] font-bold tracking-[0.16em]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Off-grid Human Technology Interaction Photograph */}
      <div className="w-full max-w-6xl flex justify-end mt-8 mb-4 z-10 px-4 md:px-0">
        <div
          ref={imageWrap}
          className="relative w-full md:w-[52vw] aspect-[16/10] rounded-lg overflow-hidden shadow-xl border border-[var(--bean-10)] group"
        >
          <img
            src="/images/1.png"
            alt="Human Interaction with Digital Interface Prototype"
            className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

    </section>
  )
}


