import get from "lodash/get";

export const config = {
  apiUrl: import.meta.env.VITE_BASE_API_URL,
  loginUserEmail: import.meta.env.VITE_LOGIN_USER_EMAIL,
  loginUserPassword: import.meta.env.VITE_LOGIN_USER_PASSWORD,
};

type Paths<T> = T extends object
  ? { [K in keyof T]: `${Exclude<K, symbol>}${"" | `.${Paths<T[K]>}`}` }[keyof T]
  : never;

type Key = Paths<typeof config>;

export function getConfig<T>(key: Key, defaultValue?: T): T {
  return get(config, key, defaultValue as T) as T;
}
