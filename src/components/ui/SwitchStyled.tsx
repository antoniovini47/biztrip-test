import { styled } from "@stitches/react";
import { Switch } from "radix-ui";
import { theme } from "../../../stitches.config";

const SwitchRootStyled = styled(Switch.Root, {
  all: "unset",
  width: 42,
  height: 25,
  backgroundColor: theme.colors.primary,
});

const SwitchThumbStyled = styled(Switch.Thumb, {
  backgroundColor: theme.colors.primary,
});

const SwitchStyled = () => {
  return (
    <SwitchRootStyled>
      <SwitchThumbStyled />
    </SwitchRootStyled>
  );
};

export default SwitchStyled;
