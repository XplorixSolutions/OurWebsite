import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Logo from './Logo'

export default function Preloader({ reducedMotion, onDone }: { reducedMotion: boolean; onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null)
  const line = useRef<HTMLDivElement>(null)
  const word = useRef<HTMLDivElement>(null)
  const coord = useRef<HTMLDivElement>(null)
  const [skip] = useState(() => sessionStorage.getItem('xplorix-seen') === '1')

  useEffect(() => {
    sessionStorage.setItem('xplorix-seen', '1')

    if (skip || reducedMotion || !root.current) {
      gsap.set(root.current, { autoAlpha: 0, pointerEvents: 'none' })
      onDone()
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(root.current, { pointerEvents: 'none' })
        onDone()
      },
    })

    tl.set(line.current, { scaleX: 0, opacity: 0 })
      .set(coord.current, { opacity: 0 })
      .set(word.current, { clipPath: 'inset(0 0 100% 0)' })
      .to({}, { duration: 0.35 })
      .to(line.current, { opacity: 1, duration: 0.1 })
      .to(line.current, { scaleX: 1, duration: 0.15, ease: 'power2.inOut' })
      .to(coord.current, { opacity: 1, duration: 0.15 }, '<')
      .to(line.current, { opacity: 0, duration: 0.12 })
      .to(word.current, { clipPath: 'inset(0 0 0% 0)', duration: 0.4, ease: 'power4.out' })
      .to({}, { duration: 0.2 })
      .to(root.current, { autoAlpha: 0, duration: 0.5, ease: 'power2.inOut' })

    return () => {
      tl.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (skip) return null

  return (
    <div
      ref={root}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: 'var(--bean-100)' }}
      aria-hidden="true"
    >
      <div ref={line} className="absolute top-1/2 h-px" style={{ width: '70vw', background: 'var(--almond-100)' }} />
      <div ref={coord} className="meta absolute bottom-10 left-10 text-xs flex items-center gap-2" style={{ color: 'var(--almond-80)' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--almond-100)] animate-ping" />
        <span>DIGITAL SIGNAL / 001</span>
      </div>
      <div ref={word} className="flex items-center justify-center">
        <Logo variant="dark" className="h-16 md:h-24 w-auto" />
      </div>
    </div>
  )
}

