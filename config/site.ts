export type SiteConfig = typeof siteConfig;

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons";

export const siteConfig = {
  name: "CommUnity",
  description:
    "Votre partenaire expert en gestion innovante de comptes recevables",
  navItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "services",
      href: "/services",
    },
    {
      label: "ourCommitment",
      href: "/our-commitment",
    },
    {
      label: "advantages",
      href: "/advantages",
    },
    {
      label: "contact",
      href: "/contact",
    },
  ],
  footerOtherLinks: [
    {
      label: "privacyPolicy",
      href: "/privacy-policy",
    },
    {
      label: "contact",
      href: "/contact",
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
      Icon: InstagramIcon,
      link: "https://nextui.org",
    },
    {
      Icon: FacebookIcon,
      link: "https://discord.gg/9b6yyZKmH4",
    },
    {
      Icon: TwitterIcon,
      link: "https://twitter.com/getnextui",
    },
    {
      Icon: LinkedinIcon,
      link: "https://patreon.com/jrgarciadev",
    },
  ],
};
