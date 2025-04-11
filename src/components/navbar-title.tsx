import { styled } from "@stitches/react";
import { theme } from "../../stitches.config";

const NavBarTitleStyled = styled("span", {
  fontSize: theme.fontSizes.title,
  color: theme.colors.dark,
  fontWeight: "bold",
});

const NavBarTitle = () => {
  return <NavBarTitleStyled>BizTrip</NavBarTitleStyled>;
};

export default NavBarTitle;
