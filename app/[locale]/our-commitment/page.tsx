"use client";

import React, { useEffect, useState } from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Tab, Tabs } from "@nextui-org/tabs";
import { usePathname, useRouter } from "next/navigation";
import { dataCommitment } from "./data";
import Image from "next/image";

export default function OurCommitment() {
  const [selectedTab, setSelectedTab] = useState(dataCommitment[0].id);
  const pathname = usePathname();
  const router = useRouter();

  // useEffect(() => {
  //   const id = pathname.split("/").pop();

  //   if (dataCommitment.some((item) => item.id === id)) {
  //     setSelectedTab(id);
  //   }
  // }, [pathname]);

  const handleTabChange = (key) => {
    setSelectedTab(key);
    // router.push(`/our-commitment/${key}`, undefined, { shallow: true });
  };

  return (
    <>
      <ScrollShadow
        hideScrollBar
        className=" w-full max-w-[1280px] overflow-x-auto"
        orientation="horizontal"
      >
        <Tabs
          // selectedKey={pathname}
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
          {dataCommitment.map((tab) => (
            <Tab
              // href={`/our-commitment/${tab.id}`}
              key={tab.id}
              title={tab.title}
            >
              <section key={tab.id}>
                <div className="clearfix">
                  <div className="w-[520px] float-right mt-2 ml-10 mb-5">
                    <Image
                      alt={tab.title}
                      className="w-full h-full object-contain transition-transform duration-300"
                      width={520}
                      height={420}
                      src={tab.img}
                    />
                  </div>
                  {tab.description.map((item, index) => (
                    <p key={index} className="text-xl mb-3 last:mb-14">
                      {item}
                    </p>
                  ))}
                </div>
                <p className="text-xl text-[#D1A75B] mb-3">{"-"}</p>
              </section>
            </Tab>
          ))}
        </Tabs>
      </ScrollShadow>
    </>
  );
}
