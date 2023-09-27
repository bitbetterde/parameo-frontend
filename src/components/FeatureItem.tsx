import React from "react";
import { Icon } from "@components";

interface Props {
  name: string;
  description: string;
  icon?: string;
  className?: string;
}

const FeatureItem: React.FC<Props> = ({
  name,
  description,
  icon,
  className,
}) => {
  return (
    <>
      <dt
        className={`text-lg leading-6 font-medium text-gray-900 ${
          className || ""
        }`}
      >
        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          {icon && <Icon name={icon} className="w-[18px] text-white" />}
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
