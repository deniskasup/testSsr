import { useHttpClient } from "~/composables/useHttpClient";


export const useApiInstance = (apiConstructor: any) => {
  const httpClient = useHttpClient();

  return new apiConstructor({
    httpClient,
  });
};