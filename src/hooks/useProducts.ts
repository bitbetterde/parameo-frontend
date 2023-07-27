import useSWR from "swr";
import { IProduct } from "@interfaces/IProduct.ts";

const useProducts = (): {
  isLoading: boolean;
  isError: boolean;
  products: IProduct[];
} => {
  const { data, error, isLoading } = useSWR(
    `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/products`,
    (...args) => fetch(...args).then((res) => res.json()),
    {
      revalidateOnFocus: false,
    }
  );

  return {
    products: Array.isArray(data) ? data : [data],
    isLoading,
    isError: error,
  };
};

export default useProducts;
