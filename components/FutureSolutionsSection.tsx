import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

import {
  AimIcon,
  ArrowRightIcon,
  DiagramaIcon,
  LogoMdrIcon,
  MobileIcon,
  OperatorIcon,
  SendMoneyIcon,
} from "@/components/icons";
import SectionContentWrapper from "@/components/SectionContentWrapper";

const FutureSolutionsSection = () => {
  const t = useTranslations("FutureSolutionsSection");

  return (
    <section>
      <h2 className="font-bold text-[60px] text-center mb-[90px] w-full">
        {t("title")}
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <SectionContentWrapper classStyles="max-w-[975px] lg:max-w-[628px] p-[45px]">
          <div className="bg-main-yellow flex justify-center items-center rounded-full w-[72px] h-[72px] mb-[50px]">
            <DiagramaIcon />
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-[38px] leading-[0.98] text-justify">
              {t("title1")}
            </h3>
            <p className="text-[35px] leading-[0.96] tracking-[-.03em] text-justify">
              {t("description1")}
            </p>
            <div className="m-auto">
              <LogoMdrIcon />
            </div>
          </div>
        </SectionContentWrapper>

        <SectionContentWrapper classStyles="max-w-[975px] lg:max-w-[628px] p-[45px]">
          <div className="bg-main-yellow flex justify-center items-center rounded-full w-[72px] h-[72px] mb-[50px]">
            <OperatorIcon />
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-[38px] leading-[0.98] text-justify">
              {t("title2")}
            </h3>
            <p className="text-[31px] leading-[0.96] tracking-[-.03em] text-justify">
              {t("description2_1")}
            </p>
            <p className="text-[31px] leading-[0.96] tracking-[-.03em] text-justify">
              {t("description2_2")}
            </p>
          </div>
        </SectionContentWrapper>
      </div>

      <SectionContentWrapper classStyles="p-[45px]">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col">
            <div className="bg-main-yellow flex justify-center items-center rounded-full w-[72px] h-[72px] mb-[50px]">
              <AimIcon />
            </div>

            <h3 className="font-bold text-[42px] leading-[0.98] text-justify mb-[45px]">
              {t("title3")}
            </h3>
            <p className="text-[31px] leading-[1.08] tracking-[-.03em] text-justify max-w-[536px]">
              {t("description3")}
            </p>
          </div>

          <div
            className={`w-full max-w-[633px] h-[379px] dark:bg-[url(../images/dark-world-map.png)] bg-[url(../images/world-map.png)] bg-contain bg-no-repeat bg-blend-multiply dark:bg-transparent bg-[#F9FAFB]`}
          />
        </div>
      </SectionContentWrapper>

      <div className="flex mt-6 mb-[70px] gap-[33px] w-full max-w-[965px] lg:max-w-[1280px] flex-col lg:flex-row">
        <SectionContentWrapper classStyles="w-full max-w-[965px] lg:max-w-[405px] p-[30px] min-h-[414px]">
          <div className="bg-main-yellow flex justify-center items-center rounded-full w-[72px] h-[72px] mb-[50px]">
            <SendMoneyIcon />
          </div>
          <h3 className="font-bold text-[42px] leading-[0.9] text-justify">
            {t("title4")}
          </h3>
        </SectionContentWrapper>
        
        <SectionContentWrapper classStyles="lg:max-w-[405px] p-[30px] min-h-[414px]">
          <div className="bg-main-yellow flex justify-center items-center rounded-full w-[72px] h-[72px] mb-[50px]">
            <MobileIcon />
          </div>
          <h3 className="font-bold text-[42px] leading-[0.9]">
            {t("title5")}
          </h3>
        </SectionContentWrapper>

        <section
          className={`dark:bg-[#FFFFFF] bg-[#0D0D0D] rounded-[32px] w-full lg:max-w-[405px] pl-[49px] pr-[35px] pb-[57px] flex flex-col justify-end min-h-[414px] gap-[50px]`}
        >
          <h3 className="font-bold text-[42px] dark:text-[#151515] text-norm-white leading-[0.9]">
            {t("title6")}
          </h3>
          <Button
            className="dark:bg-[#FFDD33] text-[#1A1D1F] font-bold text-[30px] bg-norm-white flex justify-center items-center w-[295px] h-[62px]"
            radius="full"
            endContent={<ArrowRightIcon />}
          >
            {t("btnMore")}
          </Button>
        </section>
      </div>
    </section>
  );
};

export default FutureSolutionsSection;
