import { fetchAndHandleErrors } from "./util";
import type { IProduct } from "@interfaces/IProduct";

const productService = {
  getProducts: (): Promise<IProduct[]> => {
    return fetchAndHandleErrors(`/products/`, {
      method: "GET",
    });
  },
  getProduct: (id: number): Promise<IProduct> => {
    return fetchAndHandleErrors(`/products/${id}/`, {
      method: "GET",
    });
  },
};

export default productService;
