import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";

import { HeroImg } from "@/components/icons";

const HeroSection = () => {
  const t = useTranslations("HomePageHero");

  return (
    <div className="items-center flex mb-[65px]">
      <div className="max-lg:hidden w-full mr-[90px]">
        <HeroImg />
      </div>

      <div className="max-lg:flex flex-col items-center max-w-[519px] w-full">
        <h1 className="font-bold text-[50px] sm:text-8xl dark:text-norm-white text-[#171717] mb-[18px]">
          {t("heroTitle")}
        </h1>
        <p className="max-lg:text-center text-[20px] sm:text-4xl dark:text-[#D6DCE5] text-norm-gray mb-[52px]">
          {t("heroSubtitle")}
        </p>

        <div className="flex gap-5">
          <Button
            as={Link}
            href="/contact"
            variant="bordered"
            className="font-bold text-xl w-[149px] sm:w-[200px] h-[60px] bg-[#FFDD33] text-[#101828] border-2 border-[#000000] rounded-[32px] shadow-[0px_4px_4px_0px_#00000024]"
          >
            {t("heroBtnLinkWrite")}
          </Button>
          <Button
            as={Link}
            href="tel:+14509142498"
            variant="bordered"
            className="font-bold text-xl bg-norm-white w-[149px] sm:w-[200px] h-[60px] text-[#1A1D1F] border-2 border-[#2E2C2C] rounded-[32px] shadow-[0px_4px_4px_0px_#00000024]"
          >
            {t("heroBtnLinkCallUs")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
