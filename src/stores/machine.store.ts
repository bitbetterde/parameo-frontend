import { create } from "zustand";
import { devtools } from "zustand/middleware";
import machineService, { IMachine } from "@services/machine.service";

interface MachineStore {
  allMachines: IMachine[];
  loadAllMachines: () => Promise<void>;
}

const useMachineStore = create<MachineStore>()(
  devtools((set, get) => ({
    allMachines: [],
    loadAllMachines: async () => {
      if (!get().allMachines.length) {
        const allMachines = await machineService.getMachines();
        set((state) => ({ ...state, allMachines }));
      }
    },
  }))
);

export default useMachineStore;
