'use client';
import React, { useState } from 'react';

const iconPaths = {
  code: (
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  terminal: (
    <>
      <path d="M4 17l6-5-6-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 19h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </>
  ),
  palette: (
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.8-1.7 1.7-1.7H16c3.3 0 6-2.7 6-6 0-5-4.5-8.5-10-8.5zM6.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" />
  ),
  cloud: (
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  zap: (
    <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" fill="currentColor" />
  ),
  flag: (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="4" y1="22" x2="4" y2="15" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  trending: (
    <>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polyline points="17 6 23 6 23 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="2" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="21" r="1" fill="currentColor" />
      <circle cx="20" cy="21" r="1" fill="currentColor" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  shield: (
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  mobile: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z" fill="currentColor" />
      <path d="M5 15l.9 2.6L8.5 18.5l-2.6.9L5 22l-.9-2.6-2.6-.9 2.6-.9L5 15z" fill="currentColor" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 19h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="7" y="11" width="3" height="5" rx="1" fill="currentColor" />
      <rect x="12" y="7" width="3" height="9" rx="1" fill="currentColor" />
      <rect x="17" y="9" width="3" height="7" rx="1" fill="currentColor" />
    </>
  ),
  map: (
    <>
      <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M9 3v15M15 6v15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
};

export default function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`svc-card reveal ${isHovered ? 'svc-card--active' : ''}`}
      style={{ '--card-color': service.color, animationDelay: `${index * 0.06}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="svc-card__inner">
        {/* Icon */}
        <div className="svc-card__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            {iconPaths[service.icon]}
          </svg>
        </div>

        {/* Number + Title */}
        <div className="svc-card__header">
          <span className="svc-card__number">{service.number}.</span>
          <h3 className="svc-card__title">{service.title}</h3>
        </div>

        {/* Description — revealed on hover */}
        <div className="svc-card__body">
          <p className="svc-card__desc">{service.description}</p>
        </div>

        {/* Arrow button */}
        <div className="svc-card__arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
