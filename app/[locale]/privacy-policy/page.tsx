import { useTranslations } from "next-intl";

import { PrivacyPolicyList } from "@/data/PrivacyPolicyList";

export default function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className="rounded-[32px] bg-[#171717] p-[45px] pb-[70px] ">
      <h1 className="text-[38px] mb-10">Privacy Policy</h1>
      <p className="text-[31px] mb-24">
        What is personal information? “Personal information is that which
        relates to a natural person and allows them to be identified. They are
        confidential. With certain exceptions, they cannot be communicated
        without the consent of the person concerned.”
      </p>
      <ul className="flex flex-col gap-16">
        {PrivacyPolicyList.map(({ number, title, description }) => (
          <li key={number} className="rounded-[32px] w-full">
            <h3 className="text-[31px] text-white mb-10">
              {number}. {t(title)}
            </h3>
            <p className="text-[31px] text-white">{t(description)}</p>
          </li>
        ))}
        <li className="rounded-[32px] w-full "></li>
      </ul>

      <p className="text-[31px] leading-[0.98] text-justify text-white">
        {t("privacyOfficer")}
      </p>
      <p className="text-[31px] leading-[0.98] text-justify text-white">
        {t("privacyOfficerName")}
      </p>
      <p className="text-[31px] leading-[0.98] text-justify text-white">
        {t("addressText")}
      </p>
    </div>
  );
}
