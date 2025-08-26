import React from 'react';
import { motion } from 'framer-motion';

const Slide11 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>Large Language Models (LLMs)</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <motion.div
            style={{ fontSize: '8rem' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            📚
        </motion.div>
        <motion.div
            style={{ marginLeft: 40, fontSize: '1.5rem', color: '#34495e', maxWidth: '50%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
        >
           <p>The most common type of foundation model, trained on massive amounts of text data.</p>
           <p>They can understand and generate human-like text.</p>
           <p><strong>Examples:</strong> GPT-4, Llama, Claude.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide11;
