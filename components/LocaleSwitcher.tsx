import React from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export function LocaleSwitcher() {
    const pathname = usePathname();
    const locale = useLocale();

    const otherLocale = locale === "en" ? "fr" : "en";

    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "").replace(/^\/+/, "");

    const newPath = `/${otherLocale}/${pathnameWithoutLocale}`;

    return (
        <Link href={newPath} passHref legacyBehavior>
            <Button
                as="a"
                variant="light"
                className="bg-transparent p-2 min-w-[auto]"
            >
                {locale === "en" ? "FR" : "EN"}
            </Button>
        </Link>
    );
}
