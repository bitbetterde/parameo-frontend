import type { IProduct } from "./IProduct";
import type { IConfiguredParameter } from "@stores/session.store";

export interface ISessionBase {
  uuid: string;
  created: string;
  name: string;
  user_email_address: string;
  machine_id: number;
  last_updated: string;
  preview_file_3d_url: string;
  gcode_files_zip_url: string;
  all_files_zip_url: string;
  dxf_file_url: string;
  bom_file_url: string;
  machine_time: { hours: number; minutes: number; seconds: number };
  material_needed: string;
  material_price: number;
  machine_kwh: number;
}
export interface ISession extends ISessionBase {
  product: IProduct;
  co2_emissions: { label: string; value: number }[];
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
    },
  ];
}
