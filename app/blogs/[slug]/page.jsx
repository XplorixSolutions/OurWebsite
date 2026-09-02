'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Tag from '@/components/Tag';
import XIconMark from '@/components/XIconMark';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import NewsletterSection from '@/components/NewsletterSection';

import { blogs } from '@/data/blogs';

export default function BlogDetail() {
  const { slug } = useParams();
  
  const blog = blogs.find((b) => b.slug === slug);
  
  if (!blog) {
    notFound();
  }

  // Get other blog posts for recommendations
  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  // Split content by headings or code lines for styling
  const renderParagraphs = () => {
    return (blog.displayContent || blog.content).split('\n\n').map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;
      
      if (trimmed.startsWith('## ')) {
        return <h2 key={idx}>{trimmed.substring(3)}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={idx}>{trimmed.substring(4)}</h3>;
      }
      return <p key={idx}>{trimmed}</p>;
    });
  };

  return (
    <>
      {/* Article Header */}
      <header className="article-header reveal">
        <div className="container">
          <Tag text={blog.category} />
          <h1 className="heading-style-02" style={{ marginTop: 'var(--space-4)' }}>
            {blog.title}
          </h1>
          
          <div className="article-meta">
            <div className="article-author">
              <div 
                className="article-author-avatar" 
                style={{ 
                  background: '#1a1a1a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(33, 179, 214, 0.3)',
                }}
              >
                <XIconMark size={20} />
              </div>
              <div>
                <span className="weight-medium" style={{ color: 'var(--color-text)' }}>{blog.author}</span>
                <span style={{ margin: '0 0.5rem', color: 'var(--color-text-muted)' }}>&middot;</span>
                <span>{blog.authorRole}</span>
              </div>
            </div>
            <div style={{ color: 'var(--color-text-muted)' }}>
              <span>{blog.date}</span>
              <span style={{ margin: '0 0.5rem' }}>&middot;</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Hero Banner */}
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="article-hero-image reveal">
            {blog.heroImage ? (
              <img src={blog.heroImage} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1C1C1C 0%, #0E0E0E 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--text-6xl)',
                  color: 'rgba(255,255,255,0.02)',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.1em',
                }}
              >
                INSIGHTS
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="article-body reveal">
        <div className="container" style={{ padding: 0 }}>
          {renderParagraphs()}
        </div>
      </article>

      {/* Related Insights */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <h2 className="heading-style-03 reveal" style={{ marginBottom: 'var(--space-10)' }}>
            Related Insights
          </h2>
          <div className="blog-grid">
            {relatedBlogs.map((b) => (
              <BlogCard key={b.slug} blog={b} />
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
