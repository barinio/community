import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export function useLocalizedPath() {
  const pathname = usePathname();
  const locale = useLocale();

  const currentPath = pathname.replace(`/${locale}`, "") || "/";

  return { currentPath, locale };
}
