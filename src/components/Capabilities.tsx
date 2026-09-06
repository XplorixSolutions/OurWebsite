import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import DigitalMaterial from './DigitalMaterial'

gsap.registerPlugin(ScrollTrigger)

interface CapabilityItem {
  label: string
  image: string
  variant: 'grid' | 'app' | 'wireframe' | 'particles' | 'tiles' | 'nodes' | 'paths'
  desc: string
}

const CAPABILITIES: CapabilityItem[] = [
  {
    label: 'AUTOMATION & AI PIPELINES',
    image: '/images/Service/AI.jpg',
    variant: 'particles',
    desc: `Our #1 priority service. We engineer end-to-end custom AI pipelines, LLM-powered decision engines, intelligent document processors, automated web crawlers, and autonomous workflow automation systems that eliminate manual operational bottlenecks across enterprise stacks.`,
  },
  {
    label: 'WEB SYSTEMS',
    image: '/images/Service/web systems.jpg',
    variant: 'grid',
    desc: `We architect editorial-grade, ultra-fast web systems designed to scale from day one. Whether it's a bespoke marketing portal with immersive storytelling or a complex multi-tenant SaaS application, every build is engineered with server-side rendering, edge caching, and performance-first principles. We don't use templates — every interface is composed from scratch with precision typography, motion systems, and responsive behavior that feels native across every viewport.`,
  },
  {
    label: 'MOBILE PRODUCTS',
    image: '/images/Service/mobile.jfif',
    variant: 'app',
    desc: `Our mobile products are built as singular, fluid ecosystems — not ported afterthoughts. From iOS to Android, every interaction is designed to feel native while maintaining one unified codebase. We handle offline-first architectures, biometric integrations, real-time sync engines, and push notification systems, all wrapped inside interfaces that prioritize gesture-driven navigation, haptic feedback, and zero-friction user flows.`,
  },
  {
    label: 'PRODUCT DESIGN',
    image: '/images/Service/product design.jpg',
    variant: 'wireframe',
    desc: `Design at Xplorix is a systematic discipline, not decoration. We build high-fidelity design systems with mathematical precision — establishing spacing grids, color token libraries, component hierarchies, and interaction patterns before a single pixel ships. Every prototype is tested against real content and real user scenarios, ensuring the final product communicates clarity, hierarchy, and intent at every touchpoint.`,
  },
  {
    label: 'AI + DATA',
    image: '/images/Service/AI.jpg',
    variant: 'particles',
    desc: `We integrate custom AI pipelines and machine learning workflows directly into your product stack. From LLM-powered content generation and intelligent search to predictive analytics dashboards and automated decision engines — our data systems transform raw signals into actionable intelligence. Every integration is built with responsible AI principles, robust monitoring, and scalable infrastructure that evolves with your data.`,
  },
  {
    label: 'COMMERCE',
    image: '/images/Service/e comm.jpg',
    variant: 'tiles',
    desc: `We engineer headless commerce experiences that merge brand storytelling with conversion science. From custom checkout flows and dynamic product configurators to subscription management and multi-currency support — every storefront is built for speed, elegance, and global reach. We handle inventory sync, payment orchestration, and fraud prevention, all behind interfaces that feel like luxury retail, not generic e-commerce.`,
  },
  {
    label: 'CLOUD & DEVOPS',
    image: '/images/Service/cloud devops.jpg',
    variant: 'nodes',
    desc: `Our cloud infrastructure is built for resilience, security, and zero-downtime deployment. We architect multi-region environments with automated CI/CD pipelines, container orchestration, infrastructure-as-code, and real-time observability. From initial provisioning to production scaling, every layer is configured for cost efficiency, rapid recovery, and the kind of operational reliability that lets your team ship with confidence.`,
  },
  {
    label: 'API SYSTEMS',
    image: '/images/Service/API.jpg',
    variant: 'paths',
    desc: `We design and build scalable API architectures — REST, GraphQL, and event-driven — that serve as the backbone of multi-platform digital products. Every endpoint is documented, versioned, and secured with rate limiting, authentication layers, and comprehensive error handling. Our APIs are engineered for developer experience as much as performance, enabling seamless integration across web, mobile, and third-party ecosystems.`,
  },
  {
    label: 'CUSTOM SOFTWARE',
    image: '/images/Service/custom.jpg',
    variant: 'app',
    desc: `When off-the-shelf solutions fall short, we build bespoke enterprise software tailored to your exact operational needs. From internal dashboards and workflow automation tools to complex data processing systems and multi-user collaboration platforms — every solution is architected with clean separation of concerns, robust security practices, and the long-term maintainability that enterprise-grade software demands.`,
  },
]

export default function Capabilities({ reducedMotion }: { reducedMotion: boolean }) {
  const section = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [active, setActive] = useState(0)

  // ──── GSAP / ScrollTrigger ────
  useEffect(() => {
    if (reducedMotion || !section.current) return
    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: section.current,
        start: 'top top',
        end: `+=${CAPABILITIES.length * 40}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / (CAPABILITIES.length - 1),
          duration: { min: 0.2, max: 0.5 },
          delay: 0.05,
          ease: 'power1.inOut',
        },
        onUpdate: (self) => {
          const idx = Math.min(CAPABILITIES.length - 1, Math.floor(self.progress * CAPABILITIES.length))
          setActive(idx)
        },
      })
      return () => st.kill()
    }, section)
    return () => ctx.revert()
  }, [reducedMotion])

  useEffect(() => {
    itemRefs.current.forEach((item, i) => {
      if (!item) return
      if (i === active) {
        gsap.to(item, { opacity: 1, x: 6, duration: 0.35, ease: 'power2.out', overwrite: 'auto' })
      } else {
        gsap.to(item, { opacity: 0.35, x: 0, duration: 0.35, ease: 'power2.out', overwrite: 'auto' })
      }
    })
  }, [active])
  // ──── END GSAP ────

  const current = CAPABILITIES[active]

  return (
    <section
      id="capabilities"
      ref={section}
      className="relative h-screen w-full overflow-hidden"
      style={{ background: 'var(--bean-100)' }}
    >
      {/* Main content wrapper — aligned to max-w-7xl like navbar */}
      <div className="max-w-7xl mx-auto h-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-4 md:gap-6 lg:gap-12">

        {/* ── Left: Navigation Sidebar (Desktop) ── */}
        <div className="hidden md:flex flex-col justify-center gap-1 z-10">
          {/* Section Headline — matching other sections */}
          <p className="meta text-[11px] tracking-[0.2em] text-[var(--almond-40)] mb-2">CAPABILITIES</p>
          <h2
            className="font-medium tracking-tight text-[var(--almond-100)] leading-[0.96] mb-8"
            style={{ fontSize: 'clamp(28px, 3.2vw, 44px)' }}
          >
            WHAT WE CAN TURN INTO REALITY.
          </h2>

          {/* Capability List */}
          <ul className="space-y-0.5">
            {CAPABILITIES.map((c, i) => (
              <li
                key={c.label}
                ref={(el) => { itemRefs.current[i] = el }}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 py-2.5 cursor-pointer transition-all border-l-2 pl-4 ${
                  i === active
                    ? 'border-[var(--almond-100)] text-[var(--almond-100)]'
                    : 'border-transparent text-[var(--almond-40)] hover:text-[var(--almond-80)] hover:border-[var(--almond-20)]'
                }`}
              >
                <span className={`text-[10px] font-mono tabular-nums ${i === active ? 'text-[var(--almond-80)]' : 'text-[var(--almond-40)]'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`text-[13px] tracking-[0.06em] uppercase ${i === active ? 'font-semibold' : 'font-normal'}`}>
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Mobile Header & Horizontal Scroll Tabs (<768px) ── */}
        <div className="md:hidden pt-20 pb-2 z-10">
          <p className="meta text-[10px] tracking-[0.2em] text-[var(--almond-40)] mb-1">CAPABILITIES</p>
          <h2 className="text-lg font-medium tracking-tight text-[var(--almond-100)] mb-3">
            WHAT WE CAN TURN INTO REALITY.
          </h2>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {CAPABILITIES.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActive(i)}
                className={`meta text-[10px] tracking-wider px-3 py-1.5 rounded-full border whitespace-nowrap transition-all ${
                  i === active
                    ? 'bg-[var(--almond-100)] text-[#2E0D14] border-[var(--almond-100)] font-semibold'
                    : 'border-[var(--almond-20)] text-[var(--almond-60)] bg-transparent'
                }`}
              >
                {String(i + 1).padStart(2, '0')} {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Right: Visual Display + Info ── */}
        <div className="relative flex flex-col justify-center my-auto gap-5">

          {/* Image Container */}
          <div className="relative w-full max-w-[640px] aspect-[16/10] rounded overflow-hidden border border-[var(--almond-12)] group">
            <img
              key={current.image}
              src={current.image}
              alt={current.label}
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-all duration-700 animate-fadeIn"
            />

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E0D14]/70 via-transparent to-transparent pointer-events-none" />

            {/* Bottom-left label inside image */}
            <div className="absolute bottom-5 left-5 z-10">
              <h3
                className="text-[var(--almond-100)] font-medium tracking-tight leading-none"
                style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
              >
                {current.label}
              </h3>
            </div>
          </div>

          {/* Description — editorial layout */}
          <div className="max-w-[640px] pt-4 border-t border-[var(--almond-12)]">
            {/* Mobile-only label */}
            <span className="md:hidden meta text-[11px] text-[var(--almond-40)] block mb-2 tracking-[0.15em]">
              {current.label}
            </span>
            <p className="text-[13px] md:text-[15px] text-[var(--almond-80)] leading-[1.7]">
              {current.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
