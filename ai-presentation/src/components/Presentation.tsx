import React, { useEffect } from 'react';
import { ReactFlow, Background, Controls, Node, Edge, ReactFlowProvider, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';

import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import { useStore } from '../store';

const nodeTypes = {
  slideNode: ({ data }: { data: { component: React.ReactNode } }) => {
    return <>{data.component}</>;
  },
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'slideNode',
    position: { x: 0, y: 0 },
    data: { component: <Slide1 /> },
  },
  {
    id: '2',
    type: 'slideNode',
    position: { x: 1000, y: 0 },
    data: { component: <Slide2 /> },
  },
];

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2', animated: true }];

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
