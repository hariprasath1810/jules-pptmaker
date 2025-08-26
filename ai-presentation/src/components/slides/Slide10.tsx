import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ children, delay = 0, title }: { children: React.ReactNode, delay?: number, title: string }) => (
    <motion.div
        style={{
            width: '30%',
            textAlign: 'center',
            padding: 20,
            border: '2px solid #ecf0f1',
            borderRadius: 10
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
    >
        <h3 style={{ color: '#2980b9' }}>{title}</h3>
        <div style={{ fontSize: '4rem' }}>{children}</div>
    </motion.div>
);

const Slide10 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>The Magic of Foundation Models</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <Step title="1. Training" delay={0.5}>
            ☁️
        </Step>
        <Step title="2. Learning" delay={1.0}>
            🧠
        </Step>
        <Step title="3. Fine-tuning" delay={1.5}>
            🎯
        </Step>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: 20 }}>
        <p style={{ width: '30%', textAlign: 'center', fontSize: '1.2rem', color: '#34495e' }}>Large-scale models are trained on vast amounts of data.</p>
        <p style={{ width: '30%', textAlign: 'center', fontSize: '1.2rem', color: '#34495e' }}>The model learns the patterns and relationships in the data.</p>
        <p style={{ width: '30%', textAlign: 'center', fontSize: '1.2rem', color: '#34495e' }}>The model is then adapted for specific tasks.</p>
      </div>
    </div>
  );
};

export default Slide10;
