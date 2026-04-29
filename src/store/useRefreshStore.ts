import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppState {
  isExpired: boolean;
  setIsExpired: (isExpired: boolean) => void;
}

export const useRefreshStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        isExpired: false,
        setIsExpired: (isExpired) =>
          set(() => ({ isExpired }), false, "useRefreshStore/setIsExpired"),
      }),
      {
        name: "isExpired",
      },
    ),
  ),
);
