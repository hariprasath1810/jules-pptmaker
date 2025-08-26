import React from 'react';
import { motion } from 'framer-motion';

const Slide7 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>The Ethics of AI</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
        <div style={{ width: '40%' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <h3 style={{ color: '#2980b9' }}>Bias</h3>
                <p style={{ fontSize: '1.2rem', color: '#34495e' }}>AI can amplify human biases.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.0 }}>
                <h3 style={{ color: '#2980b9' }}>Privacy</h3>
                <p style={{ fontSize: '1.2rem', color: '#34495e' }}>AI's need for data raises privacy concerns.</p>
            </motion.div>
        </div>
        <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <motion.div
                style={{ width: 100, height: 100, fontSize: '5rem' }}
                animate={{ rotate: [0, 5, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             >
                ⚖️
            </motion.div>
        </div>
        <div style={{ width: '40%' }}>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
                <h3 style={{ color: '#c0392b' }}>Accountability</h3>
                <p style={{ fontSize: '1.2rem', color: '#34495e' }}>Who is responsible for AI's mistakes?</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 2.0 }}>
                <h3 style={{ color: '#c0392b' }}>Job Displacement</h3>
                <p style={{ fontSize: '1.2rem', color: '#34495e' }}>The impact of AI on the future of work.</p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slide7;
