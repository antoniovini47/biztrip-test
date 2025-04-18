import DialogStyled from "./ui/DialogStyled";
import FormCredential from "./form-credential";
import type { Credential } from "../types/credential.types";

type DialogNewCredentialsProps = {
  trigger: React.ReactNode;
  credentials?: Credential;
};

const DialogCredentials = ({ trigger, credentials }: DialogNewCredentialsProps) => {
  const title = credentials ? `Edit ${credentials.description} Credentials` : "New Credentials";

  return (
    <DialogStyled
      title={title}
      trigger={trigger}
      content={<FormCredential credential={credentials} />}
    />
  );
};

export default DialogCredentials;
