import * as Lucide from "lucide-react";
import capitalize from "../../utils/capitalize";

type ServiceTypeIconProps = {
  serviceType: string;
};

const ServiceTypeIcon = ({ serviceType }: ServiceTypeIconProps) => {
  const IconName = capitalize(serviceType.toString());
  console.log(IconName);
  const IconComponent = Lucide[IconName as keyof typeof Lucide] as React.ComponentType;
  console.log(IconComponent);

  if (!IconComponent) {
    return <Lucide.EllipsisIcon />;
  }

  return <IconComponent />;
};

export default ServiceTypeIcon;
