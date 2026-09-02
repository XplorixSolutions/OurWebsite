'use client';

import React, { useState } from 'react';
import Tag from '@/components/Tag';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';
import NewsletterSection from '@/components/NewsletterSection';

import { projects } from '@/data/projects';

export default function ProjectsIndex() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Architecture Web Design', 'Digital Brand System', 'Workflow Automation', 'Luxury E-Commerce', 'Creative Technology'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero reveal">
        <div className="container">
          <div className="page-hero-tag">
            <Tag text="Our Work" />
          </div>
          <h1 className="heading-style-01">Selected Creations</h1>
          <p className="page-hero-subtitle">
            Explore our portfolio of premium web interfaces, design systems, and digital product designs crafted for global startups and enterprises.
          </p>
        </div>
      </section>

      {/* Projects Grid and Filtering */}
      <section className="section-sm" style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="container">
          {/* Category Filters */}
          <div
            className="reveal"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-12)',
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: 'var(--space-6)',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  if (typeof window !== 'undefined') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    if (window.__lenis) {
                      window.__lenis.scrollTo(0);
                    }
                  }
                }}
                className={`tag ${activeFilter === cat ? 'tag-dark' : ''}`}
                style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project List */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
            
            {filteredProjects.length === 0 && (
              <div className="text-muted text-xl reveal" style={{ gridColumn: '1 / -1', padding: 'var(--space-12) 0' }}>
                No projects found in this category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA and Newsletter */}
      <CTASection />
      <NewsletterSection />
    </>
  );
}
