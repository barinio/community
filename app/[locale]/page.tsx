import HeroSection from "@/components/HeroSection";
import FutureSolutionsSection from "@/components/FutureSolutionsSection";
import TitleAchieveMore from "@/components/TitleAchieveMore";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center pt-8 md:pt-12 pb-[90px]">
        <HeroSection />
        <FutureSolutionsSection />
        <TitleAchieveMore />
      </section>
    </>
  );
}
