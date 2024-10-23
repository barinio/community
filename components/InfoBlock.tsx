import { useTranslations } from "next-intl";
import React from "react";

interface IconProps {
  width?: number;
  height?: number;
}

interface InfoBlockProp {
  Icon: React.ComponentType<IconProps>;  // Исправление типа
  title: string;
  content: string;
  isYellow?: boolean;
}

const InfoBlock: React.FC<InfoBlockProp> = ({ Icon, title, content, isYellow }) => {
  const t = useTranslations("AdvantagesPage");

  return (
    <li
      className={`w-full max-w-[600px] h-[300px] sm:h-[500px] px-[50px] flex flex-col pt-10 rounded-[32px] ${
        isYellow ? "bg-main-yellow text-[#151515]" : "text-white bg-[#151515] dark:bg-[#171717]"
      }`}
    >
      <div
        className={`flex items-center justify-center w-[72px] h-[72px] rounded-full mb-[50px] ${
          isYellow ? "text-white bg-[#151515] dark:bg-[#171717]" : "bg-main-yellow text-[#151515]"
        }`}
      >
        <Icon width={72} height={72} />  {/* Передаём пропсы width и height */}
      </div>
      <p className="text-[20px] sm:text-[35px] leading-[0.98] text-justify ">
        <span className="font-bold">{t(title)} </span>
        {t(content)}
      </p>
    </li>
  );
};

export default InfoBlock;
