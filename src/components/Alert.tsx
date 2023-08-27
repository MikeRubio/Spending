import React, { useState, useEffect } from "react";

interface AlertProps {
  type: "success" | "error";
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, children }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) {
    return null;
  }

  let bgColor;
  let textColor;

  if (type === "success") {
    bgColor = "bg-green-100";
    textColor = "text-green-700";
  } else if (type === "error") {
    bgColor = "bg-red-100";
    textColor = "text-red-700";
  }

  return (
    <div
      className={`relative py-3 pl-4 pr-10 leading-normal rounded-lg ${bgColor} ${textColor}`}
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
