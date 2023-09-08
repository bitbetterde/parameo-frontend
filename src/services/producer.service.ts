import { fetchAndHandleErrors, commonHeaderJson } from "./util";

const producerService = {
  // TODO: Better return type
  getProducers: (): Promise<any[]> => {
    return fetchAndHandleErrors(
      new Request(
        `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/producers/`,
        {
          method: "GET",
          headers: commonHeaderJson,
        }
      )
    );
  },
  // TODO: Better return type
  getProducer: (id: number): Promise<any> => {
    return fetchAndHandleErrors(
      new Request(
        `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/producers/${id}/`,
        {
          method: "GET",
          headers: commonHeaderJson,
        }
      )
    );
  },
};
export default producerService;
