import React from 'react';
import Tag from './Tag';

export default function SectionHeading({ tag, title, subtitle, className = '' }) {
  return (
    <div className={`reveal ${className}`} style={{ marginBottom: 'var(--space-12)' }}>
      {tag && <Tag text={tag} style={{ marginBottom: 'var(--space-4)' }} />}
      <h2 className="heading-style-02 weight-medium" style={{ marginTop: tag ? 'var(--space-4)' : '0', marginBottom: subtitle ? 'var(--space-4)' : '0' }}>
        {title}
      </h2>
      {subtitle && <p className="text-xl text-secondary" style={{ maxWidth: '600px' }}>{subtitle}</p>}
    </div>
  );
}
