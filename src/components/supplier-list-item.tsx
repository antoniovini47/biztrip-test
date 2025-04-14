import { styled } from "@stitches/react";
import { Edit } from "lucide-react";
import SwitchStyled from "./ui/SwitchStyled";
import { theme } from "../../stitches.config";
import ServiceTypeIcon from "./ui/ServiceIconType";
import { Supplier } from "../types/Supplier";

const SupplierContainerStyled = styled("div", {
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

const SupplierCollumContainerStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: theme.gap.sm,
});

const SupplierCollumTitleStyled = styled("p", {
  fontSize: theme.fontSizes.sm,
  color: theme.colors.secondaryOnHover,
  margin: 0,
});

const SupplierCollumContentStyled = styled("p", {
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

type SupplierCollumContainerProps = {
  title: string;
  children: React.ReactNode;
};

const SupplierCollumContainer = ({ title, children }: SupplierCollumContainerProps) => {
  return (
    <SupplierCollumContainerStyled>
      <SupplierCollumTitleStyled>{title}</SupplierCollumTitleStyled>
      <SupplierCollumContentStyled>{children}</SupplierCollumContentStyled>
    </SupplierCollumContainerStyled>
  );
};

const SupplierListItem = (supplier: Supplier) => {
  return (
    <SupplierContainerStyled>
      <SupplierCollumContainer title="Name" children={<>Supplier name...</>} />
      <SupplierCollumContainer title="Credential name" children={<>Credential name...</>} />
      <SupplierCollumContainer
        title="Service type"
        // !TODO: Only icon sample, change it later to receive plane/bed/etc
        children={<ServiceTypeIcon serviceType={"hotel"} />}
      />
      <SupplierCollumContainer
        title="Status"
        children={
          <>
            <EditIconStyled />
            <SwitchStyled />
          </>
        }
      />
    </SupplierContainerStyled>
  );
};

export default SupplierListItem;
