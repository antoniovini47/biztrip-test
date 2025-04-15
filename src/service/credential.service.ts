import { api } from "./api.service";
import { getConfig } from "../lib/config";
import { CredentialsResponse } from "../types/credential.types";

export async function getAllCredentials(): Promise<CredentialsResponse> {
  const response = await api(`${getConfig("apiUrl")}/credentials`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to get credentials!");
  }

  const data = await response.json();

  return data.data;
}
