import type { IButton } from "@interfaces";
import type React from "react";
import { Link } from "wouter";

interface Props extends IButton {
  className?: string;
  download?: boolean;
  newTab?: boolean;
}

const ButtonLink: React.FC<Props> = ({
  className,
  target,
  caption,
  variant = "primary",
  download,
  newTab,
}: Props) => {
  const dynamicClasses = {
    white: "bg-white text-indigo-700 hover:bg-indigo-50",
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    transparent: "bg-indigo-500 bg-opacity-60 text-white hover:bg-opacity-70",
    secondary: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
  };
  const baseClasses =
    "rounded-md border border-transparent text-base font-medium shadow-sm";
  const commonProps = {
    href: target,
    className: `${baseClasses} ${dynamicClasses[variant]} ${className || ""}`,
    download,
  };
  return Boolean(newTab) ? (
    <a
      {...commonProps}
      target="_blank"
      {...(download ? { download: true } : {})}
    >
      {caption}
    </a>
  ) : (
    <Link {...commonProps} {...(download ? { download: true } : {})}>
      {caption}
    </Link>
  );
};

export default ButtonLink;
