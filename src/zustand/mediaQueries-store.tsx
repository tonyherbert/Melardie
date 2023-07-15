import { create } from "zustand";

interface MediaQueryStoreState {
  isSmallScreen: boolean;
  isMediumScreen: boolean;
  isLargeScreen: boolean;
}

const useMediaQueryStore = create<MediaQueryStoreState>((set) => ({
  isSmallScreen: false,
  isMediumScreen: false,
  isLargeScreen: false,
  actions: {
    updateMediaQueries: () => {
      set((state) => ({
        isSmallScreen: window.matchMedia("(max-width: 768px)").matches,
        isMediumScreen: window.matchMedia(
          "(min-width: 769px) and (max-width: 1024px)"
        ).matches,
        isLargeScreen: window.matchMedia("(min-width: 1025px)").matches,
      }));
    },
  },
}));

export default useMediaQueryStore;
