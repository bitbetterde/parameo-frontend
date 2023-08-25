import { commonHeaderJson } from "./commonHeaders.ts";

const machineService = {
  getMachines: (): Promise<any[]> => {
    return fetch(
      `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/machines/`,
      {
        method: "GET",
        headers: commonHeaderJson,
      }
    ).then((res) => res.json());
  },
  getMachine: (id: number): Promise<any> => {
    return fetch(
      `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/machines/${id}/`,
      {
        method: "GET",
        headers: commonHeaderJson,
      }
    ).then((res) => res.json());
  },
};
export default machineService;
