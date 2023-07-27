import { ISession } from "@interfaces/ISession.ts";

const sessionService = {
  getSession: (): Promise<ISession[]> => {
    return fetch(
      `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/sessions`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
  },
};
export default sessionService;
