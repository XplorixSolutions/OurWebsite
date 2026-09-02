import React from 'react';
import Tag from '@/components/Tag';
import SectionHeading from '@/components/SectionHeading';
import JobCard from '@/components/JobCard';
import CTASection from '@/components/CTASection';
import NewsletterSection from '@/components/NewsletterSection';

import { jobs } from '@/data/jobs';

export const metadata = {
  title: 'Careers — Xplorix Solutions',
  description: 'Join the Xplorix Solutions team. Explore open positions in UI/UX design, web development, software engineering, graphic design, and project coordination.',
};

export default function CareerIndex() {
  const benefits = [
    { title: 'Growth & Learning', desc: 'Professional development opportunities and exposure to diverse projects across industries.' },
    { title: 'Flexible Work', desc: 'Remote and on-site options with flexible working arrangements.' },
    { title: 'Modern Tools', desc: 'Latest development and design tools provided for your role.' },
    { title: 'Team Culture', desc: 'Collaborative, growth-oriented environment where every team member contributes.' },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero reveal">
        <div className="container">
          <div className="page-hero-tag">
            <Tag text="Careers" />
          </div>
          <h1 className="heading-style-01">Join Our Team</h1>
          <p className="page-hero-subtitle">
            We are looking for designers, developers, engineers, and coordinators who want to build practical digital solutions for real businesses.
          </p>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="section-sm" style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="container">
          <SectionHeading
            tag="Openings"
            title="Available Roles"
            subtitle="Explore our active listings below. Click on a listing to see requirements and submit your application."
          />
          
          <div className="job-list">
            {jobs.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Culture */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <SectionHeading
            tag="Our Culture"
            title="Why Xplorix Solutions?"
            subtitle="We believe in building a team that grows together through meaningful work on real digital projects."
          />
          
          <div className="foundation-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="foundation-card reveal">
                <h3 className="heading-style-05">{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA and Newsletter */}
      <CTASection />
      <NewsletterSection />
    </>
  );
}
