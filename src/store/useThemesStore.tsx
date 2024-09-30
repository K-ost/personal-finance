import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ThemesState = {
  usedThemes: string[];
  setUsedThemes: (list: string[]) => void;
};

export const useThemesStore = create<ThemesState>()(
  devtools((set) => ({
    usedThemes: [],
    setUsedThemes: (list) => set(() => ({ usedThemes: list })),
  }))
);
