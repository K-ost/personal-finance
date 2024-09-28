import { create } from "zustand";
import { devtools } from "zustand/middleware";

type PotsState = {
  usedThemes: string[];
  setUsedThemes: (list: string[]) => void;
};

export const usePotsStore = create<PotsState>()(
  devtools((set) => ({
    usedThemes: [],
    setUsedThemes: (list) => set(() => ({ usedThemes: list })),
  }))
);
