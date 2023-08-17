
const machineService = {
  getMachines: (): Promise<any[]> => {
    return fetch(
      `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/machines/`,
      {
        method: "GET",
        headers: {
          Authorization: "Token 6ac946d67e890845bb97248270baed92ba4d4ec7",
          "content-type": "application/json",
        },
      }
    ).then((res) => res.json());
  },
  getMachine: (id: number): Promise<any> => {
    return fetch(
      `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/machines/${id}/`,
      {
        method: "GET",
        headers: {
          Authorization: "Token 6ac946d67e890845bb97248270baed92ba4d4ec7",
          "content-type": "application/json",
        },
      }
    ).then((res) => res.json());
  },
};
export default machineService;
