import React from "react";

interface BlockDescriptionTextTemplateProps {
  descriptionText: string;
  classStyles?: string;
}

const BlockDescriptionTextTemplate = ({
  descriptionText,
  classStyles,
}: BlockDescriptionTextTemplateProps) => {
  return (
    <p
      className={`text-[20px] sm:text-[35px] leading-[0.96] tracking-[-.03em] text-justify ${classStyles}`}
    >
      {descriptionText}
    </p>
  );
};

export default BlockDescriptionTextTemplate;
