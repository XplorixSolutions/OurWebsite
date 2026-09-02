import React from 'react';

export const metadata = {
  title: 'Licensing - Xplorix Solutions',
  description: 'Licensing resources and assets information for the Xplorix Solutions template.',
};

export default function License() {
  return (
    <section className="utility-page reveal">
      <div className="container">
        <div className="utility-content">
          <h1>Asset Licensing</h1>
          <p>All graphical assets, icons, typefaces, and templates utilized inside Xplorix Solutions are sourced under appropriate open-source or commercial redistribution licenses.</p>
          
          <div className="divider" style={{ margin: 'var(--space-12) 0' }}></div>
          
          <h2>Typefaces</h2>
          <p>All fonts are distributed under the standard SIL Open Font License (OFL):</p>
          <ul>
            <li><strong>Geist & Geist Mono</strong> &mdash; Designed by Vercel, licensed under SIL OFL.</li>
            <li><strong>Inter</strong> &mdash; Designed by Rasmus Andersson, licensed under SIL OFL.</li>
            <li><strong>Stack Sans Headline</strong> &mdash; Available via Google Fonts library.</li>
          </ul>

          <h2 style={{ marginTop: 'var(--space-10)' }}>Photography & Mockups</h2>
          <p>All photography assets used inside standard grids and layouts are obtained from copyright-free platforms or generated using authorized commercial imaging models:</p>
          <ul>
            <li><strong>Unsplash</strong> &mdash; Imagery published under standard creative commons zero parameters.</li>
            <li><strong>Pexels</strong> &mdash; Free for commercial customization and reference.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
