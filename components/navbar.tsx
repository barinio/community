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
import {Link} from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import {useTranslations} from "next-intl";
import {useReducer} from "react";
import {Button} from "@nextui-org/button";

import {Link as NavLink} from "@/navigation";
import {siteConfig} from "@/config/site";
import {ThemeSwitch} from "@/components/theme-switch";
import {Logo} from "@/components/icons";
import {LocaleSwitcher} from "@/components/LocaleSwitcher";

export const Navbar = () => {
  const t = useTranslations("NavItems");
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

  return (
    <NextUINavbar
        className="mt-2"
        position="sticky"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"

    >
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-3" href="/">
          <Logo />
          <p className="font-bold text-inherit md:max-lg:text-lg text-2xl">
            {t("logo")}
          </p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full gap-20"
        justify="end"
      >
        <ul className="hidden md:flex lg:gap-5 justify-end ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Button
                as={NavLink}
                className={clsx(
                  "bg-transparent data-[active=true]:text-primary data-[active=true]:font-medium font-bold text-sm px-2 lg:px-[17px] py-2.5 uppercase",
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
          <li className="hidden md:flex gap-2 lg:gap-6 px-1 lg:px-[17px]">
            <LocaleSwitcher />
            <ThemeSwitch />
          </li>
        </ul>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <LocaleSwitcher />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-5">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="uppercase"
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen()}
              >
                {t(item.label)}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
