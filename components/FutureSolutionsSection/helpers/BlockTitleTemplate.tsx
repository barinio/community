import React from "react";

interface BlockTitleTemplateProps {
  titleText: string;
  classStyles?: string;
}

const BlockTitleTemplate = ({
  titleText,
  classStyles,
}: BlockTitleTemplateProps) => {
  return (
    <h3
      className={`font-bold text-lg sm:text-[38px] leading-[0.98] text-justify ${classStyles}`}
    >
      {titleText}
    </h3>
  );
};

export default BlockTitleTemplate;
