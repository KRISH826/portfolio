import { locations, LocationItem } from "@/data/data";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// Infer the type from the locations object
export type LocationType = LocationItem;

interface LocationStore {
    activeLocation: LocationType;
    setActiveLocation: (location: LocationType) => void;
}

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create<LocationStore>()(
    immer((set) => ({
        activeLocation: DEFAULT_LOCATION,
        setActiveLocation: (location) =>
            set((state) => {
                state.activeLocation = location;
            }),

        resetLocation: () => {
            set((state) => {
                state.activeLocation = DEFAULT_LOCATION;
            })
        }
    }))
);

export default useLocationStore;