import { catchAndPrintFetchError, commonHeaderJson } from "./util";
import type { ISession } from "@interfaces/ISession";

interface ICreateSessionData {
  product_id: number;
  machine_id: number;
}

export interface IPartConfiguration {
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
  parts: IPartConfiguration[];
}

const sessionService = {
  getSession: (data: ICreateSessionData): Promise<ISession> => {
    return catchAndPrintFetchError(
      fetch(`https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/sessions/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: commonHeaderJson,
      })
    ).then((res) => res?.json());
  },

  updateSession: (
    uuid: string,
    data: IUpdateSessionData
  ): Promise<ISession> => {
    return catchAndPrintFetchError(
      fetch(
        `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/sessions/${uuid}/`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: commonHeaderJson,
        }
      )
    ).then((res) => res?.json());
  },

  regeneratePreview: (uuid: string): Promise<any> => {
    return catchAndPrintFetchError(
      fetch(
        `https://${
          import.meta.env.VITE_PARAMEO_BACKEND_URL
        }/sessions/${uuid}/preview/`,
        {
          method: "GET",
          headers: commonHeaderJson,
        }
      )
    ).then((res) => res?.json());
  },

  regenerateFormats: (uuid: string): Promise<ISession[]> => {
    return catchAndPrintFetchError(
      fetch(
        `https://${
          import.meta.env.VITE_PARAMEO_BACKEND_URL
        }/sessions/${uuid}/regenerate/`,
        {
          method: "GET",
          headers: commonHeaderJson,
        }
      )
    ).then((res) => res?.json());
  },
};
export default sessionService;
