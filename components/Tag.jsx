import React from 'react';
import XIconMark from './XIconMark';

export default function Tag({ text, variant = 'base' }) {
  return (
    <div className={`tag ${variant === 'dark' ? 'tag-dark' : ''}`}>
      <span className="tag-icon w-embed">
        <XIconMark size={16} contrastColor="currentColor" />
      </span>
      <div>{text}</div>
    </div>
  );
}
