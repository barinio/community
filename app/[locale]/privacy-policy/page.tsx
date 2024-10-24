import { useTranslations } from "next-intl";

import { PrivacyPolicyList } from "@/data/PrivacyPolicyList";
import Address from "@/components/Address";

export default function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className="rounded-[32px] bg-[#171717] p-[45px] pb-[70px] ">
      <h1 className="text-[38px] text-white mb-10">{t("mainTitle")}</h1>
      <p className="text-[31px] text-white mb-24">{t("mainDescription")}</p>
      <ul className="flex flex-col gap-16">
        {PrivacyPolicyList.map(({ number, title, description }) => (
          <li key={number} className="rounded-[32px] w-full">
            <h3 className="text-[31px] text-white mb-10">
              {number}. {t(title)}
            </h3>
            <p className="text-[31px] text-white">{t(description)}</p>
          </li>
        ))}
        <li className="rounded-[32px] w-full " />
      </ul>

      <p className="text-[31px] leading-[0.98] text-justify text-white">
        {t("privacyOfficer")}
      </p>
      <p className="text-[31px] leading-[0.98] text-justify text-white">
        {t("privacyOfficerName")}
      </p>

      <Address
        addressStyle="mt-4"
        textStyle="text-justify text-white w-[280px]"
      />
    </div>
  );
}
