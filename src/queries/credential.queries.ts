import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import * as credentialService from "../service/credential.service";
import * as credentialTypes from "../types/credential.types";

export const useGetAllCredentials = (
  options?: Omit<
    UseQueryOptions<credentialTypes.CredentialsResponse, Error>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<credentialTypes.CredentialsResponse, Error>({
    queryKey: ["credentials"],
    queryFn: () => credentialService.getAllCredentials(),
    ...options,
  });
};

export const useGetCredentialParameters = (
  providerUuid: string,
  options?: Omit<
    UseQueryOptions<credentialTypes.CredentialParametersResponse, Error>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<credentialTypes.CredentialParametersResponse, Error>({
    queryKey: ["credential-parameters", providerUuid],
    queryFn: () => credentialService.getCredentialParameters(providerUuid),
    ...options,
  });
};
