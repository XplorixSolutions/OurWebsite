'use client';

import React, { useState } from 'react';
import Tag from '@/components/Tag';
import Button from '@/components/Button';

export default function PasswordProtected() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'xplorix') {
      alert('Unlocked!');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <section className="page-401 reveal">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Tag text="Protected Page" />
        <h1 className="heading-style-03" style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>Password Required</h1>
        <p className="text-secondary" style={{ marginBottom: 'var(--space-8)' }}>
          This page is password protected. Enter the password &ldquo;xplorix&rdquo; to unlock and preview this section.
        </p>
        
        <form onSubmit={handleSubmit} className="password-form">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '14px 20px',
              borderRadius: 'var(--radius-pill)',
              border: `1px solid ${error ? 'var(--color-accent)' : 'var(--color-border)'}`,
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text)',
              fontSize: 'var(--text-s)',
              outline: 'none',
              flex: 1,
            }}
          />
          <Button type="submit" variant="primary">
            Unlock
          </Button>
        </form>
        
        {error && (
          <p className="text-accent text-xs" style={{ marginTop: 'var(--space-3)' }}>
            Incorrect password. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
