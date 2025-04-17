import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { CredentialsResponse } from "../types/credential.types";
import { getAllCredentials } from "../service/credential.service";

export const useGetAllCredentials = (
  options?: Omit<UseQueryOptions<CredentialsResponse, Error>, "queryKey" | "queryFn">
) => {
  return useQuery<CredentialsResponse, Error>({
    queryKey: ["credentials"],
    queryFn: () => getAllCredentials(),
    ...options,
  });
};
