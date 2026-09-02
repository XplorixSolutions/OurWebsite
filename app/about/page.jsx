import React from 'react';
import Tag from '@/components/Tag';
import XIconMark from '@/components/XIconMark';
import SectionHeading from '@/components/SectionHeading';
import TeamCard from '@/components/TeamCard';
import CTASection from '@/components/CTASection';
import NewsletterSection from '@/components/NewsletterSection';

import { team, processSteps } from '@/data/site';

export const metadata = {
  title: 'About — Xplorix Solutions',
  description: 'Learn about Xplorix Solutions — a technology and digital solutions company helping businesses build, improve, and manage their digital presence.',
};

export default function About() {
  const foundationCards = [
    {
      title: 'Mission',
      description: 'Turn unclear requirements, manual work, and scattered digital tools into systems people can actually use.',
    },
    {
      title: 'Useful First',
      description: 'Every recommendation has to earn its place through business value, usability, maintainability, or speed.',
    },
    {
      title: 'Complete Delivery',
      description: 'Strategy, design, development, deployment, and support stay connected so the project does not lose shape between teams.',
    },
    {
      title: 'Built To Fit',
      description: 'The process flexes around the client, the workflow, and the stage of the business instead of forcing every project through one template.',
    },
    {
      title: 'Long-Term Scalability',
      description: 'We engineer modular architectures and clean codebases designed to expand reliably as your business and operational demands scale.',
    },
    {
      title: 'Transparent Partnership',
      description: 'Direct communication, predictable delivery sprints, and open feedback loops ensure full alignment from initial discovery to deployment.',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero reveal">
        <div className="container">
          <div className="page-hero-tag">
            <Tag text="About Us" />
          </div>
          <h1 className="heading-style-01">Digital Solutions Hub</h1>
          <p className="page-hero-subtitle">
            Xplorix Solutions brings product thinking, visual design, software development, infrastructure, and support into one practical digital partner.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-content">
            <div className="about-left reveal">
              <Tag text="Who We Are" />
              <div style={{ marginTop: 'var(--space-6)' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: 'var(--radius-lg)',
                    background: '#1a1a1a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(33, 179, 214, 0.3)',
                  }}
                >
                  <XIconMark size={44} />
                </div>
              </div>
            </div>
            
            <div className="about-right reveal reveal-delay-1">
              <p>We help teams replace scattered digital work with websites, systems, brand assets, dashboards, automation, and support that feel coherent from the first click to the daily workflow.</p>
              <p className="secondary">The work starts with the business reality: who uses the system, what must improve, what needs to be launched first, and how the product should keep evolving after release.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Counter Grid */}
      <section className="counter-section">
        <div className="container">
          <div className="counter-grid">
            <div className="counter-item reveal">
              <div className="counter-number">15</div>
              <div className="counter-label">Service Tracks</div>
              <div className="counter-description">Web, software, design, commerce, automation, AI, data, brand, growth, and support.</div>
            </div>
            <div className="counter-item reveal reveal-delay-1">
              <div className="counter-number">Plan</div>
              <div className="counter-label">Before Build</div>
              <div className="counter-description">Problems, users, scope, content, technology, and launch priorities are clarified early.</div>
            </div>
            <div className="counter-item reveal reveal-delay-2">
              <div className="counter-number">Ship</div>
              <div className="counter-label">With Structure</div>
              <div className="counter-description">Interfaces, databases, APIs, CMS logic, dashboards, and deployment are treated as one system.</div>
            </div>
            <div className="counter-item reveal reveal-delay-3">
              <div className="counter-number">Grow</div>
              <div className="counter-label">After Launch</div>
              <div className="counter-description">Maintenance, performance checks, new content, feature improvements, and technical support stay available.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach / Process Section */}
      <section className="section process-section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="process-header">
            <SectionHeading
              tag="Our Approach"
              title="From sharp brief to stable release"
              subtitle="A focused method for turning business context into screens, systems, integrations, and launch support that hold together."
            />
          </div>
          
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card reveal">
                <div className="process-day">{step.day}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Wall */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: 'var(--space-8)' }}>
            <Tag text="What We Do" />
          </div>
          <div className="client-wall">
            {[
              'WEB DEVELOPMENT',
              'CUSTOM SOFTWARE',
              'UI/UX DESIGN',
              'E-COMMERCE',
              'BRANDING',
              'AI WORKFLOWS',
              'DATA DASHBOARDS',
              'SECURITY CARE',
              'MOBILE APP DEV',
              'CLOUD ARCHITECTURE',
              'API INTEGRATIONS',
              'SAAS PLATFORMS',
              'DEVOPS & CI/CD',
              'PERFORMANCE TUNING',
              'DESIGN SYSTEMS',
              'MOTION & 3D DESIGN',
              'HEADLESS CMS',
              'AUTOMATION BOTS',
              'SEO & GROWTH STRATEGY',
              'PRODUCT DISCOVERY',
              'INTERACTION DESIGN',
              'DATABASE ARCHITECTURE',
              'AI & LLM AGENTS',
              'MICROSERVICES',
              'CONVERSION OPTIMIZATION',
              'QA & TEST AUTOMATION',
              'TECHNICAL AUDITING',
              'MAINTENANCE & SLA',
            ].map((service, index) => (
              <div key={index} className="client-wall-item">
                <div className="text-mono text-s text-muted">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Foundation Section */}
      <section className="section">
        <div className="container">
          <div className="process-header">
            <SectionHeading
              tag="Our Foundation"
              title="Principles that guide our work"
            />
          </div>
          
          <div className="foundation-grid">
            {foundationCards.map((card, index) => (
              <div key={index} className="foundation-card reveal">
                <h3 className="heading-style-05">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <SectionHeading
            tag="Team"
            title="Our multidisciplinary team"
            subtitle="Different specialists working together depending on the project."
          />
          
          <div className="team-grid">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
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
