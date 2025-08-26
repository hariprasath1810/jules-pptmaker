import React from 'react';

const Slide2 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40 }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>What is AI?</h2>
      <p style={{ fontSize: '1.8rem', color: '#34495e', lineHeight: 1.6 }}>
        Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.
      </p>
      <ul style={{ fontSize: '1.8rem', color: '#34495e', lineHeight: 1.6, listStyleType: 'disc', paddingLeft: 40 }}>
        <li>Learning</li>
        <li>Reasoning</li>
        <li>Self-correction</li>
      </ul>
    </div>
  );
};

export default Slide2;
