import { useTranslations } from "next-intl";

import Address from "@/components/Address";

export default function PersonalInformation() {
  const t = useTranslations("PersonalInformation");

  return (
    <div className="rounded-[32px] bg-[#171717] p-[45px] pb-[70px] ">
      <h1 className="text-[40px] mb-10 text-white leading-[0.93]">
        {t("title")}
      </h1>
      <p className="text-[31px] text-justify tracking-[-.03em] mb-10 text-white">
        {t("description")}
      </p>

      <p className="font-bold text-[33px] leading-[0.98] text-justify text-white">
        {t("patrickRene")}
      </p>
      <p className="text-[31px] leading-[0.98] text-justify text-white mb-10">
        {t("directorOfOperations")}
      </p>

      <Address textStyle="text-justify text-white w-[280px]" />
    </div>
  );
}
