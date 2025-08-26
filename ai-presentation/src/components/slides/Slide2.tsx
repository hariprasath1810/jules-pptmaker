import React from 'react';
import { motion } from 'framer-motion';

const ConceptBox = ({ title, description, delay = 0, color }: { title: string, description: string, delay?: number, color: string }) => (
    <motion.div
        style={{
            width: '40%',
            padding: 20,
            margin: 10,
            border: `3px solid ${color}`,
            borderRadius: 10,
            textAlign: 'center',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
    >
        <h3 style={{ color, margin: 0, fontSize: '1.8rem' }}>{title}</h3>
        <p style={{ fontSize: '1.2rem', color: '#34495e', margin: 0, marginTop: 10 }}>{description}</p>
    </motion.div>
);

const Slide2 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>What is AI?</h2>
      <p style={{ fontSize: '1.5rem', color: '#34495e', lineHeight: 1.6, textAlign: 'center', maxWidth: '80%', marginBottom: 40 }}>
        AI is the simulation of human intelligence processes by machines. These processes include:
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <ConceptBox title="Learning" description="Acquiring information and rules for using the information." color="#2980b9" delay={0.5} />
        <ConceptBox title="Reasoning" description="Using rules to reach approximate or definite conclusions." color="#e67e22" delay={0.8} />
        <ConceptBox title="Problem Solving" description="Developing and executing a plan to achieve a goal." color="#27ae60" delay={1.1} />
        <ConceptBox title="Perception" description="Interpreting the world through senses like vision and hearing." color="#c0392b" delay={1.4} />
      </div>
    </div>
  );
};

export default Slide2;
