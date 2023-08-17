import { IProduct } from "@interfaces/IProduct.ts";

const productService = {
  getProducts: (): Promise<IProduct[]> => {
    return fetch(
      `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/products/`,
      {
        method: "GET",
        headers: {
          Authorization: "Token 6ac946d67e890845bb97248270baed92ba4d4ec7",
          "content-type": "application/json",
        },
      }
    ).then((res) => res.json());
  },
  getProduct: (id: number): Promise<IProduct> => {
    return fetch(
      `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/products/${id}/`,
      {
        method: "GET",
        headers: {
          Authorization: "Token 6ac946d67e890845bb97248270baed92ba4d4ec7",
          "content-type": "application/json",
        },
      }
    ).then((res) => res.json());
  },
};
export default productService;
