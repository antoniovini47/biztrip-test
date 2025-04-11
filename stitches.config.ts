import { createStitches } from "@stitches/react";

export const { styled, theme, globalCss } = createStitches({
  theme: {
    colors: {
      primary: "#0064C5",
      primaryOnHover: "#0058B1",
      secondary: "#C2CCD6",
      secondaryOnHover: "#A6B0B9",
      light: "#F0F2F5",
      dark: "#1A1A1F",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontSizes: {
      sm: "12px",
      md: "16px",
      lg: "20px",
      title: "32px",
    },
    fontWeights: {
      bold: "600",
    },
    padding: {
      sm: "8px",
      md: "16px",
      lg: "24px",
    },
    gap: {
      sm: "8px",
      md: "16px",
    },
    borderRadius: {
      md: "8px",
    },
  },
});

export const globalStyles = globalCss({
  ":root": {
    fontFamily: "system-ui, Inter",
  },
});
