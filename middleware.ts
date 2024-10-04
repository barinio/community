import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["fr", "en"],
  localePrefix: "always",
  defaultLocale: "fr",
});

export const config = {
  matcher: ["/", "/(fr|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
