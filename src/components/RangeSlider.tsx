import "@styles/input.css";
import type React from "react";

interface Props {
  label: string;
  rangeMin: number;
  rangeMax: number;
  id: string;
  className?: string;
  value?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: number | string;
}

const RangeSlider: React.FC<Props> = ({
  label,
  rangeMin,
  rangeMax,
  id,
  className,
  value,
  onChange,
  placeholder,
}) => {
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
          value={value}
          min={rangeMin}
          max={rangeMax}
          className="w-full appearance-none"
          onChange={onChange}
        />
        <input
          id={id}
          name={id}
          type="number"
          className="text-center w-20 py-[13px] px-5 rounded-md border-2 border-gray-300 active:border-indigo-600 appearance-none"
          min={rangeMin}
          max={rangeMax}
          value={value}
          onChange={(e) => {
            parseInt(e.currentTarget.value) < rangeMax &&
              parseInt(e.currentTarget.value) > rangeMin &&
              onChange &&
              onChange(e);
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
