import Image from "next/image";
import { Button } from "@nextui-org/button";

import logoMdr from "@/images/logo-mdr.svg";
import operatorIcon from "@/images/operator.svg";
import mobileIcon from "@/images/mobile.svg";
import aimIcon from "@/images/aim.svg";
import { ArrowRightIcon, DiagramaIcon } from "@/components/icons";
import ImageTemplate from "@/components/ImageTemplate";
import SectionContentWrapper from "@/components/SectionContentWrapper";

const FutureSolutionsSection = () => {
  return (
    <section>
      <h2 className="font-bold text-[60px] text-center mb-[90px] w-full">
        CommUnité – Solutions d’avenir
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <SectionContentWrapper classStyles="max-w-[975px] lg:max-w-[628px] p-[45px]">
          <div className="bg-main-yellow flex justify-center items-center rounded-full w-[72px] h-[72px] mb-[50px]">
            <DiagramaIcon />
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-[38px] leading-[0.98] text-justify">
              CommUnité offre une solution complète et adaptative pour la
              gestion des comptes recevables de moins de 90 jours et le
              recouvrement amiable et judiciaire des créances passées ce délai.
            </h3>
            <p className="text-[35px] leading-[0.96] tracking-[-.03em] text-justify">
              Notre collaboration étroite avec notre co-entreprise, le Cabinet
              d'avocats Maîtres du Recouvrement, nous permet d'offrir une
              solution intégrée inégalée.
            </p>
            <Image
              src={logoMdr}
              width={392}
              height={168}
              alt="logo MDR"
              className="object-fill m-auto"
            />
          </div>
        </SectionContentWrapper>

        <SectionContentWrapper classStyles="max-w-[975px] lg:max-w-[628px] p-[45px]">
          <ImageTemplate src={operatorIcon} alt="operator icon" />

          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-[38px] leading-[0.98] text-justify">
              Chez CommUnité, nous savons que derrière toute créance se cachent
              différentes réalités
            </h3>
            <p className="text-[31px] leading-[0.96] tracking-[-.03em] text-justify">
              Celles de clients-débiteurs dont la communication doit être
              maintenue ou rétablie, celles d’entente à encadrer et de relations
              à préserver. En reconnaissant l'importance de chaque situation et
              du cadre légal encadrant les rapports du créancier et du débiteur
              - et vice-versa - nous déployons des stratégies sur mesure qui
              préservent et améliorent la relation avec vos clients, tout en
              garantissant un recouvrement optimal.
            </p>
            <p className="text-[31px] leading-[0.96] tracking-[-.03em] text-justify">
              CommUnite est l’allié stratégique d’une gestion financière
              optimale, économique et sécurisée, soutenue par une expertise
              juridique de premier plan.
            </p>
          </div>
        </SectionContentWrapper>
      </div>

      <SectionContentWrapper classStyles="p-[45px]">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col">
            <ImageTemplate src={aimIcon} alt="aim icon" />

            <h3 className="font-bold text-[42px] leading-[0.98] text-justify mb-[45px]">
              Notre mission
            </h3>
            <p className="text-[31px] leading-[1.08] tracking-[-.03em] text-justify max-w-[536px]">
              Optimiser la gestion des comptes-clients en combinant encadrement
              juridique, gestion des recevables, recouvrement des mauvaises
              créances et solutions comptable, le tout optimisé par des outils
              de pointe.
            </p>
          </div>

          <div
            className={`w-full max-w-[633px] h-[379px] dark:bg-[url(../images/dark-world-map.png)] bg-[url(../images/world-map.png)] bg-contain bg-no-repeat bg-blend-multiply dark:bg-transparent bg-[#F9FAFB]`}
          />
        </div>
      </SectionContentWrapper>

      <div className="flex mt-6 mb-[70px] gap-[33px] w-full max-w-[965px] lg:max-w-[1280px] flex-col lg:flex-row">
        <SectionContentWrapper classStyles="w-full max-w-[965px] lg:max-w-[405px] p-[30px] min-h-[414px]">
          <ImageTemplate src={operatorIcon} alt="operator icon" />
          <h3 className="font-bold text-[42px] leading-[0.9] text-justify">
            Faites plus de travail avec moins d’employés
          </h3>
        </SectionContentWrapper>
        <SectionContentWrapper classStyles="lg:max-w-[405px] p-[30px] min-h-[414px]">
          <ImageTemplate src={mobileIcon} alt="mobile icon" />
          <h3 className="font-bold text-[42px] leading-[0.9] text-justify">
            Solutions intégrées pour une gestion simplifiée de vos recevables
          </h3>
        </SectionContentWrapper>

        <section
          className={`dark:bg-[#FFFFFF] bg-[#0D0D0D] rounded-[32px] w-full lg:max-w-[405px] pl-[49px] pr-[35px] pb-[57px] flex flex-col justify-end min-h-[414px] gap-[50px]`}
        >
          <h3 className="font-bold text-[42px] dark:text-[#151515] text-norm-white leading-[0.9]">
            Contactez-nous pour plus d’informations
          </h3>
          <Button
            className="dark:bg-[#FFDD33] text-[#1A1D1F] font-bold text-[30px] bg-norm-white flex justify-center items-center w-[295px] h-[62px]"
            radius="full"
            endContent={<ArrowRightIcon />}
          >
            Renseignez-vous
          </Button>
        </section>
      </div>
    </section>
  );
};

export default FutureSolutionsSection;
