import { create } from "zustand";
import { devtools } from "zustand/middleware";

type NotifyState = {
  notification: string;
  setNotification: (message: string | undefined) => void;
};

export const useNotificationStore = create<NotifyState>()(
  devtools((set) => ({
    notification: "",
    setNotification: (message) => set(() => ({ notification: message })),
  }))
);
