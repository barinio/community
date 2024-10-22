"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Tab, Tabs } from "@nextui-org/tabs";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

import { dataCollectionServices } from "@/data/dataCollectionServices";

export interface PageProps {
  params: { id: string };
}

export default function CollectionServices({ params }: PageProps) {
  // const [selectedTab, setSelectedTab] = useState<string>(params.id);
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("CollectionServicesPage");
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tabsContainerRef.current || e.button !== 0) return;
    setIsDragging(true);
    setStartX(e.pageX - tabsContainerRef.current.offsetLeft);
    setScrollLeft(tabsContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !tabsContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    tabsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
  //   if (tabsContainerRef.current) {
  //     e.preventDefault();
  //     tabsContainerRef.current.scrollLeft += e.deltaY;
  //   }
  // };

  const renderWithBold = (text: string) => {
    const parts = text.split(/(\*.*?\*)/);

    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <strong key={index} className="font-bold">
            {part.slice(1, -1)}
          </strong>
        );
      }

      if (part.startsWith("+") && part.endsWith("+")) {
        return (
          <span
            key={index}
            className="underline underline-offset-2 decoration-1"
          >
            {part.slice(1, -1)}
          </span>
        );
      }

      return part;
    });
  };

  const renderDescription = (description: any[]) => {
    return description.map((item, index) => {
      if (typeof item === "string") {
        return (
          <p key={index} className="text-2xl mb-8 last:pt-6 text-justify">
            {renderWithBold(t(item))}
          </p>
        );
      } else if (Array.isArray(item)) {
        return (
          <ul key={index} className="mb-10">
            {item.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className="text-2xl text-justify pb-8 last:pb-0"
              >
                <p>{renderWithBold(t(subItem.title))}</p>
                {renderWithBold(t(subItem.desc))}
              </li>
            ))}
          </ul>
        );
      }

      return null;
    });
  };

  const currentTab = dataCollectionServices.find((tab) => tab.id === params.id);

  const handleTabChange = (key: any) => {
    // setSelectedTab(key);

    const currentLang = pathname.split("/")[1];

    router.push(`/${currentLang}/services/${key}`);
  };

  return (
    <>
      <ScrollShadow
        hideScrollBar
        className={`w-full max-w-[1280px] overflow-x-auto ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        orientation="horizontal"
        ref={tabsContainerRef}
        // onWheel={handleWheelScroll}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Tabs
          variant="underlined"
          aria-label="Navigation Tabs"
          selectedKey={params.id}
          onSelectionChange={handleTabChange}
          classNames={{
            tabList:
              "gap-6 w-max relative rounded-none p-0 border-b border-divider  mb-9",
            cursor: "w-full",
            tab: "max-w-fit px-0 h-12",
            tabContent: "text-default-400 whitespace-nowrap",
          }}
        >
          {dataCollectionServices.map((tab) => (
            <Tab key={tab.id} title={t(tab.title)} />
          ))}
        </Tabs>
      </ScrollShadow>

      {currentTab && (
        <section key={currentTab.id}>
          <div className="clearfix mb-[85px]">
            <div className="hidden sm:block  sm:float-right ml-16 pt-[10px] mb-14">
              <div
                className={`w-[359px] h-[335px] flex justify-center items-center bg-main-yellow rounded-[46px] ${currentTab.id === "recouvrement-des-creances" ? "pl-[60px] pr-[44px] py-[38px]" : "px-[58px] py-[42px]"}
                 ${currentTab.id === "la-revision-et-la-redaction-des-contrats" ? "pl-[58px] pr-[30px] pt-[36px] pb-[42px]" : "px-[58px] py-[42px]"}`}
              >
                <Image
                  priority={true}
                  alt={t(currentTab.title)}
                  className="w-full h-full object-contain transition-transform duration-300"
                  width={520}
                  height={420}
                  src={currentTab.img}
                />
              </div>
            </div>
            {renderDescription(currentTab.description)}
          </div>

          <div className="flex justify-center mt-auto">
            <Button
              href={`/contact`}
              as={Link}
              radius="full"
              color="warning"
              className="font-bold text-xl w-[220px] py-8 px-6 bg-[#ffdd33] text-black mb-[90px]"
            >
              {t("btnCommitment")}
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
