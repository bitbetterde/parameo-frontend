import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ className, name, error, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        id={name}
        name={name}
        className={`block w-full rounded-md h-[50px] px-[21px] py-[13px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-500 font-normal text-base ${
          className || ""
        } ${
          error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
        }`}
        {...rest}
      />
    );
  }
);

export default TextInput;
