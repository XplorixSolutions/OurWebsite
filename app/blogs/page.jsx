import React from 'react';
import Tag from '@/components/Tag';
import SectionHeading from '@/components/SectionHeading';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import NewsletterSection from '@/components/NewsletterSection';

import { blogs } from '@/data/blogs';

export const metadata = {
  title: 'Insights - Xplorix Solutions',
  description: 'Read the latest design insights, workflow descriptions, brand strategy tips, and studio updates from Xplorix Solutions.',
};

export default function BlogIndex() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero reveal">
        <div className="container">
          <div className="page-hero-tag">
            <Tag text="Insights" />
          </div>
          <h1 className="heading-style-01">Latest Thinking</h1>
          <p className="page-hero-subtitle">
            Thoughts on design systems, branding strategy, e-commerce optimization, and the future of creative technology.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-sm" style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="container">
          <div className="blog-grid">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
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
