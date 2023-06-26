import useSWR from "swr";

const useProducers = (id?: string) => {
const {data, error, isLoading} = useSWR(
    `https://${import.meta.env.VITE_PARAMEO_BACKEND_URL}/producers/${id || ""}`,
    (...args) => fetch(...args).then((res) => res.json())
)

return {
    producers: data,
    isLoading,
    isError: error,
}
}

export default useProducers;