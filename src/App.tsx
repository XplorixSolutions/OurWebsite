import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './lib/useReducedMotion'
import { useLenis } from './lib/useLenis'
import Frame from './components/Frame'
import Menu from './components/Menu'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import Statement from './components/Statement'
import Capabilities from './components/Capabilities'
import Projects from './components/Projects'
import BuildSystem from './components/BuildSystem'
import TechMarquee from './components/TechMarquee'
import Process from './components/Process'
import Studio from './components/Studio'
import Testimonials from './components/Testimonials'
import VisualBreak from './components/VisualBreak'
import FinalCTA from './components/FinalCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RioChatbot from './components/RioChatbot'

const SECTION_IDS = ['top', 'capabilities', 'work', 'process', 'studio', 'contact']

function App() {
  const reducedMotion = useReducedMotion()
  useLenis(reducedMotion)

  const [loaded, setLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [sceneIndex, setSceneIndex] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loaded) return
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.findIndex((el) => el === entry.target)
            if (idx !== -1) setSceneIndex(idx)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [loaded])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <a href="#top" className="skip-link">Skip to content</a>

      <Preloader reducedMotion={reducedMotion} onDone={() => setLoaded(true)} />

      <Frame
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        sceneLabel={String(sceneIndex + 1).padStart(2, '0')}
      />

      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main ref={mainRef} id="main">
        <Hero reducedMotion={reducedMotion} onOpenChat={() => setChatOpen(true)} />
        <Statement reducedMotion={reducedMotion} />
        <Capabilities reducedMotion={reducedMotion} />
        <Projects />
        <BuildSystem reducedMotion={reducedMotion} />
        <TechMarquee />
        <Process reducedMotion={reducedMotion} />
        <Studio />
        <Testimonials reducedMotion={reducedMotion} />
        <VisualBreak reducedMotion={reducedMotion} />
        <FinalCTA reducedMotion={reducedMotion} />
        <Contact />
        <Footer />
      </main>

      <RioChatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  )
}

export default App
