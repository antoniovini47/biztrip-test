export type Credential = {
  credential_uuid: string;
  description: string;
  service_type: string;
  provider: {
    uuid: string;
    name: string;
    slug: string;
    logo: string;
    description: string;
    service_type: string;
    active: string;
  };
  active: boolean;
  credential_values: string;
};

export type CredentialsResponse = Credential[];

export type ToggleActiveCredentialParams = {
  credentialUuid: string;
  active: boolean;
};
