import React from 'react';
import { motion } from 'framer-motion';

const ImpactIcon = ({ x, y, children, delay = 0 }: { x: string, y: string, children: React.ReactNode, delay?: number }) => (
    <motion.div
        style={{ position: 'absolute', top: y, left: x, fontSize: '2rem' }}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

const Slide13 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>Generative AI in Action</h2>
      <div style={{ position: 'relative', width: '80%', paddingTop: '40%' }}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.3 }} />
        <ImpactIcon x="20%" y="30%" delay={0.5}>📝</ImpactIcon>
        <ImpactIcon x="50%" y="60%" delay={1.0}>💊</ImpactIcon>
        <ImpactIcon x="70%" y="20%" delay={1.5}>💻</ImpactIcon>
        <ImpactIcon x="30%" y="70%" delay={2.0}>🎓</ImpactIcon>
      </div>
       <div style={{ display: 'flex', justifyContent: 'space-around', width: '90%', marginTop: 20 }}>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Content Creation</p>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Drug Discovery</p>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Software Development</p>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Personalized Education</p>
       </div>
    </div>
  );
};

export default Slide13;
