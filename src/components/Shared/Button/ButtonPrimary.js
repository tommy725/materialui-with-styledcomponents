import Button from "./Button";
import React from "react";

const ButtonPrimary = ({
  className = "",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 rounded-lg bg-primary-1000 hover:bg-primary-1010 text-gray-900 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
