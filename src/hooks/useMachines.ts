import useSWR from "swr";

const useMachines = (id?: string) => {
  const { data, error, isLoading } = useSWR(
    `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/machines/${id || ""}`,
    (...args) => fetch(...args).then((res) => res.json()),
    { revalidateOnFocus: false }
  );

  return {
    machines: data,
    isLoading,
    isError: error,
  };
};

export default useMachines;
