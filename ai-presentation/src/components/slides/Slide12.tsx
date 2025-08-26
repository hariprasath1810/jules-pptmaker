import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tool = ({ icon, children, color }: { icon: string, children: React.ReactNode, color: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            style={{
                width: 150,
                height: 150,
                borderRadius: 20,
                backgroundColor: '#ecf0f1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                fontSize: '4rem',
                position: 'relative',
                cursor: 'pointer',
                border: `4px solid ${color}`
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
        >
            <motion.div animate={{ opacity: isHovered ? 0 : 1 }}>{icon}</motion.div>
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.2rem',
                    padding: 10,
                    textAlign: 'center',
                    color: color
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

const Slide12 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>The Generative Toolkit</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Tool icon="📝" color="#2980b9">Text Generation: Articles, emails, code</Tool>
        <Tool icon="🖼️" color="#27ae60">Image Generation: Realistic photos, art</Tool>
        <Tool icon="🎵" color="#8e44ad">Music Generation: Original compositions</Tool>
        <Tool icon="🎬" color="#c0392b">Video Generation: Short clips from text</Tool>
      </div>
    </div>
  );
};

export default Slide12;
