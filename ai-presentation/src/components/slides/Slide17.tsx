import React from 'react';
import { motion } from 'framer-motion';

const Quadrant = ({ title, children, color, style, delay = 0 }: { title: string, children: React.ReactNode, color: string, style: React.CSSProperties, delay?: number }) => (
    <motion.div
        style={{
            width: '48%',
            height: '48%',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: `3px solid ${color}`,
            borderRadius: 10,
            ...style
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
    >
        <h3 style={{ color, margin: 0, fontSize: '1.5rem' }}>{title}</h3>
        <div style={{ fontSize: '3rem' }}>{children}</div>
    </motion.div>
);

const Slide17 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>The Perception-Action Loop</h2>
      <div style={{ position: 'relative', width: 400, height: 400 }}>
        <Quadrant title="Perceive" color="#2980b9" delay={0.5} style={{ top: 0, left: 0 }}>👁️</Quadrant>
        <Quadrant title="Reason" color="#e67e22" delay={1.0} style={{ top: 0, right: 0 }}>🧠</Quadrant>
        <Quadrant title="Act" color="#27ae60" delay={1.5} style={{ bottom: 0, right: 0 }}>🦾</Quadrant>
        <Quadrant title="Learn" color="#c0392b" delay={2.0} style={{ bottom: 0, left: 0 }}>📈</Quadrant>
         <motion.div
            style={{ position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%', fontSize: '4rem' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
         >
            🔄
        </motion.div>
      </div>
    </div>
  );
};

export default Slide17;
