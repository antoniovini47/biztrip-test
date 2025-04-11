import { createStitches } from "@stitches/react";

export const { styled, theme, globalCss } = createStitches({
  theme: {
    colors: {
      primary: "#0064C5",
      primaryOnHover: "#0058B1",
      secondary: "#C2CCD6",
      light: "#F0F2F5",
      dark: "#1A1A1F",
    },
    fontSizes: {
      sm: "12px",
      md: "16px",
      lg: "20px",
      title: "32px",
    },
    padding: {
      md: "16px",
    },
  },
});

export const globalStyles = globalCss({
  ":root": {
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
});
