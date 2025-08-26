import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlippingBox = ({ frontContent, backContent, color, delay = 0 }: { frontContent: React.ReactNode, backContent: React.ReactNode, color: string, delay?: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            style={{
                width: 220,
                height: 300,
                margin: 20,
                perspective: 1000,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            onHoverStart={() => setIsFlipped(true)}
            onHoverEnd={() => setIsFlipped(false)}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Front */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color,
                    color: 'white',
                    borderRadius: 10,
                    padding: 20,
                    textAlign: 'center',
                }}>
                    {frontContent}
                </div>
                {/* Back */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#34495e',
                    color: 'white',
                    borderRadius: 10,
                    padding: 20,
                    textAlign: 'center',
                }}>
                    {backContent}
                </div>
            </motion.div>
        </motion.div>
    );
}

const Slide4 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>Types of AI</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <FlippingBox
            frontContent={<h3>Artificial Narrow Intelligence (ANI)</h3>}
            backContent={<p>Specialized for one task. This is the only type of AI we have today.</p>}
            color="#2980b9"
            delay={0.5}
        />
        <FlippingBox
            frontContent={<h3>Artificial General Intelligence (AGI)</h3>}
            backContent={<p>Human-level intelligence. Still theoretical, but researchers are working on it.</p>}
            color="#8e44ad"
            delay={0.8}
        />
        <FlippingBox
            frontContent={<h3>Artificial Super Intelligence (ASI)</h3>}
            backContent={<p>Surpasses human intelligence in every aspect. The stuff of science fiction... for now.</p>}
            color="#c0392b"
            delay={1.1}
        />
      </div>
    </div>
  );
};

export default Slide4;
