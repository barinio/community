import { useTranslations } from "next-intl";

import TitleAchieveMore from "@/components/TitleAchieveMore";
import InfoBlock from "@/components/InfoBlock";
import { infoBlocks } from "@/data/advantagesInfoBlocks";
import TemplateHeroSection from "@/components/TemplateHeroSection";

export default function Advantages() {
  const t = useTranslations("AdvantagesPage");

  return (
    <>
      <TemplateHeroSection title={t("heroTitle")} />

      <section>
        <h2 className="font-bold text-[35px] sm:text-[55px] dark:text-norm-white text-[#171717] mb-[90px] text-center">
          {t("advantagesTitle")}
        </h2>

        <ul className="flex flex-wrap gap-3 justify-center gap-y-20">
          {infoBlocks.map((block, index) => {
            const row = Math.floor(index / 2);
            const isYellow = row % 2 === 0 ? index % 2 === 0 : index % 2 !== 0;

            return (
              <InfoBlock
                key={index}
                title={block.title}
                content={block.content}
                isYellow={isYellow}
              />
            );
          })}

          <li className="rounded-[32px] w-full py-14 px-[30px] sm:px-[70px] bg-[#F9FAFB]">
            <p className="text-[20px] sm:text-[35px] leading-[0.98] text-justify dark:text-[#1A1D1F]">
              {t("lastAdvantagesItem")}
            </p>
          </li>
        </ul>

        <TitleAchieveMore />
      </section>
    </>
  );
}
