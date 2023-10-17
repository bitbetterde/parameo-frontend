import type React from "react";
import { Icon } from "@components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "white" | "primary" | "transparent" | "secondary" | "success";
  iconRight?: string;
  icon?: string;
  iconVariant?: "solid" | "outline";
}

const Button: React.FC<Props> = ({
  className,
  variant = "primary",
  children,
  iconRight,
  icon,
  iconVariant,
  ...rest
}: Props) => {
  const classes = {
    white: "bg-white text-indigo-700 hover:bg-indigo-50",
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-200",
    transparent: "bg-indigo-500 bg-opacity-60 text-white hover:bg-opacity-70",
    secondary:
      "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 disabled:bg-gray-300 disabled:text-gray-400",
    success:
      "text-white disabled:bg-emerald-500 bg-emerald-600 hover:bg-emerald-700",
  };
  return (
    <button
      {...rest}
      className={`rounded-md border border-transparent text-base text-center font-medium shadow-sm p-3 flex items-center justify-center ${
        classes[variant]
      } ${className || ""}`}
    >
      {icon && <Icon size={20} name={icon} className="w-5 h-5 mr-2" />}
      {children}
      {iconRight && (
        <Icon
          size={20}
          variant={iconVariant}
          name={iconRight}
          className="w-5 h-5 ml-2"
        />
      )}
    </button>
  );
};

export default Button;
