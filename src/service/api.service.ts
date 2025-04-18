export async function api(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<Response> {
  const localStorage =
    typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null };

  const defaultHeaders: Record<string, string> = {
    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  };

  if (init?.body) {
    defaultHeaders["Content-Type"] = "application/json";
  }

  const response = await fetch(input, {
    ...init,
    headers: {
      ...defaultHeaders,
      ...init?.headers,
    },
  });

  return response;
}
