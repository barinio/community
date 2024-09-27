import HeroSection from "@/components/HeroSection";
import FutureSolutionsSection from "@/components/FutureSolutionsSection/FutureSolutionsSection";
import TitleAchieveMore from "@/components/TitleAchieveMore";
import Assistant from "@/components/chatBot/Assistant";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center pt-8 md:pt-12 sm:pb-[90px]">
        <HeroSection />
        <FutureSolutionsSection />
        <TitleAchieveMore />
        <Assistant />
      </section>
    </>
  );
}
