export type Credential = {
  credential_uuid: string;
  description: string;
  service_type: string;
  provider: Provider;
  active: boolean;
  credential_values: string;
};

export type CredentialsResponse = Credential[];

export type ToggleActiveCredentialParams = {
  credentialUuid: string;
  active: boolean;
};

export type ValidServiceType = "airway" | "vehicle" | "road" | "hotel";

export type FormInputs = {
  provider: string | undefined;
  credentialName: string | undefined;
  serviceType: ValidServiceType;
  parameters: Record<string, string>;
};

export type Provider = {
  uuid: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  service_type: string;
  active: string;
};

export type CredentialParameters = {
  uuid: string;
  title: string;
  description: string;
  input_type: string;
  required: boolean;
};

export type CredentialParametersResponse = {
  data: {
    service_types: ValidServiceType[];
    parameters: CredentialParameters[];
  };
};
