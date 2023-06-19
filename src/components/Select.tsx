interface Props {
  className?: string;
  options: Array<string>;
  selectedOption?: string;
  onClickSelectedOption?: (tab: string) => void;
  name: string;
  label?: string;
}

const Select: React.FC<Props> = ({
  className,
  options,
  selectedOption,
  onClickSelectedOption,
  name,
  label,
}) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onClickSelectedOption && onClickSelectedOption(selectedValue);
  };
  return (
    <>
      {label && (
        <label htmlFor="tabs" className="sr-only">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        className={`block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 ${
          className || ""
        }`}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
