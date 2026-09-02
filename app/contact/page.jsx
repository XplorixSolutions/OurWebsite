'use client';

import React, { useState } from 'react';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import CTASection from '@/components/CTASection';
import NewsletterSection from '@/components/NewsletterSection';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero reveal">
        <div className="container">
          <div className="page-hero-tag">
            <Tag text="Contact" />
          </div>
          <h1 className="heading-style-01">Let&apos;s Build Something</h1>
          <p className="page-hero-subtitle">
            Have a project in mind? Need a technology partner for your business? Reach out and we will discuss how Xplorix Solutions can help.
          </p>
        </div>
      </section>

      {/* Contact Form and Details Grid */}
      <section className="contact-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-grid">
            {/* Info Column */}
            <div className="contact-info reveal">
              <div className="contact-info-item">
                <h3>General Inquiries</h3>
                <a href="mailto:hello@xplorixsolutions.com">hello@xplorixsolutions.com</a>
              </div>
              <div className="contact-info-item">
                <h3>Careers</h3>
                <a href="mailto:careers@xplorixsolutions.com">careers@xplorixsolutions.com</a>
              </div>
              <div className="contact-info-item">
                <h3>Website</h3>
                <a href="https://www.xplorixsolutions.com" target="_blank" rel="noopener noreferrer">www.xplorixsolutions.com</a>
              </div>
            </div>

            {/* Form Column */}
            <div className="reveal">
              {formSubmitted ? (
                <div className="text-accent text-l weight-medium" style={{ padding: 'var(--space-8) 0' }}>
                  Thank you! Your message has been received successfully. Our team will review your inquiry and reach out within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form-group">
                  <div className="form-field">
                    <label>Name</label>
                    <input type="text" placeholder="Your full name" required disabled={submitting} />
                  </div>
                  <div className="form-field">
                    <label>Email Address</label>
                    <input type="email" placeholder="your@email.com" required disabled={submitting} />
                  </div>
                  <div className="form-field">
                    <label>How can we help?</label>
                    <textarea placeholder="Describe your project, requirements, and timeline..." required disabled={submitting}></textarea>
                  </div>
                  <Button type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                    {submitting ? 'Sending Message...' : 'Submit Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA and Newsletter */}
      <CTASection />
      <NewsletterSection />
    </>
  );
}
