import { styled } from "@stitches/react";
import { theme } from "../../../stitches.config";
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const SelectStyles = styled("select", {
  border: `${theme.borderWidth.sm} solid ${theme.colors.light}`,
  borderRadius: theme.borderRadius.md,
  padding: theme.padding.md,
  fontSize: theme.fontSizes.md,
  color: theme.colors.black,
  width: "100%",
});

const SelectStyled = ({ children, ...props }: SelectProps) => {
  return <SelectStyles {...props}>{children}</SelectStyles>;
};

export default SelectStyled;
