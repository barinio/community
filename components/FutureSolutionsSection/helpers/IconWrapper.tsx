import React from "react";

interface IconWrapperProps {
  children: React.ReactNode;
  classStyles?: string;
}

const IconWrapper = ({ children, classStyles }: IconWrapperProps) => {
  return (
    <div
      className={`bg-main-yellow flex justify-center items-center rounded-full w-[40px] sm:w-[72px] h-[40px] sm:h-[72px] mb-[13px] sm:mb-[50px] ${classStyles}`}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
