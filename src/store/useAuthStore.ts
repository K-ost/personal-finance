import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { UserType } from "../types/apiTypes";

type AuthState = {
  accessToken: string | null;
  user: UserType | null;
  setToken: (token: string) => void;
  setUser: (user: UserType) => void;
  setLogout: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        user: null,
        setToken: (token) =>
          set(
            () => ({
              accessToken: token,
            }),
            false,
            "useAuthStore/setToken",
          ),
        setUser: (user) => set(() => ({ user }), false, "useAuthStore/setUser"),
        setLogout: () =>
          set(
            () => ({
              accessToken: null,
              user: null,
            }),
            false,
            "useAuthStore/setLogout",
          ),
      }),
      {
        name: "auth",
      },
    ),
  ),
);

export const useToken = () => useAuthStore.getState().accessToken;
export const useIsLogged = () => !!useAuthStore((state) => state.accessToken);
