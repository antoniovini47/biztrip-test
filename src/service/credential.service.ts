import { api } from "./api.service";
import { getConfig } from "../lib/config";
import { CredentialParametersResponse, CredentialsResponse } from "../types/credential.types";

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

export async function toggleActiveCredential(
  credentialUuid: string,
  active: boolean
): Promise<Response> {
  const response = await api(
    `${getConfig("apiUrl")}/credentials/${credentialUuid}/${active ? `inactive` : `active`}`,
    {
      method: "PATCH",
      body: JSON.stringify({}),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to toggle active credential!");
  }

  return response;
}

export async function getCredentialParameters(
  providerUuid: string
): Promise<CredentialParametersResponse> {
  const response = await api(`${getConfig("apiUrl")}/providers/${providerUuid}/parameters`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to get credential parameters!");
  }

  return response.json();
}
