import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AuthType } from "../types";

type AuthState = {
  auth: AuthType | undefined;
  setAuth: (data: AuthType) => void;
  setLogout: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        auth: undefined,
        setAuth: (data) => set(() => ({ auth: data })),
        setLogout: () => set(() => ({ auth: undefined, userId: undefined })),
      }),
      {
        name: "auth",
      }
    )
  )
);
