import "@styles/input.css";
import type React from "react";
import { useState } from "react";

interface Props {
  label: string;
  rangeMin: number;
  rangeMax: number;
  id: string;
  className?: string;
  value?: number;
  onChange?: (value: number) => void;
  onValidChange?: (valid: boolean) => void;
  placeholder?: number | string;
}

const RangeSlider: React.FC<Props> = ({
  label,
  rangeMin,
  rangeMax,
  id,
  className,
  value: propsValue,
  onChange,
  placeholder,
  onValidChange,
}) => {
  const [value, setValue] = useState(propsValue?.toString());
  const [prevPropsValue, setPrevPropsValue] = useState(propsValue);
  const isInRange =
    Boolean(value) &&
    parseInt(value || "0") <= rangeMax &&
    parseInt(value || "0") >= rangeMin;

  if (prevPropsValue !== propsValue && propsValue !== value) {
    setPrevPropsValue(propsValue);
    setValue(propsValue?.toString());
  }

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-base font-medium text-gray-500">
        {label}
      </label>
      <div className="flex items-center gap-4">
        <input
          id={id}
          name={id}
          type="range"
          value={parseInt(value || "0")}
          min={rangeMin}
          max={rangeMax}
          className="w-full appearance-none text-indigo-700"
          onChange={(e) => {
            onChange && onChange(parseInt(e.currentTarget.value));
            onValidChange && onValidChange(true);
          }}
        />
        <input
          id={id}
          name={id}
          type="number"
          aria-invalid={!isInRange}
          className={`text-center w-20 py-[13px] px-5 rounded-md border-2 border-gray-300 ${
            isInRange
              ? "focus:border-indigo-600"
              : "focus:ring-red-600 focus:outline-0 focus:border-red-500"
          } appearance-none`}
          min={rangeMin}
          max={rangeMax}
          maxLength={rangeMax.toString().length}
          value={value}
          onBlur={() => {
            if (parseInt(value || "0") >= rangeMax) {
              setValue(rangeMax.toString());
              onChange && onChange(rangeMax);
              onValidChange && onValidChange(true);
            } else if (parseInt(value || "0") <= rangeMin) {
              setValue(rangeMin.toString());
              onChange && onChange(rangeMin);
              onValidChange && onValidChange(true);
            }
          }}
          onChange={(e) => {
            if (
              parseInt(e.currentTarget.value) <= rangeMax &&
              parseInt(e.currentTarget.value) >= rangeMin
            ) {
              onChange && onChange(parseInt(e.currentTarget.value));
              onValidChange && onValidChange(true);
            } else {
              onValidChange && onValidChange(false);
            }
            setValue(e.currentTarget.value);
          }}
          inputMode="numeric"
          pattern="\d*"
          placeholder={placeholder?.toString()}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
