import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative w-full px-6 md:px-10 pt-16 md:pt-24 pb-8 overflow-hidden" style={{ background: 'var(--almond-100)', color: 'var(--bean-100)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Top Grid: Brand & Tagline (Left) + Multi-Column Links (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-block group"
            >
              <Logo variant="light" className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            </a>
            <p className="text-xs md:text-sm text-[var(--bean-70)] max-w-sm leading-relaxed font-normal">
              Xplorix is a full-service digital systems agency specializing in bespoke web architectures, mobile products, and custom enterprise software.
            </p>
          </div>

          {/* 4-Column Navigation Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">

            {/* Column 1: Quick Links */}
            <div>
              <h4 className="meta text-[11px] tracking-[0.15em] text-[var(--bean-100)] font-semibold mb-4">
                QUICK LINKS
              </h4>
              <ul className="space-y-2.5 text-xs text-[var(--bean-70)]">
                <li><a href="#top" className="hover:text-[var(--bean-100)] transition-colors">Home</a></li>
                <li><a href="#capabilities" className="hover:text-[var(--bean-100)] transition-colors">Capabilities</a></li>
                <li><a href="#work" className="hover:text-[var(--bean-100)] transition-colors">Work</a></li>
                <li><a href="#process" className="hover:text-[var(--bean-100)] transition-colors">Process</a></li>
                <li><a href="#studio" className="hover:text-[var(--bean-100)] transition-colors">Studio</a></li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="meta text-[11px] tracking-[0.15em] text-[var(--bean-100)] font-semibold mb-4">
                SERVICES
              </h4>
              <ul className="space-y-2.5 text-xs text-[var(--bean-70)]">
                <li><a href="#capabilities" className="hover:text-[var(--bean-100)] transition-colors">Web Systems</a></li>
                <li><a href="#capabilities" className="hover:text-[var(--bean-100)] transition-colors">Mobile Products</a></li>
                <li><a href="#capabilities" className="hover:text-[var(--bean-100)] transition-colors">Product Design</a></li>
                <li><a href="#capabilities" className="hover:text-[var(--bean-100)] transition-colors">AI & Data</a></li>
                <li><a href="#capabilities" className="hover:text-[var(--bean-100)] transition-colors">Commerce</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="meta text-[11px] tracking-[0.15em] text-[var(--bean-100)] font-semibold mb-4">
                COMPANY
              </h4>
              <ul className="space-y-2.5 text-xs text-[var(--bean-70)]">
                <li><a href="#studio" className="hover:text-[var(--bean-100)] transition-colors">About Us</a></li>
                <li><a href="#work" className="hover:text-[var(--bean-100)] transition-colors">Build System</a></li>
                <li><a href="#contact" className="hover:text-[var(--bean-100)] transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-[var(--bean-100)] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[var(--bean-100)] transition-colors">License</a></li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div>
              <h4 className="meta text-[11px] tracking-[0.15em] text-[var(--bean-100)] font-semibold mb-4">
                SOCIAL
              </h4>
              <ul className="space-y-2.5 text-xs text-[var(--bean-70)]">
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[var(--bean-100)] transition-colors">LinkedIn</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[var(--bean-100)] transition-colors">Instagram</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[var(--bean-100)] transition-colors">GitHub</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[var(--bean-100)] transition-colors">Twitter / X</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider & Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-16 pt-6 border-t border-[var(--bean-20)] text-[11px] text-[var(--bean-70)] gap-4">
          <span>&copy; {new Date().getFullYear()} XPLORIX SOLUTIONS. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED & ENGINEERED BY TEAM XPLORIX</span>
        </div>

        {/* Bottom Oversized Watermark Wordmark */}
        <div className="w-full pt-6 text-center pointer-events-none select-none">
          <h2
            className="font-medium tracking-tighter leading-none bg-gradient-to-t from-[#2E0D14] via-[#2E0D14]/40 to-transparent bg-clip-text text-transparent whitespace-nowrap"
            style={{ fontSize: 'clamp(32px, 8.8vw, 175px)' }}
          >
            XPLORIX SOLUTIONS
          </h2>
        </div>

      </div>
    </footer>
  )
}



