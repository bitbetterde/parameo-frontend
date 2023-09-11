export const commonHeaders: HeadersInit = {
  "content-type": "application/json",
};

export const fetchAndHandleErrors = async <T>(
  request: RequestInfo,
): Promise<T> => {
  const response = await fetch(request, {
    headers: {
      ...commonHeaders,
    },
  });

  if (!response.ok) {
    throw new Error("Server returned Error: " + (await response.text()));
  }

  return response.json();
};
