import HeroSection from "@/components/HeroSection";
import FutureSolutionsSection from "@/components/FutureSolutionsSection";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center pt-8 md:pt-12 pb-[90px]">
        <HeroSection />
        <FutureSolutionsSection />
        <h2 className="font-bold text-[110px] text-center leading-[0.82] tracking-[-.03em] mt-[85px]">
          Réalisez davantage avec CommUnité
        </h2>
      </section>
    </>
  );
}
