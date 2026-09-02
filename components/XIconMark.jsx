import React from 'react';

export default function XIconMark({ 
  size = 24, 
  accentColor = 'var(--color-accent, #21b3d6)', 
  contrastColor = '#FFFFFF',
  className = '',
  style = {} 
}) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`x-icon-mark ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
    >
      <g>
        {/* Top-Left Leaf (Cyan/Accent) */}
        <g transform="rotate(-45, 16, 16)">
          <path 
            d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" 
            fill={accentColor} 
          />
        </g>
        
        {/* Bottom-Right Leaf (Cyan/Accent) */}
        <g transform="rotate(135, 16, 16)">
          <path 
            d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" 
            fill={accentColor} 
          />
        </g>
        
        {/* Top-Right Leaf (Contrast) */}
        <g transform="rotate(45, 16, 16)">
          <path 
            d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" 
            fill={contrastColor} 
          />
        </g>
        
        {/* Bottom-Left Leaf (Contrast) */}
        <g transform="rotate(-135, 16, 16)">
          <path 
            d="M 16 14.5 C 14.5 12, 12 7.5, 12 5.5 C 12 3.5, 14 2, 16 2 C 18 2, 20 3.5, 20 5.5 C 20 7.5, 17.5 12, 16 14.5 Z" 
            fill={contrastColor} 
          />
        </g>
        
        {/* Center Diamond */}
        <path d="M 16 12 L 20 16 L 16 20 L 12 16 Z" fill={contrastColor} />
      </g>
    </svg>
  );
}
