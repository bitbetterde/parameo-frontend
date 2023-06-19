interface Props {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  value?: string;
}

const TextInput: React.FC<Props> = ({
  className,
  onChange,
  name,
  placeholder,
  value,
}) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      className={`block w-full rounded-md h-[50px] px-[21px] py-[13px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-500 font-normal text-base ${
        className || ""
      }`}
      onChange={onChange}
      placeholder={placeholder || ""}
      value={value}
    />
  );
};

export default TextInput;
