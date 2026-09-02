import React from 'react';
import Link from 'next/link';

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="blog-card reveal">
      <div className="blog-card-image">
        {blog.thumbnail ? (
          <img src={blog.thumbnail} alt={blog.title} />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #1A1A1A 0%, #0E0E0E 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'var(--text-xl)',
              color: 'rgba(255,255,255,0.03)',
              fontFamily: 'var(--font-display)',
            }}
          >
            {blog.category.toUpperCase()}
          </div>
        )}
      </div>
      <div className="blog-card-content">
        <div className="blog-card-category">{blog.category}</div>
        <h3>{blog.title}</h3>
        <div className="blog-card-meta">
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
