import { styled } from "@stitches/react";
import { theme } from "../../../stitches.config";

const buttonStyles = {
  border: {
    borderRadius: "8px",
    borderWidth: "1px",
  },
  cursor: {
    pointer: "pointer",
  },
};

const ButtonStyled = styled("button", {
  backgroundColor: theme.colors.primary,
  color: theme.colors.light,
  borderRadius: buttonStyles.border.borderRadius,
  borderColor: theme.colors.primary,
  borderWidth: buttonStyles.border.borderWidth,
  padding: theme.padding.md,
  fontSize: theme.fontSizes.sm,
  fontWeight: theme.fontWeights.bold,
  cursor: buttonStyles.cursor.pointer,
  "&:hover": {
    backgroundColor: theme.colors.primaryOnHover,
    transform: "scale(1.05)",
    transition: "background-color 300ms, transform 300ms",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: theme.colors.primary,
      },
      secondary: {
        backgroundColor: theme.colors.secondary,
        color: theme.colors.dark,
        borderColor: theme.colors.secondary,
        "&:hover": {
          backgroundColor: theme.colors.secondaryOnHover,
        },
      },
    },
  },
});

export default ButtonStyled;
