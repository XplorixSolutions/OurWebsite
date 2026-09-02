import React from 'react';
import Link from 'next/link';

export default function JobCard({ job }) {
  return (
    <Link href={`/career/${job.slug}`} className="job-card reveal">
      <div className="job-card-info">
        <h3>{job.title}</h3>
        <div className="job-card-meta">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {job.location}
          </span>
          <span>·</span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            {job.type}
          </span>
        </div>
      </div>
      <div className="project-card-arrow">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="11" y2="6"></line>
          <polyline points="5 6 11 6 11 12"></polyline>
        </svg>
      </div>
    </Link>
  );
}
