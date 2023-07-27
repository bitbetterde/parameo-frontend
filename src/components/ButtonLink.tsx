import type { IButton } from "@interfaces/IButton";
import { Link } from "wouter";
import type React from "react";

interface Props extends IButton {
  className?: string;
}

const ButtonLink: React.FC<Props> = ({
  className,
  target,
  caption,
  variant = "primary",
}: Props) => {
  const classes = {
    white: "bg-white text-indigo-700 hover:bg-indigo-50",
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    transparent: "bg-indigo-500 bg-opacity-60 text-white hover:bg-opacity-70",
    secondary: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
  };
  return (
    <Link
      href={target}
      className={`rounded-md border border-transparent text-base font-medium shadow-sm ${
        classes[variant]
      } ${className || ""}`}
    >
      {caption}
    </Link>
  );
};

export default ButtonLink;
