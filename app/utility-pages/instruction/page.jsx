import React from 'react';

export const metadata = {
  title: 'Instructions - Xplorix Solutions',
  description: 'Template instructions and technical configurations guide for Xplorix Solutions.',
};

export default function Instruction() {
  return (
    <section className="utility-page reveal">
      <div className="container">
        <div className="utility-content">
          <h1>Instructions & Technical Architecture</h1>
          <p>Welcome to the Xplorix Solutions clone code documentation. This Next.js App Router application is designed to be highly modular, performant, and faithful to Xplorix Solutions&apos;s premium design parameters.</p>
          
          <div className="divider" style={{ margin: 'var(--space-12) 0' }}></div>
          
          <h2>CSS Custom Properties</h2>
          <p>Global theme colors, typography scales, spacing tokens, and border radii are declared as variables in the <code>globals.css</code> root. You can customize the look and feel of the site globally by editing these tokens.</p>

          <h2 style={{ marginTop: 'var(--space-10)' }}>GSAP & ScrollTrigger Animations</h2>
          <p>Animations are managed via standard CSS animations and IntersectionObserver triggers. To animate a section, simply add the <code>reveal</code> class to the element. You can append helper classes such as <code>reveal-delay-1</code> to orchestrate sequential reveals.</p>

          <h2 style={{ marginTop: 'var(--space-10)' }}>Lenis Smooth Scrolling</h2>
          <p>Smooth inertial scrolling is enabled globally. The layout is wrapped inside a custom client-side <code>LenisProvider</code> that manages requestAnimationFrame loops and scroll physics configurations.</p>
        </div>
      </div>
    </section>
  );
}
