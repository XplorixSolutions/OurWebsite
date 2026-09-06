import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DEFAULT_HERO_SOURCES = [
  '/images/11-removebg-preview.png',
  '/images/11-removebg-preview.jpg',
  '/images/11-removebg-preview.jpeg',
  '/images/11-removebg-preview.webp',
  '/images/hero1.png',
  '/images/hero1.jpg',
  '/images/hero1.jpeg',
  '/images/hero_key_art.png',
  '/images/hero_key_art.jpg',
  '/images/hero_key_art.jpeg',
  '/images/xplorix-artwork.png',
  '/images/xplorix-artwork.jpg',
]

function getExtensionCandidates(src: string): string[] {
  const cleanSrc = src.trim()
  const base = cleanSrc.replace(/\.(png|jpg|jpeg|webp)$/i, '')
  const currentExtMatch = cleanSrc.match(/\.(png|jpg|jpeg|webp)$/i)
  const currentExt = currentExtMatch ? currentExtMatch[0].toLowerCase() : '.png'

  const allExtensions = ['.png', '.jpg', '.jpeg', '.webp']
  const orderedExts = [currentExt, ...allExtensions.filter((ext) => ext !== currentExt)]
  const list = orderedExts.map((ext) => `${base}${ext}`)

  DEFAULT_HERO_SOURCES.forEach((defSrc) => {
    if (!list.includes(defSrc)) {
      list.push(defSrc)
    }
  })

  return list
}

export default function Hero({
  reducedMotion,
  imageSrc = '/images/11-removebg-preview.png',
  onOpenChat,
}: {
  reducedMotion: boolean
  imageSrc?: string
  onOpenChat?: () => void
}) {
  const section = useRef<HTMLDivElement>(null)
  const artwork = useRef<HTMLDivElement>(null)
  const portal = useRef<HTMLDivElement>(null)
  const bgTitle = useRef<HTMLDivElement>(null)
  const ctaWrap = useRef<HTMLDivElement>(null)

  const [candidateIndex, setCandidateIndex] = useState(0)
  const [candidates, setCandidates] = useState<string[]>(() => getExtensionCandidates(imageSrc))

  useEffect(() => {
    setCandidates(getExtensionCandidates(imageSrc))
    setCandidateIndex(0)
  }, [imageSrc])

  const handleImageError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1)
    }
  }

  const activeImageSrc = candidates[candidateIndex] || imageSrc

  // entrance
  useEffect(() => {
    if (reducedMotion) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 })
      tl.fromTo(bgTitle.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out' })
        .fromTo(artwork.current, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }, '<0.1')
        .fromTo(ctaWrap.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '<0.15')
    }, section)
    return () => ctx.revert()
  }, [reducedMotion])

  // pointer parallax
  useEffect(() => {
    if (reducedMotion) return
    const el = artwork.current
    const bg = bgTitle.current
    if (!el) return
    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth
      const h = window.innerHeight
      const dx = (e.clientX / w - 0.5) * 2
      const dy = (e.clientY / h - 0.5) * 2
      gsap.to(el, { x: dx * 16, y: dy * 16, rotate: dx * 0.8, duration: 0.9, ease: 'power2.out' })
      if (bg) gsap.to(bg, { x: dx * -10, y: dy * -8, duration: 1.1, ease: 'power2.out' })
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [reducedMotion])

  // scroll portal into next scene
  useEffect(() => {
    if (reducedMotion || !section.current || !portal.current) return
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: '+=140%',
          scrub: 0.8,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
        .fromTo(
          bgTitle.current,
          { opacity: 1, y: 0 },
          { opacity: 0, y: 30, duration: 0.25, ease: 'none', immediateRender: false },
          0
        )
        .to(portal.current, { scale: 5, duration: 0.6, ease: 'power2.in' }, 0.15)
        .to(portal.current, { opacity: 0, duration: 0.15 }, 0.72)
        .to(section.current, { backgroundColor: 'var(--almond-100)', duration: 0.2 }, 0.75)
    }, section)
    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      id="top"
      ref={section}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ background: 'var(--bean-100)' }}
    >
      {/* Background Giant Display Typography (SYNTH ERA equivalent -> XPLORIX) */}
      <div
        ref={bgTitle}
        className="absolute top-16 md:top-24 left-0 right-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden px-4"
      >
        <h1
          className="font-syne font-black text-center tracking-tight leading-none uppercase text-[#EFE1D5]/15 select-none"
          style={{ fontSize: 'clamp(48px, 14vw, 185px)' }}
        >
          XPLORIX
        </h1>
      </div>

      {/* Central Key Artwork & Portal Container */}
      <div ref={portal} className="absolute inset-0 flex items-center justify-center will-change-transform z-10 pointer-events-none">
        <div
          ref={artwork}
          className="relative w-[96vw] max-w-[1020px] md:w-[74vw] lg:w-[78vw] flex items-center justify-center group transform translate-y-4 md:translate-y-6"
        >
          <img
            src={activeImageSrc}
            onError={handleImageError}
            alt="Xplorix Cyber Digital Artwork"
            className="w-full h-auto max-h-[92vh] object-contain object-center filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)] transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Bottom Editorial Grid & Action Controls */}
      <div
        ref={ctaWrap}
        className="absolute bottom-6 md:bottom-10 left-0 right-0 px-6 md:px-10 pointer-events-none z-30"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Bottom Left: Bespoke Digital Systems / Editorial info */}
          <div className="pointer-events-auto flex flex-col gap-3">
            <div>
              <h3 className="meta font-bold text-xs tracking-widest text-[var(--almond-100)]">
                XPLORIX SOLUTIONS SYSTEMS
              </h3>
              <p className="text-[11px] md:text-xs text-[var(--almond-70)] max-w-[320px] mt-1 leading-relaxed">
                Strategy, product design, and custom engineering — transforming raw ideas into high-performance digital products.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#capabilities"
                className="meta text-xs px-4.5 py-2 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                style={{ background: '#EFE1D5', color: '#2E0D14' }}
              >
                <span style={{ color: '#2E0D14' }}>EXPLORE CAPABILITIES</span>
                <span style={{ color: '#2E0D14' }}>↘</span>
              </a>
              <a
                href="#work"
                className="meta text-xs px-4.5 py-2 rounded-full border border-[var(--almond-40)] hover:bg-[var(--almond-12)] transition-all flex items-center gap-2 cursor-pointer"
                style={{ color: '#EFE1D5' }}
              >
                <span style={{ color: '#EFE1D5' }}>VIEW WORK</span>
                <span style={{ color: '#EFE1D5' }}>↗</span>
              </a>
            </div>
          </div>

          {/* Bottom Right: Floating Spotlight Card (RIO AI Chatbot - Chat Bubble Shape) */}
          <div
            onClick={onOpenChat}
            className="relative pointer-events-auto hidden sm:block bg-[#1B080D]/85 backdrop-blur-md border border-[var(--almond-12)] p-4.5 rounded-[24px] rounded-br-[4px] max-w-[250px] shadow-2xl transition-all duration-300 hover:border-[var(--almond-40)] cursor-pointer group"
          >
            {/* Chat Bubble Tail Accent */}
            <div className="absolute -bottom-2 right-5 w-4 h-4 bg-[#1B080D] border-r border-b border-[var(--almond-12)] rotate-45 pointer-events-none" />
            
            <div className="relative z-10">
              <h4 className="meta font-bold text-xs tracking-wider text-[var(--almond-100)]">
                WANNA CHAT WITH RIO
              </h4>
              <p className="text-[11px] text-[var(--almond-70)] mt-1.5 leading-snug">
                Meet Rio, our AI Assistant. Ask questions, explore systems, and scope your project live.
              </p>
              <span
                className="meta inline-flex items-center gap-1.5 text-[11px] text-[var(--almond-80)] group-hover:text-white mt-3.5 transition-colors"
              >
                <span>START CHAT</span>
                <span className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

