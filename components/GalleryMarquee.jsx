import React from 'react';
import Tag from './Tag';
import { galleryImages } from '@/data/site';

export default function GalleryMarquee() {
  const items = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <section className="gallery-marquee-section">
      <div className="container gallery-marquee-header reveal">
        <Tag text="Who We Are" />
        <h2 className="heading-style-02 weight-medium gallery-marquee-title">
          We transform ideas and business requirements into practical digital solutions.
        </h2>
      </div>

      <div className="gallery-marquee-viewport">
        <div className="gallery-marquee-track">
          {items.map((image, idx) => (
            <div key={idx} className="gallery-marquee-item">
              <div className="gallery-marquee-image">
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
