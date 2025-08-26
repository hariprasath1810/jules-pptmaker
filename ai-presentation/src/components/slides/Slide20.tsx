import React from 'react';
import { motion } from 'framer-motion';

const Agent = ({ children, x, y, duration, delay = 0 }: { children: React.ReactNode, x: number[], y: number[], duration: number, delay?: number }) => (
    <motion.div
        style={{ position: 'absolute', fontSize: '2rem' }}
        animate={{ x, y }}
        transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    >
        {children}
    </motion.div>
)

const Slide20 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, backgroundColor: '#34495e', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Cityscape background */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, #2c3e50, transparent)' }} />

        {/* Agents */}
        <Agent x={[-100, 900]} y={[400, 400]} duration={10} delay={0}>🚗</Agent>
        <Agent x={[900, -100]} y={[450, 450]} duration={12} delay={2}>🚙</Agent>
        <Agent x={[200, 200]} y={[-100, 700]} duration={8} delay={1}>🚁</Agent>
        <Agent x={[600, 600]} y={[700, -100]} duration={9} delay={3}>🛸</Agent>


      <motion.h2
        style={{ fontSize: '3rem', zIndex: 1, textShadow: '2px 2px 4px #000' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        The Rise of the Agents
      </motion.h2>
      <motion.p
        style={{ fontSize: '1.5rem', textAlign: 'center', zIndex: 1, maxWidth: '80%', textShadow: '1px 1px 2px #000' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        The future is not just about intelligent systems, but about intelligent agents creating a more efficient and automated world.
      </motion.p>
    </div>
  );
};

export default Slide20;
