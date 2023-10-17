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
  iconRight?: string;
  nativeLink?: boolean;
}

const ButtonLink: React.FC<Props> = ({
  className,
  target,
  variant = "primary",
  download,
  newTab,
  icon,
  iconVariant,
  iconRight,
  children,
  disabled,
  nativeLink,
}: Props) => {
  const dynamicClasses = {
    white: "bg-white text-indigo-700 hover:bg-indigo-50 shadow-sm",
    primary: `${
      disabled ? "bg-gray-200" : "bg-indigo-600"
    } text-white hover:bg-indigo-700 shadow-sm`,
    transparent:
      "bg-indigo-500 bg-opacity-60 text-white hover:bg-opacity-70 shadow-sm",
    secondary: `${
      disabled ? "bg-gray-300 text-gray-400" : "bg-indigo-100 text-indigo-700"
    } hover:bg-indigo-200`,
  };
  const baseClasses = `rounded-md border border-transparent text-base font-medium flex items-center justify-center ${
    disabled ? "pointer-events-none " : ""
  }`;

  const commonProps = {
    className: `${baseClasses} ${dynamicClasses[variant]} ${className || ""}`,
    download,
    ...(newTab ? { target: "_blank" } : {}),
  };

  const isNative = newTab || nativeLink;

  const linkContent = (
    <a {...commonProps} {...(target && isNative ? { href: target } : {})}>
      {icon && (
        <Icon
          variant={iconVariant}
          size={20}
          name={icon}
          className="w-5 h-5 mr-2"
        />
      )}
      {children}
      {iconRight && (
        <Icon
          variant={iconVariant}
          size={20}
          name={iconRight}
          className="w-5 h-5 ml-2"
        />
      )}
    </a>
  );

  return isNative ? linkContent : <Link href={target}>{linkContent}</Link>;
};

export default ButtonLink;
