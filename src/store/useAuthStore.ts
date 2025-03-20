import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User, UserRole } from "../types";

type AuthState = {
  token: string | undefined;
  userId: string | undefined;
  name: string | undefined;
  avatar: string | undefined;
  role: UserRole | undefined;
  email: string | undefined;
  setUser: (data: Omit<User, "password">) => void;
  setToken: (data: string) => void;
  setLogout: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        token: undefined,
        avatar: undefined,
        name: undefined,
        userId: undefined,
        email: undefined,
        role: undefined,
        setUser: (data) =>
          set(() => ({
            avatar: data.avatar,
            name: data.name,
            role: data.role,
            userId: data._id,
            email: data.email,
          })),
        setToken: (data) =>
          set(() => ({
            token: data,
          })),
        setLogout: () =>
          set(() => ({
            token: undefined,
            avatar: undefined,
            email: undefined,
            name: undefined,
            role: undefined,
            userId: undefined,
          })),
      }),
      {
        name: "auth",
      }
    )
  )
);
