'use client';

import React, { useState } from 'react';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import CTASection from '@/components/CTASection';
import NewsletterSection from '@/components/NewsletterSection';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      desc: 'For small businesses and startups needing a professional website, landing page, or brand identity to establish their digital presence.',
      monthlyPrice: 'Project-Based',
      annualPrice: 'Project-Based',
      features: [
        'Business / Portfolio Website',
        'Landing Page Development',
        'Logo & Brand Identity',
        'Responsive Design',
        'SEO Optimization',
        'Post-Launch Support',
      ],
      isPopular: false,
    },
    {
      name: 'Growth',
      desc: 'For businesses requiring web applications, e-commerce platforms, CMS integration, or ongoing design and development support.',
      monthlyPrice: 'Custom Quote',
      annualPrice: 'Custom Quote',
      features: [
        'Web Applications',
        'E-Commerce Development',
        'CMS Integration',
        'UI/UX Design',
        'API Development',
        'Priority Support',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      desc: 'For organizations needing custom software systems, management platforms, digital transformation, and dedicated technical partnerships.',
      monthlyPrice: 'Custom Quote',
      annualPrice: 'Custom Quote',
      features: [
        'Custom Software Development',
        'Management Systems & Dashboards',
        'Database Architecture',
        'Full Product Lifecycle',
        'Dedicated Technical Team',
        'Ongoing Maintenance & Support',
      ],
      isPopular: false,
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero reveal" style={{ textAlignment: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Tag text="Pricing" />
          <h1 className="heading-style-01" style={{ marginTop: 'var(--space-4)' }}>Solution-Based Pricing</h1>
          <p className="page-hero-subtitle" style={{ margin: '0 auto', maxWidth: '560px' }}>
            Every project is different. We provide transparent, project-based pricing tailored to your scope, requirements, and timeline. Reach out for a detailed quote.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Cards Grid */}
          <div className="pricing-grid">
            {plans.map((plan) => {
              const price = plan.monthlyPrice;
              
              return (
                <div
                  key={plan.name}
                  className={`pricing-card ${plan.isPopular ? 'featured' : ''} reveal`}
                >
                  <div className="pricing-card-header">
                    <h3>{plan.name}</h3>
                    <p>{plan.desc}</p>
                  </div>
                  
                  <div className="pricing-amount">
                    <span className="price">{price}</span>
                  </div>
                  
                  <div className="pricing-features">
                    <ul>
                      {plan.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button
                    href="/contact"
                    variant={plan.isPopular ? 'primary' : 'outline'}
                    style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-6)' }}
                  >
                    Get A Quote
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA and Newsletter */}
      <CTASection />
      <NewsletterSection />
    </>
  );
}
