import { api } from "./api.service";
import { getConfig } from "../lib/config";
import { LoginParams, LoginResponse } from "../types/auth.types";

export async function login(loginParams: LoginParams): Promise<LoginResponse> {
  const response = await api(`${getConfig("apiUrl")}/login`, {
    method: "POST",
    body: JSON.stringify(loginParams),
  });

  if (!response.ok) {
    throw new Error("Failed to login!");
  }

  return response.json();
}
