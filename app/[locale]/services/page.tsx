"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import {
  ArrowIcon,
  HeroImg2,
  HeroImg3,
  IconService1,
  IconService2,
  IconService3,
} from "@/components/icons";
import TitleAchieveMore from "@/components/TitleAchieveMore";
import image3 from "@/images/lelaboration-dune-politique.svg";
import image4 from "@/images/la-revision-et-la-redaction-yelow.svg";
import image5 from "@/images/letablissement-de-scripts-yelow.svg";
import image6 from "@/images/conseils-et-accompagnement.svg";

const cardsData = [
  {
    id: "lelaboration-dune-politique-de-recouvrement",
    title: "cardIncludeTitle1",
    img: image3,
    description: "Description de la première carte",
    bgColor: "#171717",
    textColor: "#fff",
    buttonBg: "#ffdd33",
    buttonTextColor: "black",
  },
  {
    id: "la-revision-et-la-redaction-des-contrats",
    title: "cardIncludeTitle2",
    img: image4,
    description: "Description de la deuxième carte",
    bgColor: "#ffdd33",
    textColor: "#000",
    buttonBg: "#000",
    buttonTextColor: "#fff",
  },
  {
    id: "letablissement-de-scripts",
    title: "cardIncludeTitle3",
    img: image5,
    description: "Description de la troisième carte",
    bgColor: "#ffdd33",
    textColor: "#000",
    buttonBg: "#000",
    buttonTextColor: "#fff",
  },
  {
    id: "conseils-et-accompagnement-juridiques",
    title: "cardIncludeTitle4",
    img: image6,
    description: "Description de la quatrième carte",
    bgColor: "#171717",
    textColor: "#fff",
    buttonBg: "#ffdd33",
    buttonTextColor: "black",
  },
];

export default function Services() {
  const t = useTranslations("ServicePage");
  const { theme } = useTheme();

  return (
    <div className=" sm:pb-[90px]">
      <section className="flex flex-col gap-4 lg:flex-row justify-between mb-[178px] mt-16 ">
        <div>
          <p className="max-w-[780px] text-[48px] text-[#171717] dark:text-[#fff] leading-[100%] font-bold tracking-[-0.04em] mt-4 mb-[26px]">
            {t("title")}
          </p>

          <p className="max-w-[700px] text-[36px] text-[#171717] dark:text-[#fff] leading-[112%] font-normal tracking-[-0.04em]">
            {t("textTitle")}
          </p>
        </div>

        <div className="flex justify-center items-center mx-auto">
          {theme === "dark" ? <HeroImg2 /> : <HeroImg3 />}
        </div>
      </section>

      <h2 className="text-center text-[45px] leading-[38px] tracking-tight font-bold uppercase mb-[86px]">
        {t("subTitle1")}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <Card className="flex-1 rounded-[32px] bg-[#F9FAFB] dark:bg-[#171717]">
          <CardBody className="p-[45px]">
            <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[#FFDD33] mb-[50px]">
              <IconService1 />
            </div>

            <p className="text-3xl text-justify mb-5">{t("cardText1")}</p>

            <div className="flex justify-center mt-auto">
              <Button
                href="/services/gestion-des-comptes-recevables"
                as={Link}
                radius="full"
                color="warning"
                endContent={<ArrowIcon />}
                className="font-bold text-xl w-[220px] py-8 px-6 bg-[#ffdd33] text-black w-btn"
              >
                {t("cardButton")}
              </Button>
            </div>
          </CardBody>
        </Card>

        <Card className="flex-1 rounded-[32px] bg-[#F9FAFB] dark:bg-[#171717]">
          <CardBody className="p-[45px]">
            <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[#FFDD33] mb-[50px]">
              <IconService2 />
            </div>

            <p className="text-3xl text-justify mb-5">{t("cardText2")}</p>

            <div className="flex justify-center mt-auto">
              <Button
                href="/services/recouvrement-des-creances"
                as={Link}
                radius="full"
                color="warning"
                endContent={<ArrowIcon />}
                className="font-bold text-xl w-[220px] py-8 px-6 bg-[#ffdd33] text-black w-btn"
              >
                {t("cardButton")}
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>

      <Card className="rounded-[32px] bg-[#F9FAFB] dark:bg-[#171717] mb-14">
        <CardBody className="p-[45px]">
          <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[#FFDD33] mb-[50px]">
            <IconService3 />
          </div>

          <h3 className="text-4xl font-bold text-justify mb-12">
            {t("cardTitle3")}
          </h3>

          <p className="text-3xl text-justify mb-5">{t("cardText3")}</p>
        </CardBody>
      </Card>

      <h2 className="text-center text-[45px] leading-[38px] tracking-tight font-bold uppercase mb-[60px]">
        {t("subTitle2")}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[70px] mb-[104px]">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className={`rounded-[32px] px-[78px] pt-[78px] pb-[44px] ${
              index === cardsData.length - 2 ? "order-last" : ""
            }
            ${index === cardsData.length - 1 ? "lg:order-last" : ""}
              
            `}
            style={{ backgroundColor: card.bgColor, color: card.textColor }}
          >
            <div
              className={`absolute top-6 right-6 flex items-center justify-center w-[58px] h-[58px] rounded-full   mb-[50px] 
                ${index === 3 ? "bg-[#FFDD33]" : ""}
                ${index === 0 ? "bg-[#FFDD33]" : ""}
                ${index === 2 ? "bg-[#000]" : ""}
                ${index === 1 ? "bg-[#000] pl-1 pb-[2px]" : ""}`}
            >
              <Image
                alt={t(card.title)}
                width={34}
                height={34}
                src={card.img}
              />
            </div>

            <p className="w-[230px] sm:w-[300px] h-[170px] text-[36px] leading-[48px] tracking-tight sm:text-[45px] sm:leading-[58px] sm:tracking-tight mb-[120px]">
              {t(card.title)}
            </p>
            <div className="flex justify-center">
              <Button
                href={`/services/${card.id}`}
                as={Link}
                radius="full"
                color="warning"
                endContent={<ArrowIcon />}
                className="font-bold text-xl w-[220px] py-8 px-6"
                style={{
                  backgroundColor: card.buttonBg,
                  color: card.buttonTextColor,
                }}
              >
                {t("cardButton")}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <TitleAchieveMore />
    </div>
  );
}
