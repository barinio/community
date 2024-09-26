import { useTranslations } from "next-intl";

interface InfoBlockProp {
  title: string;
  content: string;
  isYellow?: boolean;
}

const InfoBlock = ({ title, content, isYellow }: InfoBlockProp) => {
  const t = useTranslations("AdvantagesPage");

  return (
    <li
      className={`w-full max-w-[600px] h-[300px] sm:h-[500px] px-[50px] flex justify-center items-center rounded-[32px] ${isYellow ? "bg-main-yellow text-[#151515]" : "text-white bg-[#151515] dark:bg-[#171717]"}`}
    >
      <p className="text-[20px] sm:text-[35px] leading-[0.98] text-justify ">
        <span className="font-bold">{t(title)} </span>
        {t(content)}
      </p>
    </li>
  );
};

export default InfoBlock;
