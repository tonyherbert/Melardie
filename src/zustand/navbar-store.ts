import { create } from "zustand";

interface NavbarStoreState {
  isToggle: boolean;
  actions: {
    toggle: () => void;
    closeIfScreenIsLarge: () => void;
  };
}

const useNavbarStore = create<NavbarStoreState>((set) => ({
  isToggle: false,
  actions: {
    toggle: () => set((state) => ({ isToggle: !state.isToggle })),
    closeIfScreenIsLarge: () => {
      if (window.innerWidth >= 768) {
        set(() => ({ isToggle: false }));
      }
    },
  },
}));

export default useNavbarStore;
