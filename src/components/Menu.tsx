import { useState } from 'react'
import DigitalMaterial from './DigitalMaterial'
import Logo from './Logo'

const ITEMS: { label: string; href: string; variant: 'wireframe' | 'tiles' | 'nodes' | 'paths' | 'app' }[] = [
  { label: 'WORK', href: '#work', variant: 'tiles' },
  { label: 'CAPABILITIES', href: '#capabilities', variant: 'wireframe' },
  { label: 'PROCESS', href: '#process', variant: 'paths' },
  { label: 'STUDIO', href: '#studio', variant: 'nodes' },
  { label: 'CONTACT', href: '#contact', variant: 'app' },
]

export default function Menu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div
      id="site-index"
      className="fixed inset-0 z-30 flex flex-col justify-center transition-all duration-700"
      style={{
        background: 'var(--almond-100)',
        color: 'var(--bean-100)',
        clipPath: open ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
        pointerEvents: open ? 'auto' : 'none',
        transitionTimingFunction: 'var(--ease-cinematic)',
      }}
      aria-hidden={!open}
    >
      {/* Top Header inside Menu */}
      <div className="absolute top-6 left-6 md:left-16 right-6 md:right-16 flex items-center justify-between pointer-events-auto">
        <Logo variant="light" className="h-7 md:h-8 w-auto" />
        <span className="meta text-xs opacity-60">INDEX OVERLAY</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-end pr-10 md:pr-24 opacity-30 pointer-events-none">
        {hovered !== null && (
          <DigitalMaterial variant={ITEMS[hovered].variant} className="w-[40vw] max-w-[520px]" />
        )}
      </div>

      <nav className="relative px-6 md:px-16 mt-12">
        <ul>
          {ITEMS.map((item, i) => (
            <li key={item.label} className="border-b border-[var(--bean-20)]">
              <a
                href={item.href}
                onClick={onClose}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-baseline justify-between py-4 md:py-6 group"
              >
                <span
                  className="font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-3"
                  style={{ fontSize: 'clamp(40px, 8vw, 96px)' }}
                >
                  {item.label}
                </span>
                <span className="meta opacity-50">{`0${i + 1} / 0${ITEMS.length}`}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-8 left-6 md:left-16 meta opacity-60">KARACHI / REMOTE</div>
      <div className="absolute bottom-8 right-6 md:right-16 meta opacity-60">HELLO@XPLORIX.STUDIO</div>
    </div>
  )
}

