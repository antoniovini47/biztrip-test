import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import * as CredentialService from "../service/credential.service";
import { ToggleActiveCredentialParams } from "../types/credential.types";

export const useToggleActiveCredentialMutation = (
  options?: UseMutationOptions<Response, Error, ToggleActiveCredentialParams>
) => {
  return useMutation({
    mutationFn: (data: ToggleActiveCredentialParams) =>
      CredentialService.toggleActiveCredential(data.credentialUuid, data.active),
    ...options,
  });
};
