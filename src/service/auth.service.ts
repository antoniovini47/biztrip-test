import { api } from "./api.service";
import { getConfig } from "../lib/config";
import { LoginParams, SuccessfulLoginResponse } from "../types/auth.types";

export async function login(loginParams: LoginParams): Promise<SuccessfulLoginResponse> {
  const response = await api(`${getConfig("apiUrl")}/login`, {
    method: "POST",
    body: JSON.stringify(loginParams),
  });

  if (!response.ok) {
    throw new Error("Failed to login!");
  }

  return response.json();
}
