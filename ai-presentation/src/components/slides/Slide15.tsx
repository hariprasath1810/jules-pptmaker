import React from 'react';
import { motion } from 'framer-motion';

const Slide15 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>The Double-Edged Sword</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', fontSize: '6rem' }}>
        <motion.div
            style={{
                width: 150,
                height: 150,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1rem',
                textAlign: 'center',
                color: 'white',
                transformStyle: 'preserve-3d',
            }}
            animate={{ rotateY: [0, 180, 180, 360, 360] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#27ae60',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backfaceVisibility: 'hidden',
                }}
            >
                Opportunity
            </motion.div>
            <motion.div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#c0392b',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                }}
            >
                Risk
            </motion.div>
        </motion.div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '90%', marginTop: 40 }}>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Misinformation</p>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Copyright</p>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Bias</p>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>Cost</p>
       </div>
    </div>
  );
};

export default Slide15;
