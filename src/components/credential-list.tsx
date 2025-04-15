import CredentialListItem from "./credential-list-item";
import { useGetAllCredentials } from "../queries/credential.queries";

const CredentialsList = () => {
  const { data, isLoading, isError, error } = useGetAllCredentials();

  console.log("data: ", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (data?.length === 0) {
    return <div>No credentials found</div>;
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
