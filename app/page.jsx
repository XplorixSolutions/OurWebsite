import React from 'react';
import Tag from '@/components/Tag';
import XIconMark from '@/components/XIconMark';
import Button from '@/components/Button';
import MarqueeLogos from '@/components/MarqueeLogos';
import GalleryMarquee from '@/components/GalleryMarquee';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import JobCard from '@/components/JobCard';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import NewsletterSection from '@/components/NewsletterSection';
import ServiceCard from '@/components/ServiceCard';

import { projects } from '@/data/projects';
import { blogs } from '@/data/blogs';
import { services, processSteps, testimonials } from '@/data/site';

export default function Home() {
  // Render all 5 projects in Featured Work section
  const featuredProjects = projects;
  // Take first 3 blog posts for homepage
  const latestBlogs = blogs.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img
          className="hero-bg"
          src="/hero.png"
          alt="Hero background"
        />
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-bottom reveal reveal-delay-1">
            <div></div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeLogos />

      {/* Who We Are / Gallery Marquee Section */}
      <GalleryMarquee />

      {/* Services / What We Deliver Section */}
      <section className="section services-section">
        <div className="container">
          <div className="services-header">
            <div className="services-header-left">
              <SectionHeading
                tag="What We Deliver"
                title="Technology solutions that solve real business problems."
                subtitle="From professional websites to custom software systems, we help businesses build, improve, and manage their digital presence."
              />
            </div>
          </div>

          {/* Featured row — first 5 services as bold color cards */}
          <div className="svc-row">
            {services.slice(0, 5).map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* Second row */}
          <div className="svc-row svc-row--second">
            {services.slice(5, 10).map((service, index) => (
              <ServiceCard key={index + 5} service={service} index={index + 5} />
            ))}
          </div>

          {/* Third row */}
          <div className="svc-row svc-row--second">
            {services.slice(10, 15).map((service, index) => (
              <ServiceCard key={index + 10} service={service} index={index + 10} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Xplorix Section */}
      <section className="section about-section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="about-content">
            <div className="about-left reveal">
              <Tag text="Why Xplorix" />
              <h2>One team for the work that matters.</h2>
              <p>Strategy, design, and engineering brought together to move your business forward.</p>
              <a className="about-link" href="/contact">
                <span>Start a conversation</span>
                <span aria-hidden="true">+</span>
              </a>
            </div>

            <div className="about-right reveal reveal-delay-1">
              <p>Clear thinking, capable execution, and support that continues after launch.</p>

              <div className="about-proof-grid" aria-label="Xplorix capabilities">
                <div>
                  <strong>15</strong>
                  <span>Services across digital, design, and technology</span>
                </div>
                <div>
                  <strong>One</strong>
                  <span>Connected team from idea to launch</span>
                </div>
                <div>
                  <strong>Live</strong>
                  <span>Practical systems built to keep improving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="counter-section">
        <div className="container">
          <div className="counter-grid">
            <div className="counter-item reveal">
              <div className="counter-number">15</div>
              <div className="counter-label">Service Tracks</div>
              <div className="counter-description">A practical mix of websites, software, design, growth, automation, AI, data, and reliability.</div>
            </div>
            <div className="counter-item reveal reveal-delay-1">
              <div className="counter-number">Build</div>
              <div className="counter-label">Production Capability</div>
              <div className="counter-description">Frontend, backend, databases, APIs, deployment, integrations, and operational handover.</div>
            </div>
            <div className="counter-item reveal reveal-delay-2">
              <div className="counter-number">Care</div>
              <div className="counter-label">After Launch</div>
              <div className="counter-description">Monitoring, fixes, content changes, small improvements, and technical help after release.</div>
            </div>
            <div className="counter-item reveal reveal-delay-3">
              <div className="counter-number">Clear</div>
              <div className="counter-label">Decision Path</div>
              <div className="counter-description">Every recommendation is tied to the business goal, user need, or operational constraint behind it.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <div className="projects-header reveal">
            <SectionHeading
              tag="Featured Work"
              title="Recent projects from our portfolio"
            />
            <Button href="/projects" variant="outline">
              View All Work
            </Button>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                isFeatured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process / How We Work Section */}
      <section className="section process-section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="process-header">
            <SectionHeading
              tag="Our Approach"
              title="A cleaner path from idea to live product"
              subtitle="We turn unclear requirements into a practical delivery path, with design, engineering, testing, and launch decisions made in the same rhythm."
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

      {/* Value Proposition Section */}
      <section className="section testimonial-section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 'var(--space-12)' }}>
            <Tag text="Our Promise" />
          </div>
          <div className="testimonial-card reveal">
            <div className="testimonial-quote">
              &ldquo;Technology should feel useful before it feels impressive. We understand the outcome first, then design and build the system that helps the business move with more clarity.&rdquo;
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
                <h4>Xplorix Solutions</h4>
                <p>Digital Solutions Hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights / Blog Section */}
      <section className="section blog-section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="blog-header reveal">
            <SectionHeading
              tag="Insights & Ideas"
              title="Latest articles from our team"
            />
            <Button href="/blogs" variant="outline">
              Read All Articles
            </Button>
          </div>

          <div className="blog-grid">
            {latestBlogs.map((blog) => (
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
