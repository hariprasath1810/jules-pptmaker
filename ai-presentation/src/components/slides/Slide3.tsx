import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, description, delay = 0, align = 'left' }: { year: string, title: string, description: string, delay?: number, align?: 'left' | 'right' }) => (
    <div style={{ display: 'flex', justifyContent: align === 'left' ? 'flex-start' : 'flex-end', marginBottom: 50, position: 'relative' }}>
        <div style={{ width: '45%', textAlign: align === 'right' ? 'right' : 'left' }}>
            <motion.div
                initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay }}
            >
                <h3 style={{ color: '#2980b9', margin: 0, fontSize: '1.8rem' }}>{year}</h3>
                <h4 style={{ color: '#34495e', margin: 0, marginTop: 5, fontSize: '1.5rem' }}>{title}</h4>
                <p style={{ fontSize: '1.2rem', color: '#7f8c8d', margin: 0, marginTop: 5 }}>{description}</p>
            </motion.div>
        </div>
        <div style={{ width: '10%', display: 'flex', justifyContent: 'center' }}>
            <motion.div
                style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#2980b9', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay }}
            />
        </div>
        <div style={{ width: '45%' }} />
    </div>
);

const Slide3 = () => {
  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>A Brief History of AI</h2>
      <div style={{ width: '100%', position: 'relative' }}>
          <div style={{ width: 4, backgroundColor: '#bdc3c7', height: '100%', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} />
        <TimelineItem year="1950s" title="The Birth of AI" description="Alan Turing's work and the Dartmouth Conference." delay={0.5} align="left" />
        <TimelineItem year="1980s" title="The Rise of ML" description="Machine Learning becomes a prominent field of research." delay={1.0} align="right" />
        <TimelineItem year="2000s" title="The Data Explosion" description="The internet boom leads to vast amounts of data to train AI." delay={1.5} align="left" />
        <TimelineItem year="2020s" title="The Generative Era" description="Large Language Models and Generative AI take center stage." delay={2.0} align="right" />
      </div>
    </div>
  );
};

export default Slide3;
