import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AuthType } from "../types";

type AuthState = {
  auth: AuthType | undefined;
  userId: number | undefined;
  setAuth: (data: AuthType) => void;
  setUserId: (data: number | undefined) => void;
  setLogout: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        auth: undefined,
        userId: undefined,
        setAuth: (data) => set(() => ({ auth: data })),
        setUserId: (id) => set(() => ({ userId: id })),
        setLogout: () => set(() => ({ auth: undefined, userId: undefined })),
      }),
      {
        name: "auth",
      }
    )
  )
);
