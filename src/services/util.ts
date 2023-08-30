export const commonHeaderJson: HeadersInit = {
  "content-type": "application/json",
};

export const catchAndPrintFetchError = (p: Promise<Response>) => {
  return p
    .then((r: Response) => {
      if (r?.ok) {
        return r;
      } else {
        console.error("Server returned an error: ", r.text());
      }
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
};
