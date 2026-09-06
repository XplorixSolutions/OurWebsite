import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTA({ reducedMotion }: { reducedMotion: boolean }) {
  const section = useRef<HTMLDivElement>(null)
  const lineA = useRef<HTMLDivElement>(null)
  const lineB = useRef<HTMLDivElement>(null)
  const merged = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reducedMotion || !section.current) return
    const ctx = gsap.context(() => {
      gsap.set(merged.current, { opacity: 0 })
      gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: '+=140%',
          scrub: 0.6,
          pin: true,
        },
      })
        .to(lineA.current, { xPercent: 20, duration: 0.5 }, 0)
        .to(lineB.current, { xPercent: -20, duration: 0.5 }, 0)
        .to([lineA.current, lineB.current], { opacity: 0, duration: 0.2 }, 0.5)
        .to(merged.current, { opacity: 1, duration: 0.3 }, 0.55)
    }, section)
    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      ref={section}
      className="relative h-screen w-full overflow-hidden flex flex-col justify-between px-6 md:px-10 py-16 md:py-20"
      style={{ background: 'var(--almond-100)', color: 'var(--bean-100)' }}
    >
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between">
        
        {/* Top Headline Line */}
        <div ref={lineA} className="font-medium tracking-tight select-none" style={{ fontSize: 'clamp(44px, 8.5vw, 120px)' }}>
          HAVE SOMETHING
        </div>

        {/* Center Merged State — Headline + Underlined Button directly below completed text */}
        <div className="relative flex-1 flex items-center justify-center my-auto">
          <div ref={merged} className="text-center flex flex-col items-center justify-center">
            <h2
              className="font-medium tracking-tight leading-none text-[var(--bean-100)] mb-6 md:mb-8"
              style={{ fontSize: 'clamp(44px, 8.5vw, 120px)' }}
            >
              LET&rsquo;S BUILD IT.
            </h2>

            {/* Underlined Editorial Button with Maximum High-Contrast Visibility */}
            <a
              href="#contact"
              className="group inline-flex flex-col items-center cursor-pointer pt-3 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 text-base md:text-lg lg:text-xl font-bold tracking-[0.22em] uppercase" style={{ color: '#2E0D14' }}>
                <span>START A PROJECT</span>
                <span className="text-lg md:text-xl font-semibold transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">↗</span>
              </div>
              {/* Crisp 2px underline bar expanding to 3px on hover */}
              <div className="w-full h-[2px] mt-2.5 transition-all duration-300 group-hover:h-[3px]" style={{ background: '#2E0D14' }} />
            </a>
          </div>
        </div>

        {/* Bottom Headline Line */}
        <div ref={lineB} className="font-medium tracking-tight self-end text-right select-none" style={{ fontSize: 'clamp(44px, 8.5vw, 120px)' }}>
          WORTH BUILDING?
        </div>

      </div>
    </section>
  )
}


