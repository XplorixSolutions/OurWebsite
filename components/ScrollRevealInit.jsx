'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const page = document.querySelector('main');

    if (!page) return undefined;

    if (prefersReducedMotion) {
      page.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('visible');
        gsap.set(el, { clearProps: 'all' });
      });
      return undefined;
    }

    const responsive = gsap.matchMedia();
    const ctx = gsap.context(() => {
      // Hero choreography: establish hierarchy before the user starts scrolling.
      const hero = page.querySelector('.hero');
      if (hero) {
        const heroTl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.1 } });
        
        const heroTag = hero.querySelector('.hero-tag-row');
        const heroTitle = hero.querySelector('.hero-title');
        const heroSubtitle = hero.querySelector('.hero-subtitle');
        const heroButtons = hero.querySelector('.hero-buttons');
        
        if (heroTag) heroTl.fromTo(heroTag, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });
        if (heroTitle) heroTl.fromTo(heroTitle, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, heroTag ? '-=0.6' : 0);
        if (heroSubtitle) heroTl.fromTo(heroSubtitle, { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.7');
        if (heroButtons) heroTl.fromTo(heroButtons, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6');

        const heroBg = hero.querySelector('.hero-bg');
        if (heroBg) {
          gsap.fromTo(heroBg, { scale: 1.08 }, { scale: 1, duration: 1.8, ease: 'power3.out' });

          responsive.add('(min-width: 768px)', () => {
            gsap.to(heroBg, {
              yPercent: 10,
              ease: 'none',
              scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
              },
            });
          });
        }
      }

      // Inner page hero entrance.
      const pageHero = page.querySelector('.page-hero');
      if (pageHero) {
        const pageHeroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
        const items = pageHero.querySelectorAll('.page-hero-tag, h1, .page-hero-subtitle, p');
        if (items.length > 0) {
          pageHeroTl.fromTo(items, { y: 45, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12 });
        }
      }

      const gridSelectors = [
        { grid: '.svc-row', items: '.svc-card' },
        { grid: '.counter-grid', items: '.counter-item' },
        { grid: '.projects-grid', items: '.project-card' },
        { grid: '.process-grid', items: '.process-card' },
        { grid: '.blog-grid', items: '.blog-card' },
        { grid: '.pricing-grid', items: '.pricing-card' },
        { grid: '.team-grid', items: '.team-card' },
        { grid: '.offices-grid', items: '.office-card' },
        { grid: '.foundation-grid', items: '.foundation-card' },
        { grid: '.client-wall', items: '.client-wall-item' },
        { grid: '.project-results-grid', items: '.project-result-item' },
      ];

      gridSelectors.forEach(({ grid, items }) => {
        const gridEl = page.querySelector(grid);
        if (gridEl) {
          const cardEls = gridEl.querySelectorAll(items);
          if (cardEls.length > 0) {
            gsap.fromTo(
              cardEls,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.85,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: gridEl,
                  start: 'top 85%',
                  once: true,
                  onEnter: () => cardEls.forEach((card) => card.classList.add('visible')),
                },
              }
            );
          }
        }
      });

      // Supporting content uses a smaller, consistent fade-up reveal.
      const standaloneReveals = page.querySelectorAll('.reveal:not(.svc-card):not(.counter-item):not(.project-card):not(.process-card):not(.blog-card):not(.pricing-card):not(.team-card):not(.office-card):not(.foundation-card):not(.client-wall-item):not(.project-result-item)');
      
      standaloneReveals.forEach((el) => {
        // Skip hero elements already handled by timeline
        if (hero && hero.contains(el)) return;
        if (pageHero && pageHero.contains(el)) return;

        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
              onEnter: () => el.classList.add('visible'),
            },
          }
        );
      });

      // Subtle depth keeps large visual sections connected without scroll-jacking.
      page.querySelectorAll('.gallery-marquee-track, .client-wall').forEach((el) => {
        gsap.to(el, {
          yPercent: -5,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // Layered parallax: gallery images move at slightly different depths.
      responsive.add('(min-width: 768px)', () => {
        page.querySelectorAll('.gallery-marquee-image img').forEach((image, index) => {
          gsap.to(image, {
            yPercent: index % 2 === 0 ? -8 : -14,
            rotate: index % 2 === 0 ? -1 : 1,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        });

        // Fey-style depth on project imagery, kept deliberately restrained.
        page.querySelectorAll('.project-card-image').forEach((imageFrame) => {
          gsap.fromTo(imageFrame, { rotateX: 2, transformPerspective: 900 }, {
            rotateX: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: imageFrame,
              start: 'top 92%',
              end: 'top 55%',
              scrub: 1,
            },
          });
        });
      });

      // Scroll rotation gives the existing service mark a clear, quiet response.
      page.querySelectorAll('.marquee-icon').forEach((icon) => {
        gsap.to(icon, {
          rotation: 180,
          ease: 'none',
          scrollTrigger: {
            trigger: icon,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // A soft zoom makes the promise/CTA block feel like a destination, not a stop.
      page.querySelectorAll('.testimonial-card, .cta-block').forEach((block) => {
        gsap.fromTo(block, { scale: 0.97 }, {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: block,
            start: 'top 92%',
            end: 'top 58%',
            scrub: 1,
          },
        });
      });

      page.querySelectorAll('.project-card-image img, .blog-card-image img, .article-hero-image img, .project-hero-image img, .gallery-marquee-image img').forEach((image) => {
        gsap.fromTo(image, { scale: 1.06 }, {
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 90%',
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, page);

    return () => {
      responsive.revert();
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
