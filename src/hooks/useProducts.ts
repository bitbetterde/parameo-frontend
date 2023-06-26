import useSWR from "swr";

const useProducts = (id?: string) => {
  const { data, error, isLoading } = useSWR(
    `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/products/${id || ""}`,
    (...args) => fetch(...args).then((res) => res.json())
  );

  return {
    products: data,
    isLoading,
    isError: error,
  };
};

export default useProducts;