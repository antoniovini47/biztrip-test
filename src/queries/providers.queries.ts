import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import * as providersService from "../service/providers.service";
import { Provider } from "../types/credential.types";

export const useGetProviders = (
  options?: Omit<UseQueryOptions<Provider[], Error>, "queryKey" | "queryFn">
) => {
  return useQuery<Provider[], Error>({
    queryKey: ["providers"],
    queryFn: providersService.getProviders,
    ...options,
  });
};
