import React from 'react';
import Tag from '@/components/Tag';

export const metadata = {
  title: 'Changelog - Xplorix Solutions',
  description: 'Version and template changelog history for Xplorix Solutions.',
};

export default function Changelog() {
  return (
    <section className="utility-page reveal">
      <div className="container">
        <div className="utility-content">
          <h1>Template Changelog</h1>
          <p>Track releases, additions, and updates made to the Xplorix Solutions design system and layout models.</p>
          
          <div className="divider" style={{ margin: 'var(--space-12) 0' }}></div>
          
          {/* Version v1.0.0 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <span className="text-mono weight-semibold text-accent text-l">v1.0.0</span>
              <span className="text-muted text-s">&mdash; Initial Template Launch</span>
            </div>
            
            <p>Initial release of the Xplorix Solutions website template containing:</p>
            <ul>
              <li>Complete 31-page responsive layout and route mapping configurations.</li>
              <li>Sleek minimalist custom CSS system with responsive design scaling controls.</li>
              <li>Fully interactive client-side sorting modules for projects, dynamic billing toggle controls.</li>
              <li>Sticky navigational systems and infinite loop logo marquee animations.</li>
              <li>Custom modular component files for tags, action pill buttons, cards, and testimonial elements.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
