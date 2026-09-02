import React from 'react';

export const metadata = {
  title: 'Terms & Conditions - Xplorix Solutions',
  description: 'Terms and conditions for utilizing the Xplorix Solutions template.',
};

export default function TermsConditions() {
  return (
    <section className="utility-page reveal">
      <div className="container">
        <div className="utility-content">
          <h1>Terms &amp; Conditions</h1>
          <p>Last updated: August 31, 2026</p>
          
          <div className="divider" style={{ margin: 'var(--space-12) 0' }}></div>
          
          <h2>1. Usage License</h2>
          <p>Xplorix Solutions grants you a non-exclusive, non-transferable license to utilize the template design system to build personal or commercial applications, subject to the licensing details of source assets.</p>

          <h2 style={{ marginTop: 'var(--space-10)' }}>2. Disclaimer of Liability</h2>
          <p>The code templates and structures are provided &ldquo;as is&rdquo;, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability and fitness for a particular purpose.</p>
        </div>
      </div>
    </section>
  );
}
