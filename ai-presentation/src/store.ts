import { create } from 'zustand';

export type Slide = {
  id: string;
  children: Slide[];
  parent?: Slide;
};

export const slideTree: Slide = {
  id: '1',
  children: [
    {
      id: '2',
      children: [
        { id: '3', children: [] },
        { id: '4', children: [] },
      ],
    },
    {
      id: '5',
      children: [
        { id: '6', children: [] },
        { id: '7', children: [] },
        { id: '8', children: [] },
      ],
    },
    {
        id: '9',
        children: [
            { id: '10', children: [] },
            { id: '11', children: [
                { id: '12', children: [] },
            ] },
            { id: '13', children: [] },
            { id: '14', children: [] },
            { id: '15', children: [] },
        ]
    },
    {
        id: '16',
        children: [
            { id: '17', children: [] },
            { id: '18', children: [] },
            { id: '19', children: [] },
            { id: '20', children: [] },
        ]
    }
  ],
};

// Function to add parent references to the tree
const addParentReferences = (node: Slide, parent?: Slide) => {
    node.parent = parent;
    node.children.forEach(child => addParentReferences(child, node));
};
addParentReferences(slideTree);


type PresentationState = {
  slideTree: Slide;
  currentSlide: Slide;
  actions: {
    next: () => void;
    prev: () => void;
    down: () => void;
    up: () => void;
    goTo: (slideId: string) => void;
  };
};

const findSlideById = (node: Slide, id: string): Slide | null => {
    if (node.id === id) {
        return node;
    }
    for (const child of node.children) {
        const found = findSlideById(child, id);
        if (found) {
            return found;
        }
    }
    return null;
}

export const useStore = create<PresentationState>((set, get) => ({
  slideTree,
  currentSlide: slideTree,
  actions: {
    next: () => {
      const { currentSlide } = get();
      if (currentSlide.parent) {
          const siblings = currentSlide.parent.children;
          const currentIndex = siblings.indexOf(currentSlide);
          if (currentIndex < siblings.length - 1) {
              set({ currentSlide: siblings[currentIndex + 1] });
          }
      }
    },
    prev: () => {
      const { currentSlide } = get();
       if (currentSlide.parent) {
          const siblings = currentSlide.parent.children;
          const currentIndex = siblings.indexOf(currentSlide);
          if (currentIndex > 0) {
              set({ currentSlide: siblings[currentIndex - 1] });
          }
      }
    },
    down: () => {
        const { currentSlide } = get();
        if (currentSlide.children.length > 0) {
            set({ currentSlide: currentSlide.children[0] });
        }
    },
    up: () => {
        const { currentSlide } = get();
        if (currentSlide.parent) {
            set({ currentSlide: currentSlide.parent });
        }
    },
    goTo: (slideId: string) => {
      const { slideTree } = get();
      const slide = findSlideById(slideTree, slideId);
      if (slide) {
        set({ currentSlide: slide });
      }
    },
  },
}));
