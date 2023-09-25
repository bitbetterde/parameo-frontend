import { fetchAndHandleErrors } from "./util";

export interface IMachine {
  id: number;
  type: string;
  title_en: string;
  title_de: string;
  project_url: string;
  documentation_url: string;
  repository_url: string;
  manufacturer: string;
  description_en: string;
  manufacturer_subtitle: string;
  manufacturer_image_file: string;
  production_hints: { language: string; topic: string; text: string }[];
  pictures: [
    {
      image_url: string;
    },
  ];
}

const machineService = {
  getMachines: (): Promise<IMachine[]> => {
    return fetchAndHandleErrors("/machines/", {
      method: "GET",
    });
  },
  getMachine: (id: number): Promise<IMachine> => {
    return fetchAndHandleErrors(`/machines/${id}/`, {
      method: "GET",
    });
  },
};
export default machineService;
