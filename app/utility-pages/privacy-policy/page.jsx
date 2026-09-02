import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Xplorix Solutions',
  description: 'Privacy policy and user data procedures for Xplorix Solutions.',
};

export default function PrivacyPolicy() {
  return (
    <section className="utility-page reveal">
      <div className="container">
        <div className="utility-content">
          <h1>Privacy Policy</h1>
          <p>Last updated: August 31, 2026</p>
          
          <div className="divider" style={{ margin: 'var(--space-12) 0' }}></div>
          
          <h2>1. Data Collection</h2>
          <p>We do not store or track any personally identifiable tracking parameters when you browse Xplorix Solutions. Data submitted via contact forms is utilized solely to process your inquiries and schedule appointments.</p>

          <h2 style={{ marginTop: 'var(--space-10)' }}>2. Cookies</h2>
          <p>Xplorix Solutions uses essential local storage parameters to handle website state, such as dark mode configurations and pricing plan toggle selections.</p>
        </div>
      </div>
    </section>
  );
}
