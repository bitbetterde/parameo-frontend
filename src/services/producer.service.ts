import { catchAndPrintFetchError, commonHeaderJson } from "./util.ts";

const producerService = {
  getProducers: (): Promise<any[]> => {
    return catchAndPrintFetchError(
      fetch(`https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/producers/`, {
        method: "GET",
        headers: commonHeaderJson,
      })
    ).then((res) => res?.json());
  },
  getProducer: (id: number): Promise<any> => {
    return catchAndPrintFetchError(
      fetch(
        `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/producers/${id}/`,
        {
          method: "GET",
          headers: commonHeaderJson,
        }
      )
    ).then((res) => res?.json());
  },
};
export default producerService;
