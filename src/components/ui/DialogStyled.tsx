import { Dialog } from "radix-ui";
import { styled } from "@stitches/react";
import { theme } from "../../../stitches.config";
import { X } from "lucide-react";
import ButtonStyled from "./ButtonStyled";

const DialogContentStyled = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.colors.light,
  borderRadius: theme.borderRadius.md,
  border: `1px solid ${theme.colors.secondary}`,
});

const HeaderStyled = styled(Dialog.Title, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  gap: theme.gap.md,
  marginBottom: 0,
  marginTop: 0,
  padding: theme.padding.md,
  borderTopLeftRadius: theme.borderRadius.md,
  borderTopRightRadius: theme.borderRadius.md,
});

const CloseButtonStyled = styled(X, {
  cursor: "pointer",
});

const ContentStyled = styled("div", {
  padding: theme.padding.md,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const FooterStyled = styled("div", {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottomLeftRadius: theme.borderRadius.md,
  borderBottomRightRadius: theme.borderRadius.md,
  padding: theme.padding.md,
});

type DialogStyledProps = {
  title: string;
  trigger: React.ReactNode;
  content?: React.ReactNode;
  onClick?: () => void;
  onClickText?: string;
};

const DialogStyled = ({ title, trigger, content, onClick, onClickText }: DialogStyledProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <DialogContentStyled>
          <HeaderStyled>
            {title}
            <Dialog.DialogClose asChild>
              <CloseButtonStyled />
            </Dialog.DialogClose>
          </HeaderStyled>
          <ContentStyled>{content}</ContentStyled>
          <FooterStyled>
            <Dialog.DialogClose asChild>
              <ButtonStyled variant="secondary">Cancel</ButtonStyled>
            </Dialog.DialogClose>
            <ButtonStyled onClick={onClick}>{onClickText}</ButtonStyled>
          </FooterStyled>
        </DialogContentStyled>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogStyled;
