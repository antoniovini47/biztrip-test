import DialogStyled from "./ui/DialogStyled";
import FormCredential from "./form-credential";

type DialogNewCredentialsProps = {
  trigger: React.ReactNode;
};

const DialogNewCredentials = ({ trigger }: DialogNewCredentialsProps) => {
  const title = "New Credentials";

  return <DialogStyled title={title} trigger={trigger} content={<FormCredential />} />;
};

export default DialogNewCredentials;
