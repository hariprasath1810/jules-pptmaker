import React from 'react';
import { motion } from 'framer-motion';

const Slide16 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>What is an AI Agent?</h2>
      <motion.div
        style={{ fontSize: '1.8rem', color: '#34495e', lineHeight: 1.6, textAlign: 'center', maxWidth: '80%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p>An autonomous AI system that can act <strong style={{ color: '#2980b9' }}>independently</strong> to achieve goals.</p>
        <p>They are <strong style={{ color: '#e67e22' }}>proactive</strong>, not just reactive. They can anticipate needs and take initiative.</p>
      </motion.div>
      <motion.div
        style={{ marginTop: 40, fontSize: '6rem' }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 1.0 }}
      >
        🤖
      </motion.div>
    </div>
  );
};

export default Slide16;
