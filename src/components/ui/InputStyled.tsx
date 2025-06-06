import { styled } from "@stitches/react";
import { theme } from "../../../stitches.config";

const InputStyled = styled("input", {
  border: `${theme.borderWidth.sm} solid ${theme.colors.light}`,
  borderRadius: theme.borderRadius.md,
  padding: theme.padding.md,
  fontSize: theme.fontSizes.md,
  color: theme.colors.black,
  width: "90%",
  textAlign: "left",
});

export default InputStyled;
