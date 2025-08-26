import React from 'react';
import { motion } from 'framer-motion';

const Slide3 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40 }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>A Brief History of AI</h2>
      <motion.ul style={{ fontSize: '1.8rem', color: '#34495e', lineHeight: 1.6, listStyleType: 'none', paddingLeft: 0 }}>
        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <strong>1950s:</strong> The "birth" of AI. Alan Turing's work and the Dartmouth Conference.
        </motion.li>
        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }}>
          <strong>1980s:</strong> The rise of Machine Learning.
        </motion.li>
        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}>
          <strong>2000s:</strong> The "data explosion" and the rise of Deep Learning.
        </motion.li>
        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.0 }}>
          <strong>2020s:</strong> The era of Generative AI and Large Language Models.
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Slide3;
