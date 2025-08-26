import React from 'react';
import { motion } from 'framer-motion';

const Slide14 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>The Creative Co-pilot</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', fontSize: '6rem' }}>
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            🧑‍🎨
        </motion.div>
        <motion.div
            style={{ margin: '0 20px' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
        >
            +
        </motion.div>
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
        >
            🤖
        </motion.div>
      </div>
      <motion.p
        style={{ fontSize: '1.5rem', textAlign: 'center', zIndex: 1, maxWidth: '80%', marginTop: 40 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.0 }}
      >
        The future of creativity is a collaboration between humans and AI.
      </motion.p>
    </div>
  );
};

export default Slide14;
