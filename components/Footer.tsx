import React from "react";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";

import { InboxIcon, Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <>
      <div className="bg-[#171717] w-full p-7 sm:p-20 rounded-[32px] ">
        <div className="first-footer sm:border-b-2 sm:border-[#667085] sm:pb-20">
          <div className="max-sm:hidden bg-main-yellow flex justify-center items-center rounded-full w-[72px] h-[72px] mb-[66px]">
            <InboxIcon />
          </div>
          <div className="flex justify-between lg:flex-row flex-col sm:gap-20 lg:gap-6">
            <div className="max-w-[535px]">
              <h3 className="text-norm-white text-[20px] sm:text-[50px] font-bold leading-[1.17] mb-5">
                {t("title")}
              </h3>
              <p className="max-sm:hidden text-norm-white">
                {t("description")}
              </p>
            </div>

            <section className="max-w-[535px]">
              <h4 className="max-sm:hidden text-norm-white mb-6">
                {t("inputTitle")}
              </h4>

              <div className="flex">
                <Input
                  radius="full"
                  type="email"
                  placeholder={t("inputPlaceholder")}
                  className="w-[300px] mr-[18px]"
                  isClearable
                  classNames={{
                    input: [
                      "bg-transparent",
                      "text-white dark:text-white/90",
                      "placeholder:text-white/60",
                      "group-data-[has-value=true]:text-white",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                      "shadow-xl",
                      "bg-default/10",
                      "dark:bg-default/50",
                      "h-[53px]",
                      "data-[hover=true]:bg-default/30",
                      "dark:hover:bg-default/70",
                      "group-data-[focus=true]:bg-default/10",
                      "!cursor-text",
                    ],
                  }}
                />

                <Button
                  radius="full"
                  className="bg-main-yellow text-norm-gray w-[104px] h-[53px]"
                >
                  {t("button")}
                </Button>
              </div>
            </section>
          </div>
        </div>

        <div className="second-footer flex sm:flex-row justify-between mt-[34px] sm:mt-4 gap-12 sm:gap-6">
          <p className="max-sm:hidden text-[#BEBEBE]">{t("subTitle")}</p>

          <ul className="flex flex-col gap-[18px]">
            <li>
              <h4 className="text-norm-white font-bold">Company</h4>
            </li>
            {siteConfig.navItems.map(({ label, href }) => (
              <li key={label} className="text-[#BEBEBE]">
                <Link href={href} className="text-sm text-[#BEBEBE]">
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-[18px]">
            <li>
              <h4 className="text-norm-white font-bold">Support</h4>
            </li>

            {siteConfig.footerOtherLinks.map(({ label, href }) => (
              <li key={label} className="text-[#BEBEBE]">
                <Link href={href} className="text-sm text-[#BEBEBE]">
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <NextLink
          className="flex justify-start items-center gap-3 mt-12 sm:mt-0"
          href="/"
        >
          <Logo />
          <p className="font-bold text-norm-white text-2xl">CommUnité</p>
        </NextLink>
      </div>

      <div className="flex justify-center items-center gap-5 text-[#BEBEBE] py-9">
        <ul className="flex gap-1.5">
          {siteConfig.links.map(({ Icon, link }) => (
            <li key={link}>
              <div className="bg-main-yellow flex justify-center items-center rounded-full w-[44px] h-[44px]">
                <Link isExternal href={link}>
                  <Icon />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
