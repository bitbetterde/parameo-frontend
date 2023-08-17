const producerService = {
  getProducers: (): Promise<any[]> => {
    return fetch(
      `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/producers/`,
      {
        method: "GET",
        headers: {
          Authorization: "Token 6ac946d67e890845bb97248270baed92ba4d4ec7",
          "content-type": "application/json",
        },
      }
    ).then((res) => res.json());
  },
  getProducer: (id: number): Promise<any> => {
    return fetch(
      `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/producers/${id}/`,
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
export default producerService;
