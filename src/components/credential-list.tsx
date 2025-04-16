import CredentialListItem from "./credential-list-item";
import { useGetAllCredentials } from "../queries/credential.queries";

const CredentialsList = () => {
  const { data, isLoading, isError, error } = useGetAllCredentials();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}>
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}>
        Error: {error.message}
      </div>
    );
  }

  if (data?.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}>
        No credentials found
      </div>
    );
  }

  return (
    <>
      {data?.map((credential) => (
        <CredentialListItem key={credential.credential_uuid} credential={credential} />
      ))}
    </>
  );
};

export default CredentialsList;
