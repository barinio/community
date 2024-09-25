"use client";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Button } from "@nextui-org/button";

export const Navbar = () => {
  const t = useTranslations("NavItems");

  return (
    <NextUINavbar maxWidth="xl" className="mt-2" position="sticky">
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-3" href="/">
          <Logo />
          <p className="font-bold text-inherit text-2xl">CommUnité</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full gap-20"
        justify="end"
      >
        <ul className="hidden md:flex gap-x-10 justify-end flex-wrap gap-y-0 max-[965px]:pt-3">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Button
                as={Link}
                className={clsx(
                  "bg-transparent data-[active=true]:text-primary data-[active=true]:font-medium font-bold text-sm px-[17px] py-2.5 uppercase",
                  "hover:bg-[#FFDD33] hover:text-black focus:bg-[#FFDD33] focus:text-black transition-colors duration-300",
                )}
                variant="solid"
                radius="full"
                href={item.href}
              >
                {t(item.label)}
              </Button>
            </NavbarItem>
          ))}
          <li className="hidden md:flex gap-6 px-[17px]">
            <LocaleSwitcher />
            <ThemeSwitch />
          </li>
        </ul>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" className="uppercase" href="#" size="lg">
                {t(item.label)}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
