import { catchAndPrintFetchError, commonHeaderJson } from "./util";
import type { IProduct } from "@interfaces/IProduct";

const productService = {
  getProducts: (): Promise<IProduct[]> => {
    return catchAndPrintFetchError(
      fetch(`https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/products/`, {
        method: "GET",
        headers: commonHeaderJson,
      })
    ).then((res) => res?.json());
  },
  getProduct: (id: number): Promise<IProduct> => {
    return catchAndPrintFetchError(
      fetch(
        `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/products/${id}/`,
        {
          method: "GET",
          headers: commonHeaderJson,
        }
      )
    ).then((res) => res?.json());
  },
};
export default productService;
