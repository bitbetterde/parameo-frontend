import { fetchAndHandleErrors } from "./util";
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

export interface IGenerateFormatsResultData {
  all_files_zip_url: string;
  dxf_file_url: string;
  gcode_file_url: string;
  co2_emissions: { label: string; value: number }[];
  material_price: number;
  machine_time: number;
}

const sessionService = {
  getSession: (data: ICreateSessionData): Promise<ISession> => {
    return fetchAndHandleErrors(
      new Request(
        `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/sessions/`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      )
    );
  },

  updateSession: (
    uuid: string,
    data: IUpdateSessionData
  ): Promise<ISession> => {
    return fetchAndHandleErrors(
      new Request(
        `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/sessions/${uuid}/`,
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      )
    );
  },

  // TODO: Add response type
  regeneratePreview: (uuid: string): Promise<any> => {
    return fetchAndHandleErrors(
      new Request(
        `https://${
          import.meta.env.VITE_PARAMEO_BACKEND_URL
        }/sessions/${uuid}/preview/`,
        {
          method: "GET",
        }
      )
    );
  },

  regenerateFormats: (
    uuid: string,
    data: string[]
  ): Promise<IGenerateFormatsResultData> => {
    return fetchAndHandleErrors(
      new Request(
        `https://${
          import.meta.env.VITE_PARAMEO_BACKEND_URL
        }/sessions/${uuid}/regenerate/`,
        {
          method: "POST",
          body: JSON.stringify({ user_interests: data }),
        }
      )
    );
  },
};
export default sessionService;
