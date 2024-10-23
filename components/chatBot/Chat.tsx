"use client";

import { useState, useEffect, useRef } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { useTranslations } from "next-intl";

import { IconClose } from "../icons";

import Input from "@/components/chatBot/Input";
import KeywordForm from "@/components/chatBot/KeywordForm";

interface Message {
  content: string;
  type: "incoming" | "outgoing";
}

interface ChatProps {
  closeChat: () => void;
}

function Chat({ closeChat }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const ws = useRef<WebSocket | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  const t = useTranslations("ChatBot");

  const setupWebSocket = () => {
    ws.current = new WebSocket("wss://communite-back-product.onrender.com");

    // ws.current = new WebSocket("wss://one855-product-code.onrender.com");
    ws.current.onmessage = (event) => {
      const receivedMessage: Message = JSON.parse(event.data);

      console.log("Received message: ", receivedMessage);
      setIsLoading(false);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
      setTimeout(() => {
        setupWebSocket();
      }, 1000);
    };

    ws.current.onerror = (error) => {
      console.log("WebSocket error: ", error);
      ws.current?.close();
    };
  };

  useEffect(() => {
    if (!ws.current || ws.current.readyState === WebSocket.CLOSED) {
      setupWebSocket();
    }

    return () => {
      ws.current?.close();
    };
  }, []);

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    };

    scrollToBottom();
  }, [messages]);

  const sendMessage = (message: string) => {
    if (
      message !== "" &&
      ws.current &&
      ws.current.readyState === WebSocket.OPEN
    ) {
      const messageData = JSON.stringify({
        content: message,
        type: "outgoing",
      });

      console.log("Sending message: ", messageData);
      ws.current.send(messageData);
      setIsLoading(true);
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: message, type: "outgoing" },
      ]);
    }
  };

  return (
    <div className="w-80 h-[620px] rounded-[44px] bg-gray-700 p-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-end mb-4">
          <button
            onClick={closeChat}
            className="w-8 h-8 flex justify-center items-center bg-[rgba(63,49,53,0.11)] rounded-full transition-colors duration-500 hover:bg-gray-600 active:bg-gray-800 text-[22px]"
          >
            <IconClose />
          </button>
        </div>
        <div
          className="w-full h-full  rounded-lg max-h-[420px] overflow-y-auto overflow-x-hidden flex flex-col items-start custom-scrollbar"
          ref={chatRef}
        >
          <KeywordForm />
          {messages.map((msg, index) => (
            <div className="flex items-center my-2" key={index}>
              {msg.type === "incoming" && (
                <img
                  className="w-6 h-6 mr-2 "
                  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-balance-scale-advertising-kiranshastry-lineal-kiranshastry.png"
                  alt="Balance Scale"
                />
              )}
              <div
                className={`p-2 rounded-lg text-gray-800 break-words ${
                  msg.type === "outgoing"
                    ? "bg-green-300  ml-[110px] w-[160px]"
                    : "bg-blue-200 w-[70%] mr-auto"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && <PulseLoader color="#aec6eb" />}
          <Input sendMessage={sendMessage} />
        </div>
      </div>
      <div>
        <p className="text-gray-400 text-xs w-[80%] mx-auto">{t("chatText")}</p>
      </div>
    </div>
  );
}

export default Chat;
