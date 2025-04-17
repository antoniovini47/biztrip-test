import { styled } from "@stitches/react";
import { Switch } from "radix-ui";
import { theme } from "../../../stitches.config";
import { CheckIcon } from "lucide-react";

const SwitchRootStyled = styled(Switch.Root, {
  width: "48px",
  height: "24px",
  borderRadius: theme.borderRadius.lg,
  border: `${theme.borderWidth.md} solid ${theme.colors.primary}`,
  position: "relative",
  '&[data-state="checked"]': {
    backgroundColor: theme.colors.lightBlue,
  },
  '&[data-state="unchecked"]': {
    backgroundColor: theme.colors.white,
    border: `${theme.borderWidth.md} solid ${theme.colors.secondary}`,
  },
});

const SwitchThumbStyled = styled(Switch.Thumb, {
  display: "block",
  width: "16px",
  height: "16px",
  backgroundColor: theme.colors.primary,
  borderRadius: theme.borderRadius.lg,
  transition: "transform 100ms",
  willChange: "transform",
  '&[data-state="checked"]': {
    transform: "translateX(18px)",
  },
  '&[data-state="unchecked"]': {
    transform: "translateX(0px)",
    backgroundColor: theme.colors.secondary,
  },
});

type SwitchStyledProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
};

const SwitchStyled = ({ checked, onCheckedChange, disabled }: SwitchStyledProps) => {
  return (
    <SwitchRootStyled checked={checked} onCheckedChange={onCheckedChange} disabled={disabled}>
      <SwitchThumbStyled>
        <CheckIcon size={10} color={theme.colors.white.toString()} />
      </SwitchThumbStyled>
    </SwitchRootStyled>
  );
};

export default SwitchStyled;
