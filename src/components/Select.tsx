import type React from "react";

interface Props<T> {
  options: Array<{ label: string; value: T }>;
  onChange?: (v: T) => void;
  value: T;
  label?: string;
  error?: boolean;
  className?: string;
  name?: string;
}

const Select = <T,>({
  className,
  options,
  name,
  label,
  error,
  onChange,
  value,
}: Props<T>) => {
  const selectedIndex = options.findIndex((opt) =>
    typeof value === "object"
      ? JSON.stringify(opt.value) === JSON.stringify(value)
      : opt.value === value
  );

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(options[parseInt(e.currentTarget.value)].value);
  };

  return (
    <>
      {label && (
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
      )}
      <select
        value={selectedIndex}
        onChange={onChangeSelect}
        id={name}
        name={name}
        className={`block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 ${
          className || ""
        } ${error ? "border-red-500" : ""}`}
      >
        {options?.map((option, index) => (
          <option key={index} value={index}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
