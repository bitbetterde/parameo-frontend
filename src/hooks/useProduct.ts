import useSWR from "swr";
import { IProduct } from "@interfaces/IProduct.ts";

const useProduct = (
  id: number
): { isLoading: boolean; isError: boolean; product: IProduct } => {
  const { data, error, isLoading } = useSWR(
    `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/products/${id}`,
    (...args) => fetch(...args).then((res) => res.json()),
    {
      revalidateOnFocus: false,
    }
  );

  return {
    product: data,
    isLoading,
    isError: error,
  };
};

export default useProduct;
