import { useTranslations } from "next-intl";
import { Link } from "@nextui-org/link";

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
        Patrick René
      </p>
      <p className="text-[31px] leading-[0.98] text-justify text-white mb-10">
        {t("directorOfOperations")}
      </p>

      <address className="not-italic">
        <ul>
          <li>
            <Link
              href="mailto:prene@desrochesmongeonavocats.com"
              className="text-[31px] leading-[0.98] text-justify text-white"
            >
              prene@desrochesmongeonavocats.com
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
