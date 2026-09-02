'use client';

import React, { useState } from 'react';
import Button from './Button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    // Simulate API subscription
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content reveal">
          <div className="newsletter-left">
            <h3>Subscribe to our newsletter</h3>
            <p>Get technology insights, digital solutions updates, and practical business tips delivered to your inbox.</p>
          </div>
          
          {status === 'success' ? (
            <div className="text-accent text-l weight-medium">
              Thank you! You have successfully subscribed to our newsletter.
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                required
              />
              <Button type="submit" variant="primary" disabled={status === 'loading'}>
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
