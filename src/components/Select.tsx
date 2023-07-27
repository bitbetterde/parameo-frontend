import { forwardRef } from "react";
import type React from "react";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<string>;
  label?: string;
  error?: boolean;
}

const Select: React.FC<Props> = forwardRef<HTMLSelectElement, Props>(
  ({ className, options, name, label, error, ...rest }, ref) => {
    return (
      <>
        {label && (
          <label htmlFor={name} className="sr-only">
            {label}
          </label>
        )}
        <select
          {...rest}
          ref={ref}
          id={name}
          name={name}
          className={`block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 ${
            className || ""
          } ${error ? "border-red-500" : ""}`}
        >
          {options?.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </>
    );
  }
);

export default Select;
