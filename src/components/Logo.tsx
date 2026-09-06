export default function Logo({
  variant = 'dark',
  className = 'h-8 w-auto',
}: {
  variant?: 'dark' | 'light' | 'icon'
  className?: string
}) {
  if (variant === 'icon') {
    return (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g>
          {/* Top-Left Leaf */}
          <g transform="rotate(-45, 16, 16)">
            <path d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" fill="currentColor" opacity="0.85" />
          </g>
          {/* Bottom-Right Leaf */}
          <g transform="rotate(135, 16, 16)">
            <path d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" fill="currentColor" opacity="0.85" />
          </g>
          {/* Top-Right Leaf */}
          <g transform="rotate(45, 16, 16)">
            <path d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" fill="currentColor" />
          </g>
          {/* Bottom-Left Leaf */}
          <g transform="rotate(-135, 16, 16)">
            <path d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" fill="currentColor" />
          </g>
          {/* Center Diamond */}
          <path d="M 16 12 L 20 16 L 16 20 L 12 16 Z" fill="currentColor" />
        </g>
      </svg>
    )
  }

  // Dark variant = Almond #EFE1D5 text on Coffee Bean #2E0D14
  // Light variant = Coffee Bean #2E0D14 text on Almond #EFE1D5
  const primaryColor = variant === 'light' ? '#2E0D14' : '#EFE1D5'
  const secondaryColor = variant === 'light' ? 'rgba(46, 13, 20, 0.70)' : 'rgba(239, 225, 213, 0.70)'

  return (
    <svg viewBox="0 0 145 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        {/* Top-Left Leaf */}
        <g transform="rotate(-45, 16, 16)">
          <path d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" fill={secondaryColor} />
        </g>
        
        {/* Bottom-Right Leaf */}
        <g transform="rotate(135, 16, 16)">
          <path d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" fill={secondaryColor} />
        </g>
        
        {/* Top-Right Leaf */}
        <g transform="rotate(45, 16, 16)">
          <path d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" fill={primaryColor} />
        </g>
        
        {/* Bottom-Left Leaf */}
        <g transform="rotate(-135, 16, 16)">
          <path d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" fill={primaryColor} />
        </g>
        
        {/* Center Diamond */}
        <path d="M 16 12 L 20 16 L 16 20 L 12 16 Z" fill={primaryColor} />
      </g>

      {/* Brand Text */}
      <text x="36" y="19" fill={primaryColor} fontFamily="Space Grotesk, system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="18" letterSpacing="0.05em">XPLORIX</text>
      <text x="36" y="29" fill={secondaryColor} fontFamily="Space Grotesk, system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="7" letterSpacing="0.42em">SOLUTIONS</text>
    </svg>
  )
}

