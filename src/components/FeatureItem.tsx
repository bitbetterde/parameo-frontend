import { ReactComponent as GlobeIcon } from "@assets/icons/globe.svg";
import { ReactComponent as AnnotationIcon } from "@assets/icons/annotation.svg";
import { ReactComponent as LightningIcon } from "@assets/icons/lightning-bolt.svg";
import { ReactComponent as ScaleIcon } from "@assets/icons/scale.svg";
import React from "react";

interface Props {
  name: string;
  description: string;
  icon?: "globe" | "annotation" | "lightning" | "scale";
  className?: string;
}

const iconMapping: Record<string, any> = {
  globe: GlobeIcon,
  annotation: AnnotationIcon,
  lightning: LightningIcon,
  scale: ScaleIcon,
  default: React.Fragment,
};

const FeatureItem: React.FC<Props> = ({
  name,
  description,
  icon,
  className,
}) => {
  const IconComponent = iconMapping?.[icon || "default"];

  return (
    <>
      <dt
        className={`text-lg leading-6 font-medium text-gray-900 ${
          className || ""
        }`}
      >
        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          {IconComponent && <IconComponent className="w-[18px] text-white" />}
        </div>
        {name}
      </dt>
      <dd className="mt-2 text-base font-normal text-gray-500">
        {description}
      </dd>
    </>
  );
};

export default FeatureItem;
