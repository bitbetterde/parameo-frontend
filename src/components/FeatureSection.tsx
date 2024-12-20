import { FeatureItem } from "@components";
import type React from "react";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  features: Array<{
    name: string;
    description: string;
    icon?: string;
  }>;
}

const FeatureSection: React.FC<Props> = ({
  title,
  subtitle,
  description,
  className,
  features,
}) => {
  return (
    <div className={`bg-white pt-6 pb-12 md:py-12 ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center pb-10">
          {subtitle && (
            <h2 className="text-base font-semibold text-indigo-600 uppercase">
              {subtitle}
            </h2>
          )}
          {title && (
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h1>
          )}
          {description && (
            <p className="mt-4 text-[20px] leading-7 text-gray-500">
              {description}
            </p>
          )}
        </div>
        <div className="mx-auto">
          <dl className="grid max-w-xl mx-auto grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
            {features?.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <FeatureItem
                  name={feature.name}
                  description={feature.description}
                  icon={feature.icon}
                />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
