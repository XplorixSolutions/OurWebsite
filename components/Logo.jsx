import React from 'react';

export default function Logo({ width = 140, height = 32, showText = true }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 140 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="logo-svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* Icon Mark: Stylized X */}
      <g>
        {/* Top-Left Leaf (Cyan/Accent) */}
        <g transform="rotate(-45, 16, 16)">
          <path 
            d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" 
            fill="var(--color-accent, #21b3d6)" 
          />
        </g>
        
        {/* Bottom-Right Leaf (Cyan/Accent) */}
        <g transform="rotate(135, 16, 16)">
          <path 
            d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" 
            fill="var(--color-accent, #21b3d6)" 
          />
        </g>
        
        {/* Top-Right Leaf (White/Contrast) */}
        <g transform="rotate(45, 16, 16)">
          <path 
            d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" 
            fill="#FFFFFF" 
          />
        </g>
        
        {/* Bottom-Left Leaf (White/Contrast) */}
        <g transform="rotate(-135, 16, 16)">
          <path 
            d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" 
            fill="#FFFFFF" 
          />
        </g>
        
        {/* Center Diamond */}
        <path d="M 16 12 L 20 16 L 16 20 L 12 16 Z" fill="#FFFFFF" />
      </g>

      {/* Brand Text */}
      {showText && (
        <>
          <text 
            x="36" 
            y="19" 
            fill="#FFFFFF" 
            fontFamily="var(--font-display), system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="18" 
            letterSpacing="0.04em"
          >
            XPLORIX
          </text>
          <text 
            x="36" 
            y="29" 
            fill="var(--color-accent, #21b3d6)" 
            fontFamily="var(--font-body), system-ui, -apple-system, sans-serif" 
            fontWeight="600" 
            fontSize="7" 
            letterSpacing="0.45em"
          >
            SOLUTIONS
          </text>
        </>
      )}
    </svg>
  );
}
