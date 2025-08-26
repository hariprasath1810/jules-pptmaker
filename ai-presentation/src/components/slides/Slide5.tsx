import React from 'react';
import { motion } from 'framer-motion';

const Neuron = ({ x, y, delay = 0 }: { x: number, y: number, delay?: number }) => (
  <motion.circle
    cx={x}
    cy={y}
    r={15}
    fill="#2980b9"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  />
);

const Connection = ({ x1, y1, x2, y2, delay = 0 }: { x1: number, y1: number, x2: number, y2: number, delay?: number }) => (
  <motion.line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke="#bdc3c7"
    strokeWidth={2}
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 0.5, delay }}
  />
);

const DataDot = ({ path, delay = 0 }: { path: string, delay?: number }) => (
    <motion.circle
        r={5}
        fill="#e67e22"
        style={{ offsetPath: `path("${path}")`}}
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{ duration: 2, delay, repeat: Infinity, ease: "linear" }}
    />
);


const Slide5 = () => {
  const inputLayer = [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 100, y: 300 }];
  const hiddenLayer1 = [{ x: 250, y: 150 }, { x: 250, y: 250 }];
  const outputLayer = [{ x: 400, y: 200 }];

  return (
    <div style={{ width: 800, height: 600, padding: 40 }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>The AI Toolkit</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '45%' }}>
            <h3 style={{ color: '#2c3e50' }}>Machine Learning (ML)</h3>
            <p  style={{ fontSize: '1.2rem', color: '#34495e' }}>Algorithms that learn from data.</p>
            <h3 style={{ color: '#2c3e50' }}>Deep Learning (DL)</h3>
            <p  style={{ fontSize: '1.2rem', color: '#34495e' }}>A subset of ML using neural networks.</p>
            <h3 style={{ color: '#2c3e50' }}>Neural Networks</h3>
            <p  style={{ fontSize: '1.2rem', color: '#34495e' }}>The "brain" of deep learning.</p>
        </div>
        <div style={{ width: '50%' }}>
            <svg width="100%" height="400" viewBox="0 0 500 400">
                {/* Connections */}
                {inputLayer.map(inputNeuron =>
                    hiddenLayer1.map(hiddenNeuron => (
                        <Connection key={`${inputNeuron.x}-${hiddenNeuron.x}`} x1={inputNeuron.x} y1={inputNeuron.y} x2={hiddenNeuron.x} y2={hiddenNeuron.y} delay={0.5} />
                    ))
                )}
                {hiddenLayer1.map(hiddenNeuron =>
                    outputLayer.map(outputNeuron => (
                        <Connection key={`${hiddenNeuron.x}-${outputNeuron.x}`} x1={hiddenNeuron.x} y1={hiddenNeuron.y} x2={outputNeuron.x} y2={outputNeuron.y} delay={1} />
                    ))
                )}

                {/* Data Dots */}
                 {inputLayer.map((inputNeuron, i) =>
                    hiddenLayer1.map((hiddenNeuron, j) => (
                        <DataDot key={`${i}-${j}`} path={`M ${inputNeuron.x} ${inputNeuron.y} L ${hiddenNeuron.x} ${hiddenNeuron.y}`} delay={1 + (i*0.2)} />
                    ))
                )}
                {hiddenLayer1.map((hiddenNeuron, i) =>
                    outputLayer.map((outputNeuron, j) => (
                        <DataDot key={`${i}-${j}-2`} path={`M ${hiddenNeuron.x} ${hiddenNeuron.y} L ${outputNeuron.x} ${outputNeuron.y}`} delay={1.5 + (i*0.2)} />
                    ))
                )}


                {/* Neurons */}
                {inputLayer.map((neuron, i) => <Neuron key={`input-${i}`} {...neuron} delay={i * 0.1} />)}
                {hiddenLayer1.map((neuron, i) => <Neuron key={`hidden1-${i}`} {...neuron} delay={0.5 + i * 0.1} />)}
                {outputLayer.map((neuron, i) => <Neuron key={`output-${i}`} {...neuron} delay={1 + i * 0.1} />)}

                 {/* Labels */}
                <text x="70" y="50" fontSize="16" fill="#34495e">Input</text>
                <text x="220" y="50" fontSize="16" fill="#34495e">Hidden</text>
                <text x="370" y="50" fontSize="16" fill="#34495e">Output</text>
            </svg>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
