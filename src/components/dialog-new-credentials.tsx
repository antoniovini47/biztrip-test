import DialogStyled from "./ui/DialogStyled";

type DialogNewCredentialsProps = {
  trigger: React.ReactNode;
};

const DialogNewCredentials = ({ trigger }: DialogNewCredentialsProps) => {
  const title = "New Credentials";

  const DialogNewCredentialsContent = () => {
    return (
      <div>
        <h1>New Credentials</h1>
        <p>Content</p>
      </div>
    );
  };

  return (
    <DialogStyled
      title={title}
      trigger={trigger}
      content={DialogNewCredentialsContent()}
      onClick={() => {
        console.log("Clicked!");
      }}
      onClickText="Add Credential"
    />
  );
};

export default DialogNewCredentials;
