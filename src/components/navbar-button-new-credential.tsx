import ButtonStyled from "./ui/ButtonStyled";
import DialogNewCredentials from "./dialog-new-credentials";

const NavBarButtonNewCredential = () => {
  return (
    <>
      <DialogNewCredentials trigger={<ButtonStyled>New Credential</ButtonStyled>} />
    </>
  );
};

export default NavBarButtonNewCredential;
