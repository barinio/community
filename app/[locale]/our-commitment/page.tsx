import Image from "next/image";
import { useTranslations } from "next-intl";

import heroImg from "@/images/hero-img.png";
import TitleAchieveMore from "@/components/TitleAchieveMore";
import { OurCommitmentList } from "@/data/OurCommitmentList";

export default function OurCommitment() {
  const t = useTranslations("OurCommitment");

  return (
    <>
      <div className="items-center justify-end flex max-w-7xl gap-6 mb-24">
        <h1 className="max-w-[611px] text-justify w-full font-bold text-6xl dark:text-norm-white text-[#171717] tracking-[-.04em]">
          {t("heroTitle")}
        </h1>
        <div className="w-full">
          <Image
            src={heroImg}
            width={594}
            height={548}
            alt="Picture of the author"
            className="object-fill m-auto"
          />
        </div>
      </div>

      <ul className="flex justify-center flex-wrap gap-x-6 gap-y-11 mb-5 [&>*:nth-child(-n+2)]:bg-main-yellow [&>*:nth-child(n+3):nth-child(-n+4)]:bg-black [&>*:nth-child(n+3):nth-child(-n+4)]:dark:bg-[#171717] [&>*:nth-child(n+5)]:bg-[#F9FAFB]">
        {OurCommitmentList.map(({ number, title, description }) => (
          <li key={number} className="rounded-[32px] w-[628px]">
            <section className="w-full max-w-[975px] lg:max-w-[628px] p-[45px]">
              <div
                className={`mb-[50px] w-[72px] h-[72px] font-bold text-[35px] flex items-center justify-center rounded-full ${number <= 2 ? "bg-black text-white" : "bg-main-yellow text-black"}`}
              >
                {number}
              </div>
              <h3
                className={`font-bold text-[38px] leading-[0.98] text-justify ${number >= 3 && number <= 4 ? "text-white" : "dark:text-[#1A1D1F]"}`}
              >
                {t(title)}
              </h3>
              <p
                className={`text-[38px] leading-[0.98] text-justify ${number >= 3 && number <= 4 ? "text-white" : "dark:text-[#1A1D1F]"}`}
              >
                {t(description)}
              </p>
            </section>
          </li>
        ))}
        <li className="rounded-[32px] w-full py-14 px-[70px]">
          <p className="text-[35px] leading-[0.98] text-justify dark:text-[#1A1D1F]">
            {t("lastBoxText")}
          </p>
        </li>
      </ul>

      <TitleAchieveMore />
    </>
  );
}
