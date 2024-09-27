"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Chat from "@/components/chatBot/Chat";

function Assistant() {
  const [isChatOpen, setChatOpen] = useState(false);

  const t = useTranslations("ChatBot");

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed right-5 bottom-5 flex flex-col items-end z-[1111]">
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="w-36 h-14 rounded-full bg-gradient-to-r from-[#FFDD33] to-[#FFDD33]  text-[#171717] text-lg shadow-[0px_4px_4px_0px_#00000024] font-dosis transition-all duration-300 ease-in-out hover:translate-y-[3px] hover:shadow-none active:opacity-50"
        >
          {t("chatOpenBtn")}
        </button>
      )}
      {isChatOpen && <Chat closeChat={toggleChat} />}
    </div>
  );
}

export default Assistant;
