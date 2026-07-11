import { create } from "zustand";

interface PopupState {
  popup: string;
  toggle: (item: string) => void;
}

// No persist middleware: popup-open state must not survive reloads,
// otherwise the modal (and its form chunk) reopens on every visit
export const usePopupStore = create<PopupState>()((set) => ({
  popup: "",
  toggle: (item) => set(() => ({ popup: item })),
}));
