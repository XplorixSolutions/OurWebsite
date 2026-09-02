'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import CTASection from '@/components/CTASection';
import NewsletterSection from '@/components/NewsletterSection';

import { jobs } from '@/data/jobs';

export default function JobDetail() {
  const { slug } = useParams();
  
  const job = jobs.find((j) => j.slug === slug);
  
  if (!job) {
    notFound();
  }

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
      {/* Job Hero */}
      <section className="page-hero reveal">
        <div className="container">
          <div className="page-hero-tag">
            <Tag text={job.department} />
          </div>
          <h1 className="heading-style-01">{job.title}</h1>
          <p className="page-hero-subtitle">
            {job.location} &middot; {job.type}
          </p>
        </div>
      </section>

      {/* Job Info Layout */}
      <section className="job-detail" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="job-detail-grid">
            {/* Left Content */}
            <div className="job-detail-content">
              <div className="reveal">
                <h2>Role Overview</h2>
                <p>{job.description}</p>
              </div>

              <div className="reveal" style={{ marginTop: 'var(--space-10)' }}>
                <h2>Responsibilities</h2>
                <ul>
                  {job.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="reveal" style={{ marginTop: 'var(--space-10)' }}>
                <h2>Requirements</h2>
                <ul>
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="reveal" style={{ marginTop: 'var(--space-10)' }}>
                <h2>Perks & Benefits</h2>
                <ul>
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar Form */}
            <div className="job-sidebar reveal">
              <div className="job-sidebar-card">
                <div className="job-sidebar-item">
                  <label>Salary Range</label>
                  <p>{job.salary}</p>
                </div>
                <div className="job-sidebar-item">
                  <label>Location</label>
                  <p>{job.location}</p>
                </div>
                <div className="job-sidebar-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                  <label>Role Status</label>
                  <p>Active Listing</p>
                </div>
              </div>

              {/* Application Form */}
              <div className="job-sidebar-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3 className="heading-style-05" style={{ marginBottom: 'var(--space-6)' }}>Apply for this role</h3>
                
                {formSubmitted ? (
                  <div className="text-accent text-s weight-medium">
                    Application submitted successfully! We will review your profile and get back to you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="form-group">
                    <div className="form-field">
                      <label>First Name</label>
                      <input type="text" placeholder="John" required disabled={submitting} />
                    </div>
                    <div className="form-field">
                      <label>Email Address</label>
                      <input type="email" placeholder="john@example.com" required disabled={submitting} />
                    </div>
                    <div className="form-field">
                      <label>Message / Cover Note</label>
                      <textarea placeholder="Tell us about yourself..." required disabled={submitting}></textarea>
                    </div>
                    <Button type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                      {submitting ? 'Submitting Application...' : 'Submit Application'}
                    </Button>
                  </form>
                )}
              </div>
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
