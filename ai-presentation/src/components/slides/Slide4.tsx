import React from 'react';
import { motion } from 'framer-motion';

const Slide4 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>Types of AI</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} style={{ textAlign: 'center', width: '30%' }}>
          <h3 style={{ color: '#2980b9' }}>Artificial Narrow Intelligence (ANI)</h3>
          <p style={{ fontSize: '1.2rem', color: '#34495e' }}>Specialized for one task. (e.g., Chess AI)</p>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#27ae60' }}>We are here</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.0 }} style={{ textAlign: 'center', width: '30%', opacity: 0.5 }}>
          <h3 style={{ color: '#8e44ad' }}>Artificial General Intelligence (AGI)</h3>
          <p style={{ fontSize: '1.2rem', color: '#34495e' }}>Human-level intelligence.</p>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f39c12' }}>In Progress...</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }} style={{ textAlign: 'center', width: '30%', opacity: 0.5 }}>
          <h3 style={{ color: '#c0392b' }}>Artificial Super Intelligence (ASI)</h3>
          <p style={{ fontSize: '1.2rem', color: '#34495e' }}>Surpasses human intelligence.</p>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c' }}>Theoretical</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide4;
