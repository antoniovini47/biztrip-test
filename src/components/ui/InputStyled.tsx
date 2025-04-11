import { styled } from "@stitches/react";
import { theme } from "../../../stitches.config";

const InputStyled = styled("input", {
  border: `1px solid ${theme.colors.secondary}`,
  borderRadius: theme.borderRadius.md,
  padding: theme.padding.md,
  fontSize: theme.fontSizes.md,
  color: theme.colors.black,
  width: "80%",
  textAlign: "left",
});

export default InputStyled;
