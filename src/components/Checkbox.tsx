interface Props {
  className?: string;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean
}

const Checkbox: React.FC<Props> = ({ className, name, label, onChange, checked }) => {
  return (
    <div className={`relative flex items-start ${className || ""}`}>
      <div className="flex h-6 items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          onChange={onChange}
          checked={checked}
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor={name} className="text-base font-medium text-gray-800">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
