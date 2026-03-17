import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
  setLogout: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        setToken: (token) =>
          set(
            () => ({
              token,
            }),
            false,
            "useAuthStore/setToken",
          ),
        setLogout: () =>
          set(
            () => ({
              token: null,
            }),
            false,
            "useAuthStore/setLogout",
          ),
      }),
      {
        name: "token",
      },
    ),
  ),
);

export const useToken = () => useAuthStore.getState().token;
export const useIsLogged = () => !!useAuthStore((state) => state.token);
