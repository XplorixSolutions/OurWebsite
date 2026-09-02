'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Tag from '@/components/Tag';
import XIconMark from '@/components/XIconMark';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';
import NewsletterSection from '@/components/NewsletterSection';

import { projects } from '@/data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  // Get other projects excluding current
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Project Hero Header */}
      <section className="project-detail-header reveal">
        <div className="container">
          <Tag text={project.category} />
          <h1 className="heading-style-01" style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
            {project.title}
          </h1>
          
          <div className="project-detail-meta">
            <div className="project-detail-meta-item">
              <label>Year</label>
              <p>{project.year}</p>
            </div>
            <div className="project-detail-meta-item">
              <label>Timeline</label>
              <p>{project.timeline}</p>
            </div>
            <div className="project-detail-meta-item">
              <label>Services</label>
              <p>{project.services.join(', ')}</p>
            </div>
            <div className="project-detail-meta-item">
              <label>Client</label>
              <p>Xplorix Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Grid */}
      <section className="section-sm">
        <div className="container">
          <div className="project-hero-image reveal">
            {project.heroImage ? (
              <img src={project.heroImage} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, ${project.color || '#333'} 0%, #0E0E0E 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--text-6xl)',
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-display)',
                  color: 'rgba(255,255,255,0.03)',
                  letterSpacing: '0.15em',
                }}
              >
                {project.title.toUpperCase()}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Story: Challenge & Solution */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="project-detail-body">
            <div className="reveal">
              <h2>The Challenge</h2>
              <p>{project.challenge}</p>
            </div>
            
            <div className="reveal" style={{ marginTop: 'var(--space-12)' }}>
              <h2>Our Solution</h2>
              <p>{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Gallery Mockups */}
      <section className="section-sm" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="project-images-grid">
            {project.images && project.images[0] ? (
              <div className="reveal" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: '300px' }}>
                <img src={project.images[0]} alt="Mockup 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ) : (
              <div className="project-preview-panel reveal">
                <span>{project.title}</span>
                <strong>Interface direction</strong>
              </div>
            )}
            {project.images && project.images[1] ? (
              <div className="reveal reveal-delay-1" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: '300px' }}>
                <img src={project.images[1]} alt="Mockup 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ) : (
              <div className="project-preview-panel reveal reveal-delay-1">
                <span>{project.category}</span>
                <strong>Delivery system</strong>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Signals */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
            <Tag text="What Improved" />
            <h2 className="heading-style-02" style={{ marginTop: 'var(--space-4)' }}>The work behind the result</h2>
          </div>
          
          <div className="project-results-grid">
            {project.results.map((res, index) => (
              <div key={index} className={`project-result-item reveal reveal-delay-${index}`}>
                <div className="project-result-value" style={{ color: project.color || 'var(--color-accent)' }}>
                  {res.value}
                </div>
                <div className="project-result-label">{res.label}</div>
                <div className="project-result-desc">{res.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
          <div className="container">
            <div className="reveal" style={{ marginBottom: 'var(--space-8)' }}>
              <Tag text="Testimonial" />
            </div>
            <div className="testimonial-card reveal" style={{ background: 'var(--color-bg)' }}>
              <div className="testimonial-quote">
                &ldquo;{project.testimonial.quote}&rdquo;
              </div>
              <div className="testimonial-author">
                <div 
                  className="testimonial-avatar" 
                  style={{ 
                    background: '#1a1a1a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(33, 179, 214, 0.3)',
                  }}
                >
                  <XIconMark size={24} />
                </div>
                <div className="testimonial-author-info">
                  <h4>{project.testimonial.author}</h4>
                  <p>{project.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Projects Section */}
      <section className="other-projects">
        <div className="container">
          <h2 className="reveal">Other Projects</h2>
          <div className="projects-grid">
            {otherProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
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
