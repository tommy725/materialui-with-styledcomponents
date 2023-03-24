import Button, { ButtonProps } from "./Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps { }

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "",
  ...args
}) => {
  return (
    <div className="relative w-max flex items-center justify-center">
      <div className="absolute mix-blend-screen bg-[#177100] blur-[12.5px] w-full h-full rounded-full"></div>
      <Button
        className={`ttnc-ButtonPrimary disabled:bg-opacity-70 text-primary-shadow tracking-wide rounded-lg bg-primary-1000 hover:bg-primary-1010 text-gray-900 ${className}`}
        {...args}
      />
    </div>
  );
};

export default ButtonPrimary;
