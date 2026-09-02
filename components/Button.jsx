import React from 'react';
import Link from 'next/link';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost', 'nav'
  className = '',
  icon,
  imageSrc,
  ...props
}) {
  const isLink = !!href;
  const classes = `btn btn-${variant} ${className}`;

  const renderContent = () => (
    <span className="btn-content">
      {imageSrc && (
        <span className="btn-image">
          <img src={imageSrc} alt="" />
        </span>
      )}
      <span className="btn-text-wrapper">
        <span className="btn-text">{children}</span>
        <span className="btn-text-hover" aria-hidden="true">
          {children}
        </span>
      </span>
      {icon && <span className="btn-icon">{icon}</span>}
    </span>
  );

  if (isLink) {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
          {renderContent()}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {renderContent()}
    </button>
  );
}
