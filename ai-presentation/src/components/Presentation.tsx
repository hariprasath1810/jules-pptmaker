import React, { useEffect, useMemo } from 'react';
import { ReactFlow, Background, Controls, Node, Edge, ReactFlowProvider, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';

import { useStore, slideTree, Slide } from '../store';
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


const slideComponents: { [key: string]: React.ComponentType } = {
  '1': Slide1, '2': Slide2, '3': Slide3, '4': Slide4, '5': Slide5,
  '6': Slide6, '7': Slide7, '8': Slide8, '9': Slide9, '10': Slide10,
  '11': Slide11, '12': Slide12, '13': Slide13, '14': Slide14, '15': Slide15,
  '16': Slide16, '17': Slide17, '18': Slide18, '19': Slide19, '20': Slide20,
};

const nodeTypes = {
  slideNode: ({ data }: { data: { component: React.ReactNode } }) => {
    return <>{data.component}</>;
  },
};

const generateLayout = (node: Slide, x = 0, y = 0, level = 0): { nodes: Node[], edges: Edge[] } => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    const SlideComponent = slideComponents[node.id];
    if (!SlideComponent) return { nodes, edges };


    nodes.push({
        id: node.id,
        type: 'slideNode',
        position: { x, y },
        data: { component: <SlideComponent /> },
    });

    node.children.forEach((child, index) => {
        const childLayout = generateLayout(child, x + 1000, y + (index * 800), level + 1);
        nodes.push(...childLayout.nodes);
        edges.push(...childLayout.edges);
        edges.push({ id: `e${node.id}-${child.id}`, source: node.id, target: child.id, animated: true });
    });

    return { nodes, edges };
}


const Presentation = () => {
    const { fitView } = useReactFlow();
    const { currentSlide, actions } = useStore();

    const { nodes, edges } = useMemo(() => generateLayout(slideTree), []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowRight':
                    actions.next();
                    break;
                case 'ArrowLeft':
                    actions.prev();
                    break;
                case 'ArrowDown':
                    actions.down();
                    break;
                case 'ArrowUp':
                    actions.up();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [actions]);

    useEffect(() => {
        if (currentSlide) {
            fitView({
                nodes: [{ id: currentSlide.id }],
                duration: 1000,
            });
        }
    }, [currentSlide, fitView]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

const PresentationWrapper = () => (
    <ReactFlowProvider>
        <Presentation />
    </ReactFlowProvider>
)

export default PresentationWrapper;
