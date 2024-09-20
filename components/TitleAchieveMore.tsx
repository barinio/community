import { useTranslations } from "next-intl";

const TitleAchieveMore = () => {
  const t = useTranslations("AchieveMore");

  return (
    <h2 className="font-bold max-w-7xl text-[110px] text-center leading-[0.82] tracking-[-.03em] mt-[85px]">
      {t("title")}
    </h2>
  );
};

export default TitleAchieveMore;
