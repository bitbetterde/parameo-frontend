export const commonHeaderJson: HeadersInit = {
  "content-type": "application/json",
};

export const fetchAndHandleErrors = async (request: RequestInfo) => {
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error("Server returned Error: ");
  }

  return response.json().catch(() => ({}));
};
