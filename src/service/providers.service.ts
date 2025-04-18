import { api } from "./api.service";
import { Provider } from "../types/credential.types";
import { getConfig } from "../lib/config";

export async function getProviders(): Promise<Provider[]> {
  const response = await api(`${getConfig("apiUrl")}/providers`, {
    method: "GET",
  });

  return response.json();
}
