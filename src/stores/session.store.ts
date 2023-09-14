import { create } from "zustand";
import { devtools } from "zustand/middleware";
import sessionService from "@services/session.service";
import type { ISession, ISessionBase } from "@interfaces/ISession";

export interface IPartConfiguration {
  part_id: number;
  material_id: number;
  parameters: IConfiguredParameter[];
}

export interface IConfiguredParameter {
  parameter_id: number;
  value: number;
}

export interface IGenerateFormatsResultData {
  all_files_zip_url: string;
  dxf_file_url: string;
  gcode_files_zip_url: string;
  co2_emissions: { label: string; value: number }[];
  material_price: number;
  machine_time: number;
}

interface IPreviewFile {
  url: string;
  hash: string;
}

interface SessionStore {
  session: ISessionBase | null;
  previewFile: IPreviewFile | null;
  loadSession: (id: string) => Promise<void>;
  regeneratePreview: (
    productId: number,
    machineId: number,
    partsData: IPartConfiguration[],
    projectName?: string
  ) => Promise<void>;
  regenerateFormats: (
    productId: number,
    machineId: number,
    partsData: IPartConfiguration[],
    data: string[],
    projectName?: string
  ) => Promise<string>;
  createOrUpdateSession: (
    productId: number,
    machineId: number,
    partsData: IPartConfiguration[],
    projectName?: string
  ) => Promise<void>;
}

export function isISession(
  session: ISessionBase | ISession
): session is ISession {
  return (session as ISession).dxf_file_url !== undefined;
}

const useSessionStore = create<SessionStore>()(
  devtools((set, get) => ({
    previewFile: null,
    session: null,
    loadSession: async (id) => {
      const session = await sessionService.getSession(id);
      set((state) => ({ ...state, session }));
      set((state) => ({
        ...state,
        previewFile: { url: session.preview_file_3d_url, hash: "" },
      }));
    },
    createOrUpdateSession: async (
      productId,
      machineId,
      partsData,
      projectName?
    ) => {
      let sessionId = get().session?.uuid;

      if (!sessionId) {
        sessionId = await sessionService.createSession({
          product_id: productId ?? 0,
          machine_id: machineId ?? 0,
        });
      }

      const session = await sessionService.updateSession(sessionId, {
        // This can be used to update the session name/email – currently not used
        session: { name: projectName },
        parts: partsData,
      });

      set((state) => ({ ...state, session }));
    },
    regeneratePreview: async (productId, machineId, partsData, projectName) => {
      await get().createOrUpdateSession(
        productId,
        machineId,
        partsData,
        projectName
      );
      const sessionId = get().session?.uuid;
      if (sessionId) {
        const previewFile = await sessionService.regeneratePreview(sessionId);
        set((state) => ({ ...state, previewFile }));
      }
    },
    regenerateFormats: async (
      productId,
      machineId,
      partsData,
      data,
      projectName
    ) => {
      await get().createOrUpdateSession(
        productId,
        machineId,
        partsData,
        projectName
      );
      const sessionId = get().session?.uuid;
      if (sessionId) {
        const session = await sessionService.regenerateFormats(sessionId, data);
        set((state) => ({ ...state, session }));
      }
      return sessionId as string;
    },
  }))
);

export default useSessionStore;
