import { fetchAndHandleErrors, commonHeaderJson } from "./util";
import type { IProduct } from "@interfaces/IProduct";

const productService = {
  getProducts: (): Promise<IProduct[]> => {
    return fetchAndHandleErrors(
      new Request(
        `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/products/`,
        {
          method: "GET",
          headers: commonHeaderJson,
        }
      )
    );
  },
  getProduct: (id: number): Promise<IProduct> => {
    return fetchAndHandleErrors(
      new Request(
        `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/products/${id}/`,
        {
          method: "GET",
          headers: commonHeaderJson,
        }
      )
    );
  },
};
export default productService;
