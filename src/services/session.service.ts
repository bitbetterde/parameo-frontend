import { ISession } from "@interfaces/ISession.ts";

interface ICreateSessionData {
  product_id: number;
  machine_id: number;
}

export interface PartConfiguration {
  part_id: number;
  material_id: number;
  parameters: IConfiguredParameter[];
}

export interface IConfiguredParameter {
  parameter_id: number;
  value: number;
}

export interface IUpdateSessionData {
  session: {
    name?: string;
  };
  parts: PartConfiguration[];
}

const sessionService = {
  getSession: (data: ICreateSessionData): Promise<ISession> => {
    return fetch(
      `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/sessions/`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: "Token 6ac946d67e890845bb97248270baed92ba4d4ec7",
          "content-type": "application/json",
        },
      }
    ).then((res) => res.json());
  },

  updateSession: (
    uuid: string,
    data: IUpdateSessionData
  ): Promise<ISession> => {
    return fetch(
      `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/sessions/${uuid}/`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          Authorization: "Token 6ac946d67e890845bb97248270baed92ba4d4ec7",
          "content-type": "application/json",
        },
      }
    ).then((res) => res.json());
  },

  regeneratePreview: (uuid: string): Promise<ISession[]> => {
    return fetch(
      `https://${
        import.meta.env.VITE_PARAMEO_BACKEND_URL
      }/sessions/${uuid}/preview/`,
      {
        method: "GET",
        headers: {
          Authorization: "Token 6ac946d67e890845bb97248270baed92ba4d4ec7",
          "content-type": "application/json",
        },
      }
    ).then((res) => res.json());
  },

  regenerateFormats: (uuid: string): Promise<ISession[]> => {
    return fetch(
      `https://${
        import.meta.env.VITE_PARAMEO_BACKEND_URL
      }/sessions/${uuid}/regenerate/`,
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
export default sessionService;
