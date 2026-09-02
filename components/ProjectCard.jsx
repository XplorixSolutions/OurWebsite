import React from 'react';
import Link from 'next/link';

export default function ProjectCard({ project, isFeatured = false }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`project-card ${isFeatured ? 'project-card-featured' : ''} reveal`}
    >
      <div className="project-card-image">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: project.color || 'var(--color-surface-hover)',
              background: `linear-gradient(135deg, ${project.color || '#333'} 0%, #0E0E0E 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'var(--text-3xl)',
              fontWeight: 'bold',
              fontFamily: 'var(--font-display)',
              color: 'rgba(255,255,255,0.05)',
              letterSpacing: '0.1em',
            }}
          >
            {project.title.toUpperCase()}
          </div>
        )}
      </div>
      <div className="project-card-content">
        <div className="project-card-info">
          <h3>{project.title}</h3>
          <div className="project-card-meta">
            <span>{project.category}</span>
            <span style={{ margin: '0 0.5rem' }}>·</span>
            <span>{project.year}</span>
          </div>
        </div>
        <div className="project-card-arrow">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="11" y2="6"></line>
            <polyline points="5 6 11 6 11 12"></polyline>
          </svg>
        </div>
      </div>
    </Link>
  );
}
