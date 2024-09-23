import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type AppState = {
  sidebar: boolean;
  setSidebar: (open: boolean) => void;
};

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        sidebar: true,
        setSidebar: (open) => set(() => ({ sidebar: open })),
      }),
      {
        name: "sidebar",
      }
    )
  )
);
