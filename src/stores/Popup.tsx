import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PopupState {
  popup: string;
  toggle: (item: string) => void;
}

export const usePopupStore = create<PopupState>()(
  devtools(
    persist(
      (set) => ({
        popup: "",
        toggle: (item) => set((state) => ({ popup: item })),
      }),
      {
        name: "popup-storage",
      }
    )
  )
);
