import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type AppState = {
  lang: string;
  sidebar: boolean;
  setLang: (lang: string) => void;
  setSidebar: (open: boolean) => void;
};

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        lang: "en",
        sidebar: true,
        setLang: (lang) => set(() => ({ lang: lang })),
        setSidebar: (open) => set(() => ({ sidebar: open })),
      }),
      {
        name: "app",
      },
    ),
  ),
);

export const useLanguageStore = () => useAppStore((state) => state.lang);
export const useSidebarStore = () => useAppStore((state) => state.sidebar);
