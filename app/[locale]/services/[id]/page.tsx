"use client";

import React, { useState } from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Tab, Tabs } from "@nextui-org/tabs";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

import {
  dataCollectionServices,
  CollectionServicesItem,
} from "@/data/dataCollectionServices";

export interface PageProps {
  params: { id: string };
}

export default function CollectionServices({ params }: PageProps) {
  const [selectedTab, setSelectedTab] = useState<string>(params.id);

  console.log("params.id :>> ", params.id);
  // const id = params.id;

  const t = useTranslations("CollectionServicesPage");

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
        className=" w-full max-w-[1280px] overflow-x-auto"
        orientation="horizontal"
      >
        <Tabs
          variant="underlined"
          aria-label="Navigation Tabs"
          selectedKey={selectedTab}
          onSelectionChange={handleTabChange}
          classNames={{
            tabList:
              "gap-6 w-max relative rounded-none p-0 border-b border-divider whitespace-nowrap mb-9",
            cursor: "w-full",
            tab: "max-w-fit px-0 h-12",
            tabContent: "text-default-400",
          }}
        >
          {dataCollectionServices.map((tab) => (
            <Tab
              // href={`/our-commitment/${tab.id}`}
              key={tab.id}
              title={t(tab.title)}
            />
          ))}
        </Tabs>
      </ScrollShadow>

      {currentTab && (
        <section key={currentTab.id}>
          <div className="clearfix mb-[85px]">
            <div className="w-[320px] md:w-[420px] lg:w-[520px] sm:float-right mt-2 ml-16 mb-20">
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
