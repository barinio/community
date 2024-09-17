import { useTranslations } from "next-intl";

import HeroSection from "@/components/HeroSection";
import FutureSolutionsSection from "@/components/FutureSolutionsSection";

export default function Home() {
  const t = useTranslations("HomePageMain");

  return (
    <>
      <section className="flex flex-col items-center justify-center pt-8 md:pt-12 pb-[90px]">
        <HeroSection />
        <FutureSolutionsSection />
        <h2 className="font-bold max-w-7xl text-[110px] text-center leading-[0.82] tracking-[-.03em] mt-[85px]">
          {t("titleAchieveMore")}
        </h2>
      </section>
    </>
  );
}
