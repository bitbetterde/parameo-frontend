import { fetchAndHandleErrors } from "./util";

export interface IProducer {
  id?: number;
  name: string;
  website_url: string;
  order_type: "EMAIL" | "SHOPIFY";
  pictures: [
    {
      image_url: string;
    },
  ];
  location_lat: string;
  location_long: string;
  location_name: string;
  description: string;
  email: string;
  phone: string;
}

const producerService = {
  getProducers: (): Promise<IProducer[]> => {
    return fetchAndHandleErrors("/producers/", {
      method: "GET",
    });
  },
  getProducer: (id: number): Promise<IProducer> => {
    return fetchAndHandleErrors<IProducer>(`/producers/${id}/`);
  },
};
export default producerService;
