import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
  isDisabled?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className,
  isDisabled,
  value,
  onChange,
  onBlur,
  onFocus,
  required,
}) => {
  return (
    <input
      className={`mt-1 block px-3 py-2 text-sm action-input ${className}`}
      type={type}
      value={value}
      required={required}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export default Input;
