import React from "react";
import Image from "next/image";

import heroImg from "@/images/hero-img.png";

interface TemplateHeroSectionProps {
  title: string;
}

const TemplateHeroSection: React.FC<TemplateHeroSectionProps> = ({ title }) => {
  return (
    <div className="items-center justify-end flex max-w-7xl gap-6 mb-16 lg:flex-row flex-col">
      <h1 className="max-w-[611px] text-justify w-full font-bold text-[55px] dark:text-norm-white text-[#171717] tracking-[-.04em]">
        {title}
      </h1>
      <div className="w-full">
        <Image
          src={heroImg}
          width={594}
          height={548}
          alt="Picture of the author"
          className="object-fill m-auto"
        />
      </div>
    </div>
  );
};

export default TemplateHeroSection;
