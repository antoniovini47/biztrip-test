import { Dialog } from "radix-ui";
import { styled } from "@stitches/react";
import { theme } from "../../../stitches.config";
import { X } from "lucide-react";

const DialogContentStyled = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.colors.light,
  borderRadius: theme.borderRadius.md,
  border: `1px solid ${theme.colors.secondary}`,
  width: "25vw",
  minWidth: "450px",
});

const HeaderStyled = styled(Dialog.Title, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.colors.white,
  gap: theme.gap.md,
  marginBottom: 0,
  marginTop: 0,
  padding: theme.padding.md,
  borderTopLeftRadius: theme.borderRadius.md,
  borderTopRightRadius: theme.borderRadius.md,
});

const CloseButtonStyled = styled(X, {
  cursor: "pointer",
  "&:hover": {
    color: theme.colors.secondaryOnHover,

    transition: "color 300ms, background-color 300ms",
  },
});

const ContentStyled = styled("div", {
  padding: theme.padding.md,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

type DialogStyledProps = {
  title: string;
  trigger: React.ReactNode;
  content?: React.ReactNode;
};

const DialogStyled = ({ title, trigger, content }: DialogStyledProps) => {
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
        </DialogContentStyled>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogStyled;
