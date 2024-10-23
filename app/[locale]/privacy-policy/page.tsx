import { useTranslations } from "next-intl";
import { Link } from "@nextui-org/link";

import { PrivacyPolicyList } from "@/data/PrivacyPolicyList";

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

      <address className="not-italic mt-4">
        <ul>
          <li>
            <Link
              href="mailto:info@communite.ca"
              className="text-[31px] leading-[0.98] text-justify text-white"
            >
              info@communite.ca
            </Link>
          </li>
          <li>
            <Link
              href="https://maps.app.goo.gl/WVBY2Ar3FiGnR6gE8"
              className="text-[31px] leading-[0.98] text-justify text-white"
              isExternal
            >
              4350 Beaubien East, Montreal, Quebec H1T 1S9
            </Link>
          </li>
          <li>
            <Link
              href="tel:+4509142498"
              className="text-[31px] leading-[0.98] text-justify text-white"
            >
              450-914-2498
            </Link>
          </li>
        </ul>
      </address>
    </div>
  );
}
