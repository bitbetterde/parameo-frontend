import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UtilStore {
  skipNextScrollToTop: boolean;
  setSkipNextScrollToTop: (b: boolean) => void;
}

const useUtilStore = create<UtilStore>()(
  devtools((set) => ({
    skipNextScrollToTop: false,
    setSkipNextScrollToTop: (b) => {
      set((state) => ({ ...state, skipNextScrollToTop: b }));
    },
  }))
);

export default useUtilStore;
