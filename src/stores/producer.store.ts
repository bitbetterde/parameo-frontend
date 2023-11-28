import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { IProducer } from "@services/producer.service";
import producerService from "@services/producer.service";

interface ProducerStore {
  allProducers: IProducer[];
  selectedProducer: IProducer | null;
  loadAllProducers: () => Promise<void>;
  loadProducer: (id: number) => Promise<void>;
  getProducersForMachine: (machineType?: string) => IProducer[];
}

const useProducerStore = create<ProducerStore>()(
  devtools((set, get) => ({
    allProducers: [],
    selectedProducer: null,
    getProducersForMachine: (machineType?: string) => {
      if (machineType) {
        return get().allProducers.filter((producer) => {
          return Boolean(
            producer.machines.find((machine) => machine.type === machineType)
          );
        });
      } else {
        return [];
      }
    },
    loadAllProducers: async () => {
      if (!get().allProducers.length) {
        const allProducers = await producerService.getProducers();
        set((state) => ({ ...state, allProducers }));
      }
    },
    loadProducer: async (id: number) => {
      if (get().selectedProducer?.id !== id) {
        const producer = await producerService.getProducer(id);
        set((state) => ({ ...state, currentProducer: producer }));
      }
    },
  }))
);

export default useProducerStore;
