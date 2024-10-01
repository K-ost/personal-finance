import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ThemesState = {
  usedThemes: string[];
  usedCategories: string[];
  setUsedThemes: (list: string[]) => void;
  setUsedCategories: (list: string[]) => void;
};

export const useThemesStore = create<ThemesState>()(
  devtools((set) => ({
    usedThemes: [],
    usedCategories: [],
    setUsedThemes: (list) => set(() => ({ usedThemes: list })),
    setUsedCategories: (list) => set(() => ({ usedCategories: list })),
  }))
);
