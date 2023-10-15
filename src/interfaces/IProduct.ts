export interface IProductPart {
  id: number;
  label: string;
  is_main: boolean;
  parameters: IProductPartParameter[];
  materials: IProductPartMaterial[];
}

export interface IProductPartParameter {
  id: number;
  alias: string;
  type: string;
  unit: string;
  label: string;
  tooltip_text: string;
  default_value: number;
  measure_step: number;
  minimum: number;
  maximum: number;
}

export interface IProductPartMaterial {
  id: number;
  type: string;
  title_en: string;
  title_de: string;
  origin: string;
  description_en: string;
  description_de: string;
  processable_cnc: boolean;
  processable_lasercut: boolean;
  thickness: number;
  height: number;
  width: number;
  production_hints: null;
}

export interface IProduct {
  id: number;
  title: string;
  machine_type: string;
  description: string;
  pictures: { image_url: string }[];
  designer_url: string;
  product_url: string;
  project_file_path: string;
  designer_image_file: string;
  designer_name: string;
  subtitle: string;
  parts: IProductPart[];
  preview_file_2d?: string;
  preview_file_3d?: string;
}
