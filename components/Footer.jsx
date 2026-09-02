import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="nav-logo" aria-label="Xplorix Solutions Home">
              <Logo width={140} height={32} />
            </Link>
            <p>Helping businesses build, improve, and manage their digital presence.</p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Main</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">Studio</Link></li>
              <li><Link href="/projects">Work</Link></li>
              <li><Link href="/blogs">Blog</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/career">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/utility-pages/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/utility-pages/terms-conditions">Terms & Conditions</Link></li>
              <li><Link href="/utility-pages/license">License</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Utility</h4>
            <ul>
              <li><Link href="/utility-pages/style-guide">Style Guide</Link></li>
              <li><Link href="/utility-pages/changelog">Changelog</Link></li>
              <li><Link href="/utility-pages/instruction">Instruction</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Xplorix Solutions. All rights reserved. Created with Next.js.</p>
          <div className="footer-bottom-links">
            <Link href="/utility-pages/privacy-policy">Privacy</Link>
            <Link href="/utility-pages/terms-conditions">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
