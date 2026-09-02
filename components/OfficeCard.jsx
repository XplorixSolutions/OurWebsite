import React from 'react';

export default function OfficeCard({ office }) {
  return (
    <div className="office-card reveal">
      <h3>{office.city}</h3>
      <div className="office-country">{office.country}</div>
      <div className="office-detail">
        <p style={{ marginBottom: '0.5rem' }}>{office.address}</p>
        <p>{office.phone}</p>
        <p style={{ color: 'var(--color-accent)' }}>{office.email}</p>
      </div>
    </div>
  );
}
