"use client";

import React, { useRef, useState } from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Tab, Tabs } from "@nextui-org/tabs";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

import { dataCollectionServices } from "@/data/dataCollectionServices";

export interface PageProps {
  params: { id: string };
}

export default function CollectionServices({ params }: PageProps) {
  const [selectedTab, setSelectedTab] = useState<string>(params.id);

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
          <ul key={index} className="list-disc list-inside  mb-10">
            {item.map((subItem, subIndex) => (
              <li key={subIndex} className="text-2xl text-justify pl-[20px]">
                {renderWithBold(t(subItem))}
              </li>
            ))}
          </ul>
        );
      }

      return null;
    });
  };

  const currentTab = dataCollectionServices.find(
    (tab) => tab.id === selectedTab
  );

  const handleTabChange = (key: any) => {
    setSelectedTab(key);
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
          selectedKey={selectedTab}
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
            <div className="hidden sm:block w-[320px] md:w-[420px] lg:w-[520px] sm:float-right ml-16 pt-[10px] mb-14">
              <Image
                alt={currentTab.title}
                className="w-full h-full object-contain transition-transform duration-300"
                width={520}
                height={420}
                src={currentTab.img}
              />
            </div>
            {renderDescription(currentTab.description)}
          </div>

          <div className="flex justify-center mt-auto">
            <Button
              // href="/services"
              // as={Link}
              radius="full"
              color="warning"
              // variant="solid"
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
