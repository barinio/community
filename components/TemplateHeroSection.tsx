"use client";

import { useTheme } from "next-themes";
import React from "react";
import { useTranslations } from "next-intl";

import { HeroImg, HeroImg2, HeroImg3 } from "@/components/icons";

interface TemplateHeroSectionProps {
  title: string;
}

const TemplateHeroSection: React.FC<TemplateHeroSectionProps> = ({ title }) => {
  const { theme } = useTheme();
  const t = useTranslations("OurCommitment");

  return (
    <section className="items-center justify-end flex max-w-7xl gap-6 mb-16 lg:flex-row flex-col">
      <h1
        className={`max-w-[611px] w-full font-bold text-[34px] sm:text-[55px] dark:text-norm-white text-[#171717] `}
      >
        {title}
      </h1>
      <div className="flex justify-center">
        {title === t("heroTitle") ? (
          theme === "dark" ? (
            <HeroImg2 />
          ) : (
            <HeroImg3 />
          )
        ) : (
          <HeroImg />
        )}
      </div>
    </section>
  );
};

export default TemplateHeroSection;
