import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/data/data";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface WindowState {
    isOpen: boolean;
    zIndex: number;
    data: unknown;
}

interface State {
    window: Record<string, WindowState>;
    nextZIndex: number;
    openWindow: (windowKey: string, data?: unknown) => void;
    closeWindow: (windowKey: string) => void;
    focusWindow: (windowKey: string) => void;
}

const useWindowStore = create<State>()(
    immer((set) => ({
        window: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) =>
            set((state) => {
                const win = state.window[windowKey];
                if (win) {
                    win.isOpen = true;
                    win.zIndex = state.nextZIndex++;
                    win.data = data;
                }
            }),
        closeWindow: (windowKey) =>
            set((state) => {
                const win = state.window[windowKey];
                if (win) {
                    win.isOpen = false;
                    win.zIndex = INITIAL_Z_INDEX;
                    win.data = null;
                }
            }),
        focusWindow: (windowKey) =>
            set((state) => {
                const win = state.window[windowKey];
                if (win) {
                    win.zIndex = state.nextZIndex++;
                }
            }),
    }))
);

export default useWindowStore;

