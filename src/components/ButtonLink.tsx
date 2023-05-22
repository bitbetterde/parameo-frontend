import React from "react";
import type { IButton } from "@interfaces/IButton";

interface Props extends IButton {
  className?: string;
}

const ButtonLink: React.FC<Props> = ({
  className,
  target,
  caption,
  variant = "dark",
}: Props) => {
  const classes = {
    light: "bg-white text-indigo-700 hover:bg-indigo-50",
    dark: "bg-indigo-600 text-white hover:bg-indigo-700",
    transparent: "bg-indigo-500 bg-opacity-60 text-white hover:bg-opacity-70",
  };
  return (
    <a
      href={target}
      className={`rounded-md border border-transparent text-base font-medium shadow-sm ${
        classes[variant]
      } ${className || ""}`}
    >
      {caption}
    </a>
  );
};

export default ButtonLink;
