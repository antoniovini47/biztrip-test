import ButtonStyled from "./ui/ButtonStyled";
import DialogCredentials from "./dialog-credentials";

const NavBarButtonNewCredential = () => {
  return (
    <>
      <DialogCredentials trigger={<ButtonStyled>New Credential</ButtonStyled>} />
    </>
  );
};

export default NavBarButtonNewCredential;
