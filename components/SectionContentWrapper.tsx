import React from "react";

const SectionContentWrapper = ({
  children,
  classStyles,
}: {
  children: React.ReactNode;
  classStyles?: string;
}) => {
  return (
    <section
      className={`dark:bg-[#171717] bg-[#F9FAFB] rounded-[32px] w-full ${classStyles}`}
    >
      {children}
    </section>
  );
};

export default SectionContentWrapper;
