import { useEffect, useState } from 'react'
import Logo from './Logo'

interface Props {
  menuOpen?: boolean
  onToggleMenu?: () => void
  sceneLabel: string
}

const NAV_LINKS = [
  { label: 'WORK', href: '#work' },
  { label: 'CAPABILITIES', href: '#capabilities' },
  { label: 'PROCESS', href: '#process' },
  { label: 'STUDIO', href: '#studio' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Frame({ sceneLabel }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      // Section highlight
      const sections = NAV_LINKS.map((link) => link.href.substring(1))
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 pointer-events-auto ${
        scrolled ? 'bg-[#2E0D14]/90 backdrop-blur-md border-b border-[#EFE1D5]/10 py-4 px-6 md:px-10' : 'py-6 px-6 md:px-10'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-3 group z-10 cursor-pointer"
        >
          <Logo variant="dark" className="h-8 md:h-9 w-auto transition-transform duration-300 group-hover:scale-105" />
        </a>

        {/* Desktop Nav Links - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => {
            const id = link.href.substring(1)
            const isActive = activeSection === id
            return (
              <a
                key={link.label}
                href={link.href}
                className={`meta text-xs tracking-widest transition-all duration-300 flex items-center gap-1.5 ${
                  isActive ? 'text-[var(--almond-100)] font-semibold border-b border-[var(--almond-100)] pb-0.5' : 'text-[var(--almond-70)] hover:text-[var(--almond-100)]'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--almond-100)]" />}
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Action CTA & Scene Indicator */}
        <div className="flex items-center gap-4 z-10">
          <span className="hidden lg:inline-block meta text-[10px] tracking-widest text-[var(--almond-40)]">
            [{sceneLabel}]
          </span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-xs meta px-5 py-2 rounded-full border border-[var(--almond-40)] text-[var(--almond-100)] hover:bg-[var(--almond-100)] hover:border-[var(--almond-100)] transition-all duration-300 font-semibold shadow-sm hover:shadow-md cursor-pointer"
          >
            <span className="group-hover:text-[#2E0D14] transition-colors">START BUILDING</span>
            <span className="text-sm group-hover:text-[#2E0D14] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
          </a>
        </div>
      </div>
    </header>
  )
}

