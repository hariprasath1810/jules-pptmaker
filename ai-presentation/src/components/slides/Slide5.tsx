import React from 'react';
import { motion } from 'framer-motion';

const Neuron = ({ x, y, delay = 0, isActivated }: { x: number, y: number, delay?: number, isActivated: boolean }) => (
  <motion.circle
    cx={x}
    cy={y}
    r={15}
    fill={isActivated ? "#e67e22" : "#2980b9"}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, scale: isActivated ? [1, 1.2, 1] : 1 }}
    transition={{ duration: 0.5, delay }}
  />
);

const Connection = ({ x1, y1, x2, y2, delay = 0, isActivated }: { x1: number, y1: number, x2: number, y2: number, delay?: number, isActivated: boolean }) => (
  <motion.line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke={isActivated ? "#e67e22" : "#bdc3c7"}
    strokeWidth={isActivated ? 4 : 2}
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
        transition={{ duration: 1, delay, repeat: Infinity, ease: "linear" }}
    />
);


const Slide5 = () => {
  const inputLayer = [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 100, y: 300 }];
  const hiddenLayer1 = [{ x: 250, y: 100 }, { x: 250, y: 200 }, { x: 250, y: 300 }];
  const hiddenLayer2 = [{ x: 400, y: 150 }, { x: 400, y: 250 }];
  const outputLayer = [{ x: 550, y: 200 }];

  const [activatedNeuron, setActivatedNeuron] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
        setActivatedNeuron(prev => (prev + 1) % inputLayer.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: 800, height: 600, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: 40 }}>Neural Networks</h2>
      <div style={{ width: '100%', height: 400 }}>
            <svg width="100%" height="100%" viewBox="0 0 700 400">
                {/* Connections */}
                {inputLayer.map((input, i) =>
                    hiddenLayer1.map((hidden1, j) => (
                        <Connection key={`i-h1-${i}-${j}`} x1={input.x} y1={input.y} x2={hidden1.x} y2={hidden1.y} delay={0.5} isActivated={i === activatedNeuron} />
                    ))
                )}
                {hiddenLayer1.map((hidden1, i) =>
                    hiddenLayer2.map((hidden2, j) => (
                        <Connection key={`h1-h2-${i}-${j}`} x1={hidden1.x} y1={hidden1.y} x2={hidden2.x} y2={hidden2.y} delay={1} isActivated={i === activatedNeuron} />
                    ))
                )}
                {hiddenLayer2.map((hidden2, i) =>
                    outputLayer.map((output, j) => (
                        <Connection key={`h2-o-${i}-${j}`} x1={hidden2.x} y1={hidden2.y} x2={output.x} y2={output.y} delay={1.5} isActivated={i === activatedNeuron} />
                    ))
                )}

                {/* Data Dots */}
                {inputLayer.map((input, i) =>
                    hiddenLayer1.map((hidden1, j) => (
                        <DataDot key={`dot-i-h1-${i}-${j}`} path={`M ${input.x} ${input.y} L ${hidden1.x} ${hidden1.y}`} delay={i * 0.2} />
                    ))
                )}
                 {hiddenLayer1.map((hidden1, i) =>
                    hiddenLayer2.map((hidden2, j) => (
                        <DataDot key={`dot-h1-h2-${i}-${j}`} path={`M ${hidden1.x} ${hidden1.y} L ${hidden2.x} ${hidden2.y}`} delay={0.5 + i * 0.2} />
                    ))
                )}
                {hiddenLayer2.map((hidden2, i) =>
                    outputLayer.map((output, j) => (
                        <DataDot key={`dot-h2-o-${i}-${j}`} path={`M ${hidden2.x} ${hidden2.y} L ${output.x} ${output.y}`} delay={1 + i * 0.2} />
                    ))
                )}


                {/* Neurons */}
                {inputLayer.map((neuron, i) => <Neuron key={`input-${i}`} {...neuron} isActivated={i === activatedNeuron} />)}
                {hiddenLayer1.map((neuron, i) => <Neuron key={`hidden1-${i}`} {...neuron} isActivated={i === activatedNeuron} />)}
                {hiddenLayer2.map((neuron, i) => <Neuron key={`hidden2-${i}`} {...neuron} isActivated={i === activatedNeuron} />)}
                {outputLayer.map((neuron, i) => <Neuron key={`output-${i}`} {...neuron} isActivated={i === activatedNeuron} />)}

                 {/* Labels */}
                <text x="70" y="50" fontSize="16" fill="#34495e">Input</text>
                <text x="220" y="50" fontSize="16" fill="#34495e">Hidden 1</text>
                 <text x="370" y="50" fontSize="16" fill="#34495e">Hidden 2</text>
                <text x="520" y="50" fontSize="16" fill="#34495e">Output</text>
            </svg>
        </div>
    </div>
  );
};

export default Slide5;
