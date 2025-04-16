import { styled } from "@stitches/react";
import { Edit } from "lucide-react";
import SwitchStyled from "./ui/SwitchStyled";
import { theme } from "../../stitches.config";
import ServiceTypeIcon from "./ui/ServiceIconType";
import { Credential } from "../types/credential.types";
import { useToggleActiveCredentialMutation } from "../mutations/credential.mutations";
import { useState } from "react";

const CredentialContainerStyled = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.colors.white,
  margin: theme.margin.lg,
  padding: theme.padding.md,
  borderRadius: theme.borderRadius.md,
  border: `${theme.borderWidth.md} solid ${theme.colors.primary}`,
  "&:hover": {
    backgroundColor: theme.colors.light,
    transform: "scale(1.005)",
    transition: "background-color 300ms, transform 300ms",
  },
});

const CredentialCollumContainerStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: theme.gap.sm,
});

const CredentialCollumTitleStyled = styled("p", {
  fontSize: theme.fontSizes.sm,
  color: theme.colors.secondaryOnHover,
  margin: 0,
});

const CredentialCollumContentStyled = styled("p", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.gap.sm,
  fontSize: theme.fontSizes.md,
  margin: 0,
});

const EditIconStyled = styled(Edit, {
  color: theme.colors.black,
  width: "24px",
  height: "24px",
  "&:hover": {
    color: theme.colors.primary,
    transition: "color 300ms",
  },
});

type CredentialCollumContainerProps = {
  title: string;
  children: React.ReactNode;
};

const CredentialCollumContainer = ({ title, children }: CredentialCollumContainerProps) => {
  return (
    <CredentialCollumContainerStyled>
      <CredentialCollumTitleStyled>{title}</CredentialCollumTitleStyled>
      <CredentialCollumContentStyled>{children}</CredentialCollumContentStyled>
    </CredentialCollumContainerStyled>
  );
};

type CredentialListItemProps = {
  credential: Credential;
};

const CredentialListItem = ({ credential }: CredentialListItemProps) => {
  const [isActive, setIsActive] = useState(credential.active);

  const { mutate: toggleActiveCredential, isPending } = useToggleActiveCredentialMutation({
    onError: () => {
      setIsActive(credential.active);
    },
  });

  function handleToggleActive(checked: boolean) {
    toggleActiveCredential({
      credentialUuid: credential.credential_uuid,
      active: checked,
    });
  }

  return (
    <CredentialContainerStyled>
      <CredentialCollumContainer title="Name" children={credential.provider.name} />
      <CredentialCollumContainer title="Credential name" children={credential.description} />
      <CredentialCollumContainer
        title="Service type"
        children={<ServiceTypeIcon serviceType={credential.service_type} />}
      />
      <CredentialCollumContainer
        title="Status"
        children={
          <>
            <SwitchStyled
              onCheckedChange={() => {
                handleToggleActive(isActive);
                setIsActive(!isActive);
              }}
              checked={isActive}
              disabled={isPending}
            />
            <EditIconStyled />
          </>
        }
      />
    </CredentialContainerStyled>
  );
};

export default CredentialListItem;
