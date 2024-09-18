import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  ArrowIcon,
  IconService1,
  IconService2,
  IconService3,
} from "@/components/icons";
import serviceLogo from "@/images/serviceImg.png";

const cardsData = [
  {
    title: "L'élaboration d'une politique de recouvrement",
    description: "Description de la première carte",
    bgColor: "#171717",
    textColor: "#fff",
    buttonBg: "#ffdd33",
    buttonTextColor: "black",
  },
  {
    title: "La révision et la rédaction des contrats",
    description: "Description de la deuxième carte",
    bgColor: "#ffdd33",
    textColor: "#000",
    buttonBg: "#000",
    buttonTextColor: "#fff",
  },
  {
    title: "Rédaction de scripts de contact et d’appels",
    description: "Description de la troisième carte",
    bgColor: "#ffdd33",
    textColor: "#000",
    buttonBg: "#000",
    buttonTextColor: "#fff",
  },
  {
    title: "Conseils et accompagnement juridiques",
    description: "Description de la quatrième carte",
    bgColor: "#171717",
    textColor: "#fff",
    buttonBg: "#ffdd33",
    buttonTextColor: "black",
  },
];

export default function Services() {
  const t = useTranslations("HomePageMain");

  return (
    <div className="">
      <section className="flex flex-col lg:flex-row justify-between mb-[178px] mt-16 ">
        <div>
          <p className="max-w-[780px] text-[48px] text-[#171717] dark:text-[#fff] leading-[100%] font-bold tracking-[-1.4px] mb-[22px]">
            Chez CommUnité, nous proposons une gamme complète de services conçus
            pour s’adapter aux besoins spécifiques de chaque entreprise.
          </p>
          <p className="max-w-[700px] text-[36px] text-[#98A2B3] leading-[112%] font-normal tracking-[-1.4px]">
            Grâce à notre expertise diversifiée, notre approche innovante et un
            encadrement juridique garanti, nous aidons nos clients à améliorer
            leurs recevables, optimiser leur relation client et sécuriser leur
            trésorerie.
          </p>
        </div>

        <div className="relative hidden md:block">
          <Image
            src={serviceLogo}
            width={238}
            height={250}
            alt="Icon"
            className="inline-block mb-2"
          />
          <Card className="absolute top-[136px] left-[55px] h-20 z-10 rounded px-6 py-[20px] bg-[#fff] ">
            <p className="w-[410px] text-2xl font-light text-[#1b1b1b]">
              Your credit scoring
              <span className="text-4xl text-[#01C087] ml-8 mr-10">792</span>
              <span className="text-2xl font-bold text-[#1b1b1b]">Good</span>
            </p>
          </Card>
          <Card className="relative w-[485px] rounded-[33px] px-5 pt-[30px] pb-[44px]  bg-[#171717] ">
            <p className="text-xs font-normal text-[#9E9E9E] mb-9 flex items-center before:content-[''] before:block before:h-[1px] before:w-[30px] before:bg-[#9E9E9E] before:mr-2">
              Optimisation de la gestion des débiteurs
            </p>
            <p className="w-[230px] text-[20px] leading-[90%] tracking-[-1.4px] font-bold text-[#f9f5f5]">
              Améliorez vos performances et atteignez de nouveaux sommets
            </p>
            <div className="absolute bottom-[0px] right-[30px] flex flex-row items-end gap-4">
              {[80, 96, 112].map((height, index) => (
                <span
                  key={index}
                  className="w-[47px] rounded-[2px] bg-[#ffdd33]"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </Card>
        </div>
      </section>

      <h2 className="text-center text-[45px] leading-[38px] tracking-tight font-bold uppercase mb-[86px]">
        Nos services
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <Card className="rounded-[32px] bg-[#F9FAFB] dark:bg-[#171717]">
          <CardBody className="p-[45px]">
            <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[#FFDD33] mb-[50px]">
              <IconService1 />
            </div>

            <p className="text-3xl mb-5">
              Maximisez la gestion de vos comptes recevables à moindre coût
              grâce à nos services entièrement ou partiellement automatisés. En
              tenant compte de la qualité des informations détenues et des
              délais de paiement des créances, nous vous proposons des solutions
              sur mesure adaptées à vos besoins. Maintenez une trésorerie saine
              avec notre gestion proactive des comptes de moins de 90 jours.
              Nous nous assurons que vos factures soient payées à temps, tout en
              préservant des relations harmonieuses avec vos clients.
            </p>

            <div className="flex justify-center mt-auto">
              <Button
                href="/services"
                as={Link}
                radius="full"
                color="warning"
                endContent={<ArrowIcon />}
                // variant="solid"
                className="font-bold text-xl w-[220px] py-8 px-6 bg-[#ffdd33] text-black w-btn"
              >
                En savoir plus
                {/* {t("servicesBtn")} */}
              </Button>
            </div>
          </CardBody>
        </Card>

        <Card className="rounded-[32px] bg-[#F9FAFB] dark:bg-[#171717]">
          <CardBody className="p-[45px]">
            <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[#FFDD33] mb-[50px]">
              <IconService2 />
            </div>

            <p className="text-3xl mb-5">
              Sécurisez le recouvrement de vos créances en identifiant
              rapidement celles qui présentent le plus de risque de retard et en
              intervenant adéquatement au moment opportun. Les clients ayant
              souscrit à nos services de gestion des recevables bénéficient d'un
              taux préférentiel pour le recouvrement, assuré par notre
              co-entreprise, le Cabinet d’avocats Maîtres du Recouvrement. Notre
              approche équilibrée allie efficience, efficacité et
              respectabilité, vous permettant de recouvrer vos créances tout en
              maintenant des relations professionnelles positives avec vos
              débiteurs.
            </p>

            <div className="flex justify-center mt-auto">
              <Button
                href="/services"
                as={Link}
                radius="full"
                color="warning"
                endContent={<ArrowIcon />}
                // variant="solid"
                className="font-bold text-xl w-[220px] py-8 px-6 bg-[#ffdd33] text-black w-btn"
              >
                En savoir plus
                {/* {t("servicesBtn")} */}
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

          <h3 className="text-4xl mb-12">
            “Lex dura, sed lex" – La loi est dure, mais c'est la loi. Pour
            garantir que les créances assignées par nos clients soient
            irréprochables sur le plan juridique, nous veillons à leur parfaite
            conformité légale.
          </h3>

          <p className="text-3xl mb-5">
            De plus, nous fournissons des conseils quant à la pratique du
            recouvrement dans une perspective d’encadrement juridique. Nous vous
            guidons sur quoi dire, quand le dire et comment le dire, tout en
            respectant scrupuleusement les obligations légales et les
            réglementations en vigueur, afin que les opérations de recouvrement
            soient sans faille.
          </p>
        </CardBody>
      </Card>

      <h2 className="text-center text-[45px] leading-[38px] tracking-tight font-bold uppercase mb-[60px]">
        Nos services comprennent
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[70px] mb-[104px]">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="rounded-[32px]"
            style={{ backgroundColor: card.bgColor, color: card.textColor }}
          >
            <CardBody className="px-[78px] pt-[78px] pb-[44px]">
              <p className="w-[300px] h-[170px] text-[45px] leading-[58px] tracking-tight mb-[120px]">
                {card.title}
              </p>
              <div className="flex justify-center">
                <Button
                  href="/services"
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
                  En savoir plus
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <h2 className="text-center text-[45px] leading-[38px] tracking-tight font-bold  mb-[160px]">
        CommUnité – Solutions d’avenir
      </h2>

      <h2 className="font-bold text-[58px] md:text-[110px] text-center leading-[0.82] tracking-[-.03em]  mb-[90px]">
        {t("titleAchieveMore")}
      </h2>
    </div>
  );
}

{
  /* <div className="flex flex-row gap-[70px] mb-[104px]">
  <Card className="flex-1 rounded-[32px] bg-[#171717] dark:bg-[#171717]">
    <CardBody className="px-[78px] pt-[78px] pb-[44px]">
      <p className="w-[300px] h-[170px] text-[45px] leading-[58px] tracking-tight text-[#fff] mb-[120px]">
        L'élaboration d'une politique de recouvrement
      </p>

      <div className="flex justify-center">
        <Button
          href="/services"
          as={Link}
          radius="full"
          color="warning"
          endContent={<ArrowIcon />}
          // variant="solid"
          className="font-bold text-xl w-[220px] py-8 px-6 bg-[#ffdd33] text-black "
        >
          En savoir plus
          {/* {t("servicesBtn")} */
}
// </Button>
// </div>
// </CardBody>
// </Card>

// <Card className="flex-1 rounded-[32px] bg-[#ffdd33] dark:bg-[#ffdd33] text-[#000000]">
//   <CardBody className="px-[78px] pt-[78px] pb-[44px]">
//     <p className="w-[300px] h-[170px] text-[45px] leading-[58px] tracking-tight mb-[120px]">
//       La révision et la rédaction des contrats
//     </p>

//     <div className="flex justify-center">
//       <Button
//         href="/services"
//         as={Link}
//         radius="full"
//         color="warning"
//         endContent={<ArrowIcon />}
//         // variant="solid"
//         className="font-bold text-xl w-[220px] text-[#fff] py-8 px-6 bg-[#000] "
//       >
//         En savoir plus
//         {/* {t("servicesBtn")} */}
//       </Button>
//     </div>
//   </CardBody>
// </Card>

// <Card className="flex-1 rounded-[32px] bg-[#ffdd33] dark:bg-[#ffdd33] text-[#000000]">
//   <CardBody className="px-[78px] pt-[78px] pb-[44px]">
//     <p className="w-[300px] h-[170px] text-[45px] leading-[58px] tracking-tight mb-[120px]">
//       Rédaction de scripts de contact et d’appels
//     </p>

//     <div className="flex justify-center">
//       <Button
//         href="/services"
//         as={Link}
//         radius="full"
//         color="warning"
//         endContent={<ArrowIcon />}
//         // variant="solid"
//         className="font-bold text-xl w-[220px] text-[#fff] py-8 px-6 bg-[#000] "
//       >
//         En savoir plus
//         {/* {t("servicesBtn")} */}
//       </Button>
//     </div>
//   </CardBody>
// </Card>

// <Card className="flex-1 rounded-[32px] bg-[#171717] dark:bg-[#171717]">
//   <CardBody className="px-[78px] pt-[78px] pb-[44px]">
//     <p className="w-[300px] h-[170px] text-[45px] leading-[58px] tracking-tight text-[#fff] mb-auto">
//       Conseils et accompagnement juridiques
//     </p>

//     <div className="flex justify-center">
//       <Button
//         href="/services"
//         as={Link}
//         radius="full"
//         color="warning"
//         endContent={<ArrowIcon />}
//         // variant="solid"
//         className="font-bold text-xl w-[220px] py-8 px-6 bg-[#ffdd33] text-black "
//       >
//         En savoir plus
//         {/* {t("servicesBtn")} */}
//       </Button>
//     </div>
//   </CardBody>
// </Card>
// </div>; */}
