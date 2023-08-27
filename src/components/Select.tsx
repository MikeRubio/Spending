import React from "react";

interface SelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  options: { value: string; label: string }[];
  className?: string;
  name?: string;
  testId: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  disabled,
  options,
  className,
  name,
  testId,
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`mt-1 block ${className}`}
      data-testid={testId}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
