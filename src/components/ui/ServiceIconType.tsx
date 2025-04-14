import * as Lucide from "lucide-react";
import capitalize from "../../utils/capitalize";

type ServiceTypeIconProps = {
  serviceType: string;
};

const ServiceTypeIcon = ({ serviceType }: ServiceTypeIconProps) => {
  const IconName = capitalize(serviceType.toString());
  const IconComponent = Lucide[IconName as keyof typeof Lucide] as React.ComponentType;

  if (!IconComponent) {
    return <Lucide.EllipsisIcon />;
  }

  return <IconComponent />;
};

export default ServiceTypeIcon;
