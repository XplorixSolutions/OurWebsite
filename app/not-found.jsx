import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata = {
  title: 'Page Not Found - Xplorix Solutions',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <section className="page-404 reveal">
      <div className="container">
        <h1>404</h1>
        <h2>Lost in Space</h2>
        <p>The page you are looking for does not exist, has been removed, or is temporarily unavailable.</p>
        <Button href="/" variant="primary">
          Back to Safety
        </Button>
      </div>
    </section>
  );
}
