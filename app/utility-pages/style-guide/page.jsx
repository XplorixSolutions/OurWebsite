import React from 'react';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Style Guide - Xplorix Solutions',
  description: 'Style guide and visual assets for the Xplorix Solutions template.',
};

export default function StyleGuide() {
  return (
    <section className="utility-page reveal">
      <div className="container">
        <div className="utility-content">
          <h1>Style Guide</h1>
          <p>This style guide provides an overview of the design elements, components, and typography styles used across the Xplorix Solutions template.</p>
          
          <div className="divider" style={{ margin: 'var(--space-12) 0' }}></div>
          
          {/* Typography Specimens */}
          <h2>Typography</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', marginTop: 'var(--space-6)' }}>
            <div>
              <label className="text-mono text-muted text-xs" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Display Heading 01 (Stack Sans Headline)</label>
              <h1 className="heading-style-01">Legacy Branding</h1>
            </div>
            <div>
              <label className="text-mono text-muted text-xs" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Display Heading 02 (Stack Sans Headline)</label>
              <h2 className="heading-style-02">Creative Engineering</h2>
            </div>
            <div>
              <label className="text-mono text-muted text-xs" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Display Heading 03 (Stack Sans Headline)</label>
              <h3 className="heading-style-03">Insights & Analytics</h3>
            </div>
            <div>
              <label className="text-mono text-muted text-xs" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Body Copy Large (Geist)</label>
              <p className="text-l">We build deep strategic alignments and craft next-generation interfaces.</p>
            </div>
            <div>
              <label className="text-mono text-muted text-xs" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Body Copy Standard (Geist)</label>
              <p className="text-base">We operate as a high-trust, cross-functional collective of designers, strategy leads, and creative engineers. This eliminates friction and allows us to launch premium platforms at speed.</p>
            </div>
          </div>

          <div className="divider" style={{ margin: 'var(--space-12) 0' }}></div>

          {/* Color Palette */}
          <h2>Color System</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'var(--space-4)',
              marginTop: 'var(--space-6)',
            }}
          >
            <div>
              <div style={{ height: '80px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}></div>
              <p className="text-s weight-medium" style={{ marginTop: 'var(--space-2)' }}>Background</p>
              <span className="text-xs text-muted">#0E0E0E</span>
            </div>
            <div>
              <div style={{ height: '80px', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}></div>
              <p className="text-s weight-medium" style={{ marginTop: 'var(--space-2)' }}>Surface</p>
              <span className="text-xs text-muted">#161616</span>
            </div>
            <div>
              <div style={{ height: '80px', backgroundColor: 'var(--color-accent)', borderRadius: 'var(--radius-md)' }}></div>
              <p className="text-s weight-medium" style={{ marginTop: 'var(--space-2)' }}>Accent</p>
              <span className="text-xs text-muted">#21B3D6</span>
            </div>
            <div>
              <div style={{ height: '80px', backgroundColor: 'var(--color-text)', borderRadius: 'var(--radius-md)' }}></div>
              <p className="text-s weight-medium" style={{ marginTop: 'var(--space-2)' }}>Text Primary</p>
              <span className="text-xs text-muted">#FFFFFF</span>
            </div>
          </div>

          <div className="divider" style={{ margin: 'var(--space-12) 0' }}></div>

          {/* Component Buttons */}
          <h2>Interactive Elements</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              marginTop: 'var(--space-6)',
            }}
          >
            <Button variant="primary">Primary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost link</Button>
            <Tag text="Tag Component" />
          </div>
        </div>
      </div>
    </section>
  );
}
