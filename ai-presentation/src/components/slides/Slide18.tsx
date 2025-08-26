import React from 'react';
import { motion } from 'framer-motion';

const Part = ({ children, x, y, delay = 0 }: { children: React.ReactNode, x: number, y: number, delay?: number }) => (
    <motion.div
        style={{ position: 'absolute', top: y, left: x, textAlign: 'center' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

const Slide18 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>The Anatomy of an AI Agent</h2>
      <div style={{ position: 'relative', width: 400, height: 400 }}>
        {/* Robot Body */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '12rem' }}>
            🤖
        </div>
        {/* Parts */}
        <Part x={150} y={20} delay={0.5}>
            <h3 style={{ color: '#2980b9', margin: 0 }}>Sensors</h3>
            <p style={{ margin: 0, fontSize: '1.2rem' }}>👁️👂</p>
        </Part>
        <Part x={50} y={150} delay={1.0}>
            <h3 style={{ color: '#e67e22', margin: 0 }}>Controller</h3>
            <p style={{ margin: 0, fontSize: '1.2rem' }}>🧠</p>
        </Part>
        <Part x={250} y={150} delay={1.5}>
            <h3 style={{ color: '#27ae60', margin: 0 }}>Actuators</h3>
            <p style={{ margin: 0, fontSize: '1.2rem' }}>🦾🖐️</p>
        </Part>
        <Part x={150} y={300} delay={2.0}>
            <h3 style={{ color: '#c0392b', margin: 0 }}>Memory</h3>
            <p style={{ margin: 0, fontSize: '1.2rem' }}>💾</p>
        </Part>
      </div>
    </div>
  );
};

export default Slide18;
