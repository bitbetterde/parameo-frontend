import type { IButton } from "@interfaces";
import type React from "react";
import { Link } from "wouter";
import { Icon } from "@components";

interface Props extends IButton {
  className?: string;
  download?: boolean;
  newTab?: boolean;
  icon?: string;
  iconVariant?: "solid" | "outline";
}

const ButtonLink: React.FC<Props> = ({
  className,
  target,
  variant = "primary",
  download,
  newTab,
  icon,
  iconVariant,
  children,
}: Props) => {
  const dynamicClasses = {
    white: "bg-white text-indigo-700 hover:bg-indigo-50 shadow-sm",
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
    transparent:
      "bg-indigo-500 bg-opacity-60 text-white hover:bg-opacity-70 shadow-sm",
    secondary: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
  };
  const baseClasses =
    "rounded-md border border-transparent text-base font-medium flex items-center justify-center";
  const commonProps = {
    href: target,
    className: `${baseClasses} ${dynamicClasses[variant]} ${className || ""}`,
    download,
  };
  return newTab ? (
    <a
      {...commonProps}
      target="_blank"
      {...(download ? { download: true } : {})}
    >
      {icon && <Icon size={20} name={icon} className="w-5 h-5 mr-2" />}
      {children}
    </a>
  ) : (
    <Link {...commonProps} {...(download ? { download: true } : {})}>
      {icon && (
        <Icon
          variant={iconVariant}
          size={20}
          name={icon}
          className="w-5 h-5 mr-2"
        />
      )}
      {children}
    </Link>
  );
};

export default ButtonLink;
