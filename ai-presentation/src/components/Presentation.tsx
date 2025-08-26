import React, { useEffect } from 'react';
import { ReactFlow, Background, Controls, Node, Edge, ReactFlowProvider, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';

import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide14 from './slides/Slide14';
import Slide15 from './slides/Slide15';
import Slide16 from './slides/Slide16';
import Slide17 from './slides/Slide17';
import Slide18 from './slides/Slide18';
import Slide19 from './slides/Slide19';
import Slide20 from './slides/Slide20';
import { useStore } from '../store';

const nodeTypes = {
  slideNode: ({ data }: { data: { component: React.ReactNode } }) => {
    return <>{data.component}</>;
  },
};

const initialNodes: Node[] = [
  { id: '1', type: 'slideNode', position: { x: 0, y: 0 }, data: { component: <Slide1 /> } },
  { id: '2', type: 'slideNode', position: { x: 1000, y: 0 }, data: { component: <Slide2 /> } },
  { id: '3', type: 'slideNode', position: { x: 2000, y: 0 }, data: { component: <Slide3 /> } },
  { id: '4', type: 'slideNode', position: { x: 0, y: 800 }, data: { component: <Slide4 /> } },
  { id: '5', type: 'slideNode', position: { x: 1000, y: 800 }, data: { component: <Slide5 /> } },
  { id: '6', type: 'slideNode', position: { x: 2000, y: 800 }, data: { component: <Slide6 /> } },
  { id: '7', type: 'slideNode', position: { x: 0, y: 1600 }, data: { component: <Slide7 /> } },
  { id: '8', type: 'slideNode', position: { x: 1000, y: 1600 }, data: { component: <Slide8 /> } },
  { id: '9', type: 'slideNode', position: { x: 2000, y: 1600 }, data: { component: <Slide9 /> } },
  { id: '10', type: 'slideNode', position: { x: 0, y: 2400 }, data: { component: <Slide10 /> } },
  { id: '11', type: 'slideNode', position: { x: 1000, y: 2400 }, data: { component: <Slide11 /> } },
  { id: '12', type: 'slideNode', position: { x: 2000, y: 2400 }, data: { component: <Slide12 /> } },
  { id: '13', type: 'slideNode', position: { x: 0, y: 3200 }, data: { component: <Slide13 /> } },
  { id: '14', type: 'slideNode', position: { x: 1000, y: 3200 }, data: { component: <Slide14 /> } },
  { id: '15', type: 'slideNode', position: { x: 2000, y: 3200 }, data: { component: <Slide15 /> } },
  { id: '16', type: 'slideNode', position: { x: 0, y: 4000 }, data: { component: <Slide16 /> } },
  { id: '17', type: 'slideNode', position: { x: 1000, y: 4000 }, data: { component: <Slide17 /> } },
  { id: '18', type: 'slideNode', position: { x: 2000, y: 4000 }, data: { component: <Slide18 /> } },
  { id: '19', type: 'slideNode', position: { x: 0, y: 4800 }, data: { component: <Slide19 /> } },
  { id: '20', type: 'slideNode', position: { x: 1000, y: 4800 }, data: { component: <Slide20 /> } },
];

const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
    { id: 'e4-5', source: '4', target: '5', animated: true },
    { id: 'e5-6', source: '5', target: '6', animated: true },
    { id: 'e6-7', source: '6', target: '7', animated: true },
    { id: 'e7-8', source: '7', target: '8', animated: true },
    { id: 'e8-9', source: '8', target: '9', animated: true },
    { id: 'e9-10', source: '9', target: '10', animated: true },
    { id: 'e10-11', source: '10', target: '11', animated: true },
    { id: 'e11-12', source: '11', target: '12', animated: true },
    { id: 'e12-13', source: '12', target: '13', animated: true },
    { id: 'e13-14', source: '13', target: '14', animated: true },
    { id: 'e14-15', source: '14', target: '15', animated: true },
    { id: 'e15-16', source: '15', target: '16', animated: true },
    { id: 'e16-17', source: '16', target: '17', animated: true },
    { id: 'e17-18', source: '17', target: '18', animated: true },
    { id: 'e18-19', source: '18', target: '19', animated: true },
    { id: 'e19-20', source: '19', target: '20', animated: true },
];

const buttonStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: 5,
    cursor: 'pointer',
    fontSize: '1rem',
    margin: '0 5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
}

const Presentation = () => {
    const { fitView } = useReactFlow();
    const { currentSlide, next, prev } = useStore((state) => ({
        currentSlide: state.currentSlide,
        next: state.actions.next,
        prev: state.actions.prev,
    }));

    useEffect(() => {
        fitView({
            nodes: [{ id: currentSlide }],
            duration: 1000, // this is the animation duration in ms
        });
    }, [currentSlide, fitView]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
      <div style={{ position: 'absolute', bottom: 20, right: 20, zIndex: 10 }}>
        <button onClick={prev} style={buttonStyle}>Previous</button>
        <button onClick={next} style={buttonStyle}>Next</button>
      </div>
    </div>
  );
};

const PresentationWrapper = () => (
    <ReactFlowProvider>
        <Presentation />
    </ReactFlowProvider>
)

export default PresentationWrapper;
