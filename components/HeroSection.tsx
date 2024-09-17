import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";

import heroImg from "@/images/hero-img.png";

const HeroSection = () => {
  const t = useTranslations("HomePageHero");

  return (
    <div className="items-center flex mb-[65px]">
      <div className="w-full mr-[90px]">
        <Image
          src={heroImg}
          width={554}
          height={505}
          alt="Picture of the author"
          className="object-fill m-auto"
        />
      </div>

      <div className="max-w-[519px] w-full">
        <h1 className="font-bold text-8xl dark:text-norm-white text-[#171717] mb-[18px]">
          {t("heroTitle")}
        </h1>
        <p className="text-4xl dark:text-[#D6DCE5] text-norm-gray mb-[52px]">
          {t("heroSubtitle")}
        </p>

        <div className="flex gap-5">
          <Button
            as={Link}
            href="/"
            variant="bordered"
            className="font-bold text-xl w-[200px] h-[60px] bg-[#FFDD33] text-[#101828] border-2 border-[#000000] rounded-[32px] shadow-[0px_4px_4px_0px_#00000024]"
          >
            {t("heroBtnLinkWrite")}
          </Button>
          <Button
            as={Link}
            href="/"
            variant="bordered"
            className="font-bold text-xl bg-norm-white w-[200px] h-[60px] text-[#1A1D1F] border-2 border-[#2E2C2C] rounded-[32px] shadow-[0px_4px_4px_0px_#00000024]"
          >
            {t("heroBtnLinkCallUs")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
