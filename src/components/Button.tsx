import React from "react";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  className,
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
