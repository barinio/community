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
    {
      label: "demo",
      href: "/demo",
    },
  ],
  footerOtherLinks: [
    {
      label: "privacyPolicy",
      href: "/privacy-policy",
    },
    {
      label: "personalInformation",
      href: "/personal-information",
    },
    {
      label: "contact",
      href: "/contact",
    },
  ],
  links: [
    {
      Icon: InstagramIcon,
      link: "https://www.instagram.com/c0mmunite?igsh=bmR6MGt6Mmp6YmJz",
    },
    {
      Icon: FacebookIcon,
      link: "https://www.facebook.com/communite.2024/",
    },
    {
      Icon: TwitterIcon,
      link: "https://x.com/c0mmunite",
    },
    {
      Icon: LinkedinIcon,
      link: "https://www.linkedin.com/company/105265217/",
    },
  ],
};
