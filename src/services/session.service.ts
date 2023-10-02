import { fetchAndHandleErrors } from "./util";
import type { ISession, ISessionBase } from "@interfaces/ISession";

interface ICreateSessionData {
  product_id: number;
  machine_id: number;
}

export interface IPartConfiguration {
  part_id: number;
  material_id?: number;
  parameters: IConfiguredParameter[];
}

export interface IConfiguredParameter {
  parameter_id: number;
  value: number;
}

export interface IUpdateSessionData {
  session: {
    name?: string;
    user_email_address?: string;
  };
  parts: IPartConfiguration[];
}

interface IPreviewFile {
  url: string;
  hash: string;
}

interface ISessionId {
  uuid: string;
}

const sessionService = {
  getSession: (id: string): Promise<ISessionBase> => {
    return fetchAndHandleErrors<ISessionBase>(`/sessions/${id}`, {
      method: "GET",
    });
  },

  createSession: async (data: ICreateSessionData): Promise<string> => {
    const sessionId = await fetchAndHandleErrors<ISessionId>("/sessions/", {
      method: "POST",
      body: JSON.stringify(data),
    });

    return sessionId.uuid;
  },

  updateSession: async (
    uuid: string,
    data: IUpdateSessionData
  ): Promise<ISessionBase> => {
    const session = await fetchAndHandleErrors<ISessionBase>(
      `/sessions/${uuid}/`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );

    return session;
  },

  regeneratePreview: async (uuid: string): Promise<IPreviewFile> => {
    const previewFile = await fetchAndHandleErrors<IPreviewFile>(
      `/sessions/${uuid}/preview/`
    );

    return previewFile;
  },

  regenerateFormats: async (
    uuid: string,
    data: string[]
  ): Promise<ISession> => {
    const formats = await fetchAndHandleErrors<ISession>(
      `/sessions/${uuid}/regenerate/`,
      {
        method: "POST",
        body: JSON.stringify({ user_interests: data }),
      }
    );

    return formats;
  },
};
export default sessionService;
