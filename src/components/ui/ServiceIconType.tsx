import * as Lucide from "lucide-react";
import capitalize from "../../utils/capitalize";

function redirectToExistingIconWhenIconNotFound(serviceType: string): React.ReactNode {
  switch (serviceType) {
    case "vehicle":
      return <Lucide.CarFrontIcon />;
    case "road":
      return <Lucide.BusFrontIcon />;
    default:
      return <Lucide.EllipsisIcon />;
  }
}

type ServiceTypeIconProps = {
  serviceType: string;
};

const ServiceTypeIcon = ({ serviceType }: ServiceTypeIconProps) => {
  const IconName = capitalize(serviceType.toString());
  const IconComponent = Lucide[IconName as keyof typeof Lucide] as React.ComponentType;

  if (!IconComponent) {
    return redirectToExistingIconWhenIconNotFound(serviceType);
  }

  return <IconComponent />;
};

export default ServiceTypeIcon;
