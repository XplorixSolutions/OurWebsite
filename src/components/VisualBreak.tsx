import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TRIPTYCH = [
  { title: 'ARCHITECTURAL DIGITAL FORM', image: '/images/last 3 images/1.jfif' },
  { title: 'HUMAN & INTERFACE SYNCHRONICITY', image: '/images/last 3 images/2.jfif' },
  { title: 'LUXURY DIGITAL PRODUCT ECOSYSTEM', image: '/images/last 3 images/3.jfif' },
]

export default function VisualBreak({ reducedMotion }: { reducedMotion: boolean }) {
  const section = useRef<HTMLDivElement>(null)
  const panels = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (reducedMotion || !section.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: '+=200%',
          scrub: 0.6,
          pin: true,
        },
      })
      panels.current.slice(1).forEach((panel) => {
        if (panel) {
          tl.fromTo(panel, { clipPath: 'inset(0 50% 0 50%)' }, { clipPath: 'inset(0 0% 0 0%)', duration: 1, ease: 'power2.inOut' })
        }
      })
    }, section)
    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section ref={section} className="relative h-screen w-full overflow-hidden" style={{ background: 'var(--bean-100)' }}>
      {TRIPTYCH.map((item, i) => (
        <div
          key={i}
          ref={(el) => { panels.current[i] = el }}
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{ background: 'var(--bean-100)', zIndex: i }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover filter brightness-85 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E0D14]/60 via-transparent to-[#2E0D14]/30 pointer-events-none" />
        </div>
      ))}
      <p className="absolute top-10 left-6 md:left-16 meta text-xs text-[var(--almond-40)] z-40">A MOMENT OF QUIET INTENTION.</p>
    </section>
  )
}

