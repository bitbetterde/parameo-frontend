export const commonHeaders: HeadersInit = {
  "content-type": "application/json",
};

const BASE_URL = import.meta.env.VITE_PARAMEO_BACKEND_URL;

export const fetchAndHandleErrors = async <T>(
  resource: RequestInfo,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(BASE_URL + resource, {
    ...options,
    headers: {
      ...options?.headers,
      ...commonHeaders,
    },
  });

  if (!response.ok) {
    throw new Error("Server returned Error: " + (await response.text()));
  }

  return response.json();
};
