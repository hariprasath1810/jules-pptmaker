import React from 'react';
import { motion } from 'framer-motion';

const AppIcon = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <motion.div
        style={{
            width: 120,
            height: 120,
            borderRadius: 20,
            backgroundColor: '#ecf0f1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            fontSize: '4rem'
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        {children}
    </motion.div>
);

const Slide6 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>AI is All Around Us</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <AppIcon delay={0.2}>🎬</AppIcon>
        <AppIcon delay={0.4}>🎵</AppIcon>
        <AppIcon delay={0.6}>📍</AppIcon>
        <AppIcon delay={0.8}>✉️</AppIcon>
      </div>
       <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: 20 }}>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Recommendation Engines</p>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Virtual Assistants</p>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Navigation Apps</p>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Spam Filters</p>
       </div>
    </div>
  );
};

export default Slide6;
