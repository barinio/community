"use client";

import React from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";

import { Link as NavLink } from "@/navigation";
import { FooterLogo, InboxIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import FooterInputEmail from "@/components/FooterInputEmail";
import Address from "@/components/Address";

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

            <section className="max-w-[535px] my-auto">
              <h4 className="hidden text-norm-white mb-6">{t("inputTitle")}</h4>

              <FooterInputEmail />
            </section>
          </div>
        </div>

        <div className="second-footer flex sm:flex-row justify-between mt-[34px] sm:mt-4 gap-12 sm:gap-6">
          <div className="mb-[15px] pb-7">
            <p className="max-sm:hidden text-lg text-[#BEBEBE] mb-2.5">
              {t("subTitle")}
            </p>

            <Address textStyle="max-sm:hidden text-[#BEBEBE] text-lg w-[190px]" />
          </div>

          <ul className="flex flex-col gap-[18px]">
            <li>
              <h4 className="text-norm-white font-bold">Site</h4>
            </li>
            {siteConfig.navItems.map(({ label, href }, index) => (
              <li
                key={label}
                className={`${index === siteConfig.navItems.length - 1 ? "hidden " : ""}text-[#BEBEBE]`}
              >
                <Link
                  as={NavLink}
                  href={href}
                  className="text-sm text-[#BEBEBE]"
                >
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-[18px] [&:li:last-child]:hidden">
            <li>
              <h4 className="text-norm-white font-bold">Support</h4>
            </li>

            {siteConfig.footerOtherLinks.map(({ label, href }) => (
              <li key={label} className="text-[#BEBEBE]">
                <Link href={href} className={`text-sm text-[#BEBEBE] `}>
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
          <FooterLogo />
          <p className="font-bold text-norm-white text-2xl">{t("logo")}</p>
        </NextLink>
      </div>

      <div className="flex justify-center items-center gap-5 text-[#BEBEBE] py-9">
        <ul className="flex gap-1.5">
          {siteConfig.links.map(({ Icon, link }) => (
            <li key={link}>
              <div className="bg-main-yellow flex justify-center items-center rounded-full w-[44px] h-[44px]">
                <Link as={NavLink} isExternal href={link}>
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
