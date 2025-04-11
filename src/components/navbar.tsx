import { styled } from "@stitches/react";
import NavBarButtonNewCredential from "./navbar-button-new-credential";
import NavBarTitle from "./navbar-title";
import { theme } from "../../stitches.config";

const NavBarStyles = styled("div", {
  padding: theme.padding.lg,
  backgroundColor: theme.colors.light,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `1px solid ${theme.colors.secondary}`,
});

const Navbar = () => {
  return (
    <NavBarStyles>
      <NavBarTitle />
      <NavBarButtonNewCredential />
    </NavBarStyles>
  );
};

export default Navbar;
