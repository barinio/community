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
import SectionContentWrapper from "@/components/FutureSolutionsSection/helpers/SectionContentWrapper";
import IconWrapper from "@/components/FutureSolutionsSection/helpers/IconWrapper";
import BlockTitleTemplate from "@/components/FutureSolutionsSection/helpers/BlockTitleTemplate";
import BlockDescriptionTextTemplate from "@/components/FutureSolutionsSection/helpers/BlockDescriptionTextTemplate";

const FutureSolutionsSection = () => {
  const t = useTranslations("FutureSolutionsSection");

  return (
    <section>
      <h2 className="font-bold text-[20px] sm:text-[60px] text-center mb-[90px] w-full">
        {t("title")}
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <SectionContentWrapper classStyles="max-w-[350px] sm:max-w-[975px] lg:max-w-[628px] p-[45px]">
          <IconWrapper>
            <DiagramaIcon />
          </IconWrapper>

          <div className="flex flex-col gap-5">
            <BlockTitleTemplate titleText={t("title1")} />
            <BlockDescriptionTextTemplate descriptionText={t("description1")} />

            <div className="max-sm:hidden m-auto">
              <LogoMdrIcon />
            </div>
          </div>
        </SectionContentWrapper>

        <SectionContentWrapper classStyles="max-w-[350px] sm:max-w-[975px] lg:max-w-[628px] p-[45px]">
          <IconWrapper>
            <OperatorIcon />
          </IconWrapper>

          <div className="flex flex-col gap-5">
            <BlockTitleTemplate titleText={t("title2")} />
            <BlockDescriptionTextTemplate
              descriptionText={t("description2_1")}
            />
            <BlockDescriptionTextTemplate
              descriptionText={t("description2_2")}
            />
          </div>
        </SectionContentWrapper>
      </div>

      <SectionContentWrapper classStyles="max-sm:max-w-[350px] max-w-[1280px] p-[45px]">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col">
            <IconWrapper>
              <AimIcon />
            </IconWrapper>
            <BlockTitleTemplate titleText={t("title3")} />
            <BlockDescriptionTextTemplate descriptionText={t("description3")} />
          </div>
          <div
            className={`max-sm:hidden w-full max-w-[633px] h-[379px] dark:bg-[url(../images/dark-world-map.png)] bg-[url(../images/world-map.png)] bg-contain bg-no-repeat bg-blend-multiply dark:bg-transparent bg-[#F9FAFB]`}
          />
        </div>
      </SectionContentWrapper>

      <div className="flex mt-6 mb-[70px] gap-[33px] w-full max-w-[965px] lg:max-w-[1280px] flex-col lg:flex-row">
        <SectionContentWrapper classStyles="max-sm:max-w-[350px] w-full max-w-[965px] lg:max-w-[405px] p-[30px] max-sm:py-[50px] sm:min-h-[414px]">
          <IconWrapper classStyles="max-sm:hidden">
            <SendMoneyIcon />
          </IconWrapper>
          <h3 className="font-bold text-[35px] sm:text-[42px] leading-[0.9] text-justify">
            {t("title4")}
          </h3>
        </SectionContentWrapper>

        <SectionContentWrapper classStyles="max-sm:max-w-[350px] lg:max-w-[405px] p-[30px] max-sm:py-[50px] sm:min-h-[414px]">
          <IconWrapper classStyles="max-sm:hidden">
            <MobileIcon />
          </IconWrapper>
          <h3 className="font-bold text-[35px] sm:text-[42px] leading-[0.9]">
            {t("title5")}
          </h3>
        </SectionContentWrapper>

        <section
          className={`max-sm:max-w-[350px] dark:bg-[#FFFFFF] bg-[#0D0D0D] rounded-[32px] w-full lg:max-w-[405px] pl-[49px] pr-[35px] pb-[57px] flex flex-col justify-end max-sm:py-[50px] sm:min-h-[414px] gap-[50px]`}
        >
          <h3 className="font-bold text-[38px] sm:text-[42px] dark:text-[#151515] text-norm-white leading-[0.9]">
            {t("title6")}
          </h3>
          <Button
            className="dark:bg-[#FFDD33] text-[#1A1D1F] font-bold text-lg sm:text-[30px] bg-norm-white flex justify-center items-center w-[236px] sm:w-[295px] h-[62px]"
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
