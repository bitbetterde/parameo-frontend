import { forwardRef } from "react";
import type React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ className, name, label, ...rest }, ref) => {
    return (
      <div className={`relative flex items-start ${className || ""}`}>
        <div className="flex h-6 items-center">
          <input
            {...rest}
            ref={ref}
            id={name}
            name={name}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div className="ml-3">
          <label htmlFor={name} className="text-base font-medium text-gray-800">
            {label}
          </label>
        </div>
      </div>
    );
  }
);

export default Checkbox;
