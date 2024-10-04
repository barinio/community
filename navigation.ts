import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

import { locales } from "@/i18n";

export const localePrefix = "always"; // Default

export const pathnames = {
  "/": "/",
  "/services": "/services",
  "/our-commitment": "/our-commitment",
  "/advantages": "/advantages",
  "/privacy-policy": "/privacy-policy",
  "/contact": "/contact",
  "/personal-information": "/personal-information",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
