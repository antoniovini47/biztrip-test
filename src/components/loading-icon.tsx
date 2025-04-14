import { RefreshCwIcon } from "lucide-react";
import { styled, keyframes } from "@stitches/react";
import { theme } from "../../stitches.config";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const LoadingIconStyled = styled(RefreshCwIcon, {
  animation: `${rotate} 500ms ease-in-out infinite`,
  color: theme.colors.white,
});

const defaultSize = 11;

type LoadingIconProps = {
  size?: number;
};

const LoadingIcon = ({ size = defaultSize }: LoadingIconProps) => {
  return <LoadingIconStyled size={size} />;
};

export default LoadingIcon;
