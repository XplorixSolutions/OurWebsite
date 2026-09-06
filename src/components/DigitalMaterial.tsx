interface Props {
  variant?: 'sculpture' | 'grid' | 'wireframe' | 'particles' | 'tiles' | 'nodes' | 'paths' | 'app'
  className?: string
}

/**
 * The recurring visual motif of the site: a single abstract "digital material"
 * rendered in pure SVG using only the Coffee Bean / Almond palette. Different
 * variants represent the same material at different stages of transformation
 * (signal -> structure -> interface -> product -> system -> impact), per the
 * central creative concept. No stock photography is used.
 */
export default function DigitalMaterial({ variant = 'sculpture', className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 800 1000"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--almond-100)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--almond-100)" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="panelGradSoft" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--almond-100)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--almond-100)" stopOpacity="0.02" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="var(--almond-100)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--almond-100)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="800" height="1000" fill="url(#glow)" />

      {variant === 'sculpture' && (
        <g>
          <polygon points="400,120 620,340 520,780 300,860 180,520" fill="url(#panelGrad)" opacity="0.5" />
          <polygon points="360,180 560,300 480,640 280,700" fill="none" stroke="var(--almond-100)" strokeOpacity="0.35" strokeWidth="1" />
          <polygon points="300,260 500,420 430,760 240,780 200,460" fill="url(#panelGradSoft)" />
          <line x1="180" y1="520" x2="620" y2="340" stroke="var(--almond-100)" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="300" y1="860" x2="400" y2="120" stroke="var(--almond-100)" strokeOpacity="0.15" strokeWidth="1" />
          <circle cx="430" cy="470" r="3" fill="var(--almond-100)" />
        </g>
      )}

      {variant === 'grid' && (
        <g stroke="var(--almond-100)" strokeOpacity="0.3" strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={100 + i * 75} y1="120" x2={100 + i * 75} y2="880" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="100" y1={120 + i * 95} x2="700" y2={120 + i * 95} />
          ))}
          <rect x="250" y="310" width="300" height="380" fill="url(#panelGradSoft)" stroke="var(--almond-100)" strokeOpacity="0.4" />
        </g>
      )}

      {variant === 'wireframe' && (
        <g fill="none" stroke="var(--almond-100)" strokeOpacity="0.45" strokeWidth="1">
          <rect x="220" y="200" width="360" height="600" rx="2" />
          <line x1="220" y1="290" x2="580" y2="290" />
          <line x1="220" y1="420" x2="580" y2="420" strokeOpacity="0.25" />
          <line x1="220" y1="560" x2="580" y2="560" strokeOpacity="0.25" />
          <rect x="250" y="330" width="140" height="60" strokeOpacity="0.6" />
          <rect x="410" y="330" width="140" height="60" strokeOpacity="0.6" />
          <circle cx="400" cy="240" r="6" fill="var(--almond-100)" fillOpacity="0.6" />
        </g>
      )}

      {variant === 'particles' && (
        <g fill="var(--almond-100)">
          {Array.from({ length: 90 }).map((_, i) => {
            const x = 120 + ((i * 53) % 560)
            const y = 160 + ((i * 97) % 700)
            const r = 1 + ((i * 7) % 3)
            return <circle key={i} cx={x} cy={y} r={r} opacity={0.2 + ((i % 5) * 0.12)} />
          })}
          <path d="M150,850 C300,600 500,500 650,220" fill="none" stroke="var(--almond-100)" strokeOpacity="0.3" strokeWidth="1" />
        </g>
      )}

      {variant === 'tiles' && (
        <g>
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <rect
                key={`${row}-${col}`}
                x={150 + col * 110}
                y={260 + row * 140}
                width="92"
                height="120"
                fill="url(#panelGradSoft)"
                stroke="var(--almond-100)"
                strokeOpacity="0.25"
              />
            ))
          )}
        </g>
      )}

      {variant === 'nodes' && (
        <g stroke="var(--almond-100)" strokeOpacity="0.4" fill="var(--almond-100)">
          <line x1="200" y1="500" x2="400" y2="260" strokeWidth="1" />
          <line x1="200" y1="500" x2="400" y2="740" strokeWidth="1" />
          <line x1="400" y1="260" x2="620" y2="360" strokeWidth="1" />
          <line x1="400" y1="740" x2="620" y2="640" strokeWidth="1" />
          <line x1="620" y1="360" x2="620" y2="640" strokeWidth="1" opacity="0.4" />
          <circle cx="200" cy="500" r="7" />
          <circle cx="400" cy="260" r="5" fillOpacity="0.8" />
          <circle cx="400" cy="740" r="5" fillOpacity="0.8" />
          <circle cx="620" cy="360" r="5" fillOpacity="0.6" />
          <circle cx="620" cy="640" r="5" fillOpacity="0.6" />
        </g>
      )}

      {variant === 'paths' && (
        <g fill="none" stroke="var(--almond-100)" strokeOpacity="0.4" strokeWidth="1">
          <path d="M180,180 C320,260 260,420 420,480 C560,540 500,700 640,820" />
          <path d="M180,820 C320,740 260,580 420,520 C560,460 500,300 640,180" opacity="0.5" />
          <circle cx="180" cy="180" r="4" fill="var(--almond-100)" />
          <circle cx="640" cy="820" r="4" fill="var(--almond-100)" />
        </g>
      )}

      {variant === 'app' && (
        <g>
          <rect x="160" y="150" width="480" height="700" rx="4" fill="url(#panelGradSoft)" stroke="var(--almond-100)" strokeOpacity="0.35" />
          <rect x="196" y="196" width="180" height="14" fill="var(--almond-100)" fillOpacity="0.7" />
          <rect x="196" y="230" width="408" height="1" fill="var(--almond-100)" fillOpacity="0.2" />
          {Array.from({ length: 5 }).map((_, i) => (
            <rect key={i} x="196" y={266 + i * 92} width="408" height="70" fill="var(--almond-100)" fillOpacity={0.06 + (i % 2) * 0.05} stroke="var(--almond-100)" strokeOpacity="0.15" />
          ))}
        </g>
      )}
    </svg>
  )
}
