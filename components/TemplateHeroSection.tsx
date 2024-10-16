import React from "react";

import { HeroImg } from "@/components/icons";

interface TemplateHeroSectionProps {
  title: string;
}

const TemplateHeroSection: React.FC<TemplateHeroSectionProps> = ({ title }) => {
  return (
    <section className="items-center justify-end flex max-w-7xl gap-6 mb-16 lg:flex-row flex-col">
      <h1
        className={`max-w-[611px] w-full font-bold text-[34px] sm:text-[55px] dark:text-norm-white text-[#171717] `}
      >
        {title}
      </h1>
      <div className="flex justify-center">
        <HeroImg />
      </div>
    </section>
  );
};

export default TemplateHeroSection;
