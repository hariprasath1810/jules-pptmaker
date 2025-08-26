import { create } from 'zustand';

// In a real app, you might want to generate the slide ids dynamically
const slides = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

type PresentationState = {
  slides: string[];
  currentSlide: string;
  actions: {
    next: () => void;
    prev: () => void;
    goTo: (slideId: string) => void;
  };
};

export const useStore = create<PresentationState>((set, get) => ({
  slides,
  currentSlide: slides[0],
  actions: {
    next: () => {
      const { slides, currentSlide } = get();
      const currentIndex = slides.indexOf(currentSlide);
      const nextIndex = Math.min(currentIndex + 1, slides.length - 1);
      set({ currentSlide: slides[nextIndex] });
    },
    prev: () => {
      const { slides, currentSlide } = get();
      const currentIndex = slides.indexOf(currentSlide);
      const prevIndex = Math.max(currentIndex - 1, 0);
      set({ currentSlide: slides[prevIndex] });
    },
    goTo: (slideId: string) => {
      const { slides } = get();
      if (slides.includes(slideId)) {
        set({ currentSlide: slideId });
      }
    },
  },
}));
