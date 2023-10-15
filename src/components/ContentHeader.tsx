import type React from "react";

interface Props {
  className?: string;
  title?: string;
  subtitle?: string;
  teaser?: string;
}

const ContentHeader: React.FC<Props> = ({
  className,
  title,
  subtitle,
  teaser,
}) => {
  return (
    <div
      className={`flex flex-col py-6 md:pb-10 md:pt-[44px] ${className || ""}`}
    >
      {subtitle && (
        <h2 className="self-center text-base font-semibold text-indigo-600 uppercase">
          {subtitle}
        </h2>
      )}
      {title && (
        <h1 className="self-center mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
      )}
      {teaser && (
        <p className="pt-8 text-[20px] leading-8 text-gray-500">{teaser}</p>
      )}
    </div>
  );
};

export default ContentHeader;
