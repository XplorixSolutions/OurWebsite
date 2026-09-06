export default function Studio() {
  return (
    <section id="studio" className="relative w-full py-24 md:py-36 px-6 md:px-10" style={{ background: 'var(--bean-100)' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Column: Studio Copy */}
        <div>
          <p className="meta text-[11px] tracking-[0.2em] text-[var(--almond-40)] mb-3">OUR STUDIO</p>
          <h2
            className="font-medium tracking-tight leading-tight text-[var(--almond-100)] mb-8"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            THE PEOPLE<br />BEHIND THE PIXELS.
          </h2>

          {/* Main Body Text */}
          <div className="text-base md:text-lg lg:text-xl text-[var(--almond-90)] leading-relaxed font-normal">
            <p>
              Xplorix is a senior collective of strategists, creative directors, and systems engineers who craft high-performance digital products. We don&rsquo;t farm out work, split responsibilities into silos, or rely on generic templates.
            </p>
          </div>

          {/* Action Row — 100% High-Contrast Visible Button */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="meta text-[12px] tracking-[0.15em] font-semibold px-8 py-4 rounded-full shadow-xl transition-all inline-flex items-center gap-2 group cursor-pointer"
              style={{ background: 'var(--almond-100)', color: '#2E0D14' }}
            >
              <span>MEET THE STUDIO</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
            <span className="meta text-[11px] tracking-[0.15em] text-[var(--almond-40)]">
              KARACHI / REMOTE
            </span>
          </div>
        </div>

        {/* Right Column: Studio Photography Visual */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[var(--almond-12)] group">
          <img
            src="/images/14.png"
            alt="Xplorix Design & Engineering Studio"
            className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  )
}



