import { useTranslations } from "next-intl";

import TitleAchieveMore from "@/components/TitleAchieveMore";
import { OurCommitmentList } from "@/data/OurCommitmentList";
import TemplateHeroSection from "@/components/TemplateHeroSection";

export default function OurCommitment() {
  const t = useTranslations("OurCommitment");

  return (
    <>
      <TemplateHeroSection title={t("heroTitle")} textStart="text-start" />

      <ul className="flex justify-center flex-wrap gap-x-6 gap-y-11 mb-5 [&>*:nth-child(-n+2)]:bg-main-yellow [&>*:nth-child(n+3):nth-child(-n+4)]:bg-black [&>*:nth-child(n+3):nth-child(-n+4)]:dark:bg-[#171717] [&>*:nth-child(n+5)]:bg-[#F9FAFB]">
        {OurCommitmentList.map(({ number, title, description }) => (
          <li key={number} className="rounded-[32px] w-[350px] sm:w-[628px]">
            <section className="w-full max-w-[350px] sm:max-w-[975px] lg:max-w-[628px] p-[30px] sm:p-[45px]">
              <div
                className={`mb-5 sm:mb-[50px] w-[40px] sm:w-[72px] h-[40px] sm:h-[72px] font-bold text-[35px] flex items-center justify-center rounded-full ${number <= 2 ? "bg-black text-white" : "bg-main-yellow text-black"}`}
              >
                {number}
              </div>
              <h3
                className={`font-bold text-[20px] sm:text-[38px] leading-[0.98] text-justify ${number >= 3 && number <= 4 ? "text-white" : "dark:text-[#1A1D1F]"}`}
              >
                {t(title)}
              </h3>
              <p
                className={`text-[20px] sm:text-[38px] leading-[0.98] text-justify ${number >= 3 && number <= 4 ? "text-white" : "dark:text-[#1A1D1F]"}`}
              >
                `{t(description)}
              </p>
            </section>
          </li>
        ))}
        <li className="rounded-[32px] w-full py-14 px-[30px] sm:px-[70px]">
          <p className="text-[20px] sm:text-[35px] leading-[0.98] text-justify dark:text-[#1A1D1F]">
            {t("lastBoxText")}
          </p>
        </li>
      </ul>

      <TitleAchieveMore />
    </>
  );
}
