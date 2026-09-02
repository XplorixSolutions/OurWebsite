import React from 'react';

export default function TeamCard({ member }) {
  return (
    <div className="team-card reveal">
      <div className="team-card-image">
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1C1C1C 0%, #0E0E0E 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'var(--text-4xl)',
            color: 'rgba(255,255,255,0.03)',
            fontWeight: 'bold',
            fontFamily: 'var(--font-display)',
          }}
        >
          {member.name.split(' ').map(n => n[0]).join('')}
        </div>
      </div>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  );
}
