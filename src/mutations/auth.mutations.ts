import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import * as AuthService from "../service/auth.service";
import { LoginParams, SuccessfulLoginResponse } from "../types/auth.types";

export const useLoginMutation = (
  options?: UseMutationOptions<SuccessfulLoginResponse, Error, LoginParams>
) => {
  return useMutation({
    mutationFn: (data: LoginParams) => AuthService.login(data),
    ...options,
  });
};
