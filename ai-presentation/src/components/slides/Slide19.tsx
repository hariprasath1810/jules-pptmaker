import React from 'react';
import { motion } from 'framer-motion';

const AppIcon = ({ children, delay = 0, name }: { children: React.ReactNode, delay?: number, name: string }) => (
    <motion.div
        style={{
            width: 150,
            height: 150,
            borderRadius: 20,
            backgroundColor: '#ecf0f1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ scale: 1.1 }}
    >
        <div style={{ fontSize: '4rem' }}>{children}</div>
        <p style={{ fontSize: '1.2rem', color: '#34495e', margin: 0, marginTop: 10 }}>{name}</p>
    </motion.div>
);

const Slide19 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>AI Agents in the Wild</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <AppIcon delay={0.2} name="Self-Driving Cars">🚗</AppIcon>
        <AppIcon delay={0.4} name="Smart Home">🏠</AppIcon>
        <AppIcon delay={0.6} name="Robotic Vacuums">🤖</AppIcon>
        <AppIcon delay={0.8} name="Trading Bots">📈</AppIcon>
      </div>
    </div>
  );
};

export default Slide19;
