import type React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "white" | "primary" | "transparent" | "secondary";
}

const Button: React.FC<Props> = ({
  className,
  variant = "primary",
  children,
  ...rest
}: Props) => {
  const classes = {
    white: "bg-white text-indigo-700 hover:bg-indigo-50",
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-200",
    transparent: "bg-indigo-500 bg-opacity-60 text-white hover:bg-opacity-70",
    secondary: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
  };
  return (
    <button
      {...rest}
      className={`rounded-md border border-transparent text-base text-center font-medium shadow-sm ${
        classes[variant]
      } ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
