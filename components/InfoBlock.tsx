import { useTranslations } from "next-intl";
import React from "react";

import { IconSvgProps } from "@/types";

interface InfoBlockProp {
  Icon: React.FC<IconSvgProps>;
  title: string;
  content: string;
  isYellow?: boolean;
}

const InfoBlock = ({ Icon, title, content, isYellow }: InfoBlockProp) => {
  const t = useTranslations("AdvantagesPage");

  return (
    <li
      className={`w-full max-w-[600px] h-[300px] sm:h-[500px] px-[50px] flex flex-col pt-10 rounded-[32px] ${isYellow ? "bg-main-yellow text-[#151515]" : "text-white bg-[#151515] dark:bg-[#171717]"}`}
    >
      <div
        className={`flex items-center justify-center w-[72px] h-[72px] rounded-full mb-[50px] ${isYellow ? "text-white bg-[#151515] dark:bg-[#171717]" : "bg-main-yellow text-[#151515]"}`}
      >
        <Icon />
      </div>
      <p className="text-[20px] sm:text-[34px] leading-[0.98] text-justify ">
        <span className="font-bold block mb-4 text-left">{t(title)} </span>
        {t(content)}
      </p>
    </li>
  );
};

export default InfoBlock;
