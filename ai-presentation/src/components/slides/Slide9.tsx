import React from 'react';
import { motion } from 'framer-motion';

const Slide9 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>What is Generative AI?</h2>
      <motion.div
        style={{ fontSize: '1.8rem', color: '#34495e', lineHeight: 1.6, textAlign: 'center', maxWidth: '80%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p>A type of AI that can create <strong style={{ color: '#2980b9' }}>new and original content</strong>, such as text, images, music, and code.</p>
        <p>It's not just about analyzing existing data, but about <strong style={{ color: '#e67e22' }}>generating something entirely new</strong>.</p>
      </motion.div>
      <motion.div
        style={{ marginTop: 40, fontSize: '4rem' }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        ✨
      </motion.div>
    </div>
  );
};

export default Slide9;
