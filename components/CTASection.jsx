import React from 'react';
import Tag from './Tag';
import Button from './Button';

export default function CTASection() {
  return (
    <section className="section cta-section reveal">
      <div className="container">
        <div className="cta-block">
          <Tag text="Get In Touch" variant="dark" />
          <h2>Let&apos;s build your digital solution.</h2>
          <p>Reach out to discuss your project, explore our services, or learn how Xplorix Solutions can help your business grow.</p>
          <div className="cta-buttons">
            <Button href="/contact" variant="primary">
              Start A Project
            </Button>
            <Button href="/projects" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
