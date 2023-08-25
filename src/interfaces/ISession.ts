import { IProduct } from "@interfaces/IProduct.ts";
import { IConfiguredParameter } from "../services/session.service.ts";

export interface ISession {
  uuid: string;
  created: string;
  name: string;
  user_email_address: string;
  product: IProduct;
  machine: number;
  last_updated: string;
  preview_file_url: string;
  gcode_file_url: string;
  dxf_file_url: string;
  material_price: null;
  machine_time: null;
  co2_emissions: null;
  user_interests: [];
  configured_parts: [
    {
      id: number;
      part: { id: number; label: string; is_main: boolean };
      selected_material: {
        id: number;
        type: string;
        title_de: string;
        title_en: string;
        thickness: number;
        height: number;
        width: number;
      };
      configured_parameters: IConfiguredParameter[];
    }
  ];
}
