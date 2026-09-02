'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Studio', href: '/about' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-shell">
          <Link href="/" className="nav-logo" aria-label="Xplorix Solutions Home">
            <Logo width={140} height={32} />
          </Link>

          <div className="nav-menu">
            {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                  onClick={closeMenus}
                >
                  {link.label}
                </Link>
              ))}

              <div className="nav-link-inner">
                <Link
                  href="/projects"
                  className={`nav-link ${pathname === '/projects' ? 'active' : ''}`}
                  onClick={closeMenus}
                >
                  Work
                </Link>
                <div className="work-number">05</div>
              </div>

              {/* Pages Dropdown */}
              <div className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="nav-dropdown-toggle"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Pages</span>
                  <svg className="nav-dropdown-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 10.5L3.5 6h9L8 10.5z" />
                  </svg>
                </button>
                <div className="dropdown-list">
                  <div className="dropdown-link-block">
                    <div className="dropdown-link-wrap">
                      <Link href="/" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        Home
                      </Link>
                      <Link href="/about" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        Studio
                      </Link>
                      <Link href="/projects" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        Projects
                      </Link>
                      <Link href="/blogs" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        Blog
                      </Link>
                    </div>
                    <div className="dropdown-link-wrap">
                      <Link href="/pricing" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        Pricing
                      </Link>
                      <Link href="/career" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        Career
                      </Link>
                      <Link href="/contact" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        Contact
                      </Link>
                      <Link href="/utility-pages/style-guide" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        Style guide
                      </Link>
                    </div>
                    <div className="dropdown-link-wrap">
                      <Link href="/utility-pages/instruction" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        Instructions
                      </Link>
                      <Link href="/utility-pages/privacy-policy" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        Privacy Policy
                      </Link>
                      <Link href="/utility-pages/terms-conditions" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        Terms & Conditions
                      </Link>
                      <Link href="/404" className="nav-dropdown-link" onClick={closeMenus}>
                        <div className="dropdown-ball"></div>
                        404 Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/career"
                className={`nav-link ${pathname.startsWith('/career') ? 'active' : ''}`}
                onClick={closeMenus}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
                onClick={closeMenus}
              >
                Contact
              </Link>
            </div>

          <div className="nav-right">
            <Button
              href="https://meet.google.com/"
              variant="nav"
              imageSrc="https://cdn.prod.website-files.com/6964d4f3b5db71495b89316b/69914c2c1f1665f8efe3888d_d244a24293009aa3cdd4f70efc688c3a_Button%20Image.svg"
            >
              Book a call
            </Button>

            <button
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-navigation" className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link href="/" className="mobile-menu-link" onClick={closeMenus}>Home</Link>
        <Link href="/about" className="mobile-menu-link" onClick={closeMenus}>Studio</Link>
        <Link href="/projects" className="mobile-menu-link" onClick={closeMenus}>Work</Link>
        <Link href="/blogs" className="mobile-menu-link" onClick={closeMenus}>Blog</Link>
        <Link href="/pricing" className="mobile-menu-link" onClick={closeMenus}>Pricing</Link>
        <Link href="/career" className="mobile-menu-link" onClick={closeMenus}>Careers</Link>
        <Link href="/contact" className="mobile-menu-link" onClick={closeMenus}>Contact</Link>
      </div>
    </>
  );
}
