export type SiteConfig = typeof siteConfig;

import instagram from "@/images/instagram.svg"
import facebook from "@/images/facebook.svg"
import twitter from "@/images/twitter.svg"
import linkedin from "@/images/linkedin.svg"

export const siteConfig = {
  name: "CommUnity",
  description:
    "Votre partenaire expert en gestion innovante de comptes recevables",
  navItems: [
    {
      label: "Welcome",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Our commitment",
      href: "/our-commitment",
    },
  ],
  // navMenuItems: [
  //   {
  //     label: "Welcome",
  //     href: "/",
  //   },
  //   {
  //     label: "Services",
  //     href: "/services",
  //   },
  //   {
  //     label: "Our commitment",
  //     href: "/our-commitment",
  //   },
  // ],
  links: [
    {
      icon: instagram,
      link: "https://nextui.org"
    },
    {
      icon:facebook,
      link: "https://discord.gg/9b6yyZKmH4"
    },
    {
      icon:twitter,
      link: "https://twitter.com/getnextui"
    },
    {
      icon:linkedin,
      link: "https://patreon.com/jrgarciadev",
    }]
};
