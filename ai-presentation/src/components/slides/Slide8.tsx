import React from 'react';
import { motion } from 'framer-motion';

const Star = ({ x, y, delay = 0 }: { x: number, y: number, delay?: number }) => (
    <motion.circle
        cx={x}
        cy={y}
        r={3}
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, delay, repeat: Infinity }}
    />
);

const Slide8 = () => {
  const stars = Array.from({ length: 50 }).map(() => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
    delay: Math.random() * 5,
  }));

  return (
    <div style={{ width: 800, height: 600, padding: 40, backgroundColor: '#2c3e50', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
            {stars.map((star, i) => <Star key={i} {...star} />)}
        </svg>
      <motion.h2
        style={{ fontSize: '3rem', zIndex: 1 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        The Future is Intelligent
      </motion.h2>
      <motion.p
        style={{ fontSize: '1.5rem', textAlign: 'center', zIndex: 1, maxWidth: '80%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        AI is one of the most transformative technologies of our time, with the potential to solve some of the world's most pressing challenges. The future of AI is not just about technology, it's about how we choose to use it.
      </motion.p>
    </div>
  );
};

export default Slide8;
