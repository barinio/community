"use client";

import { useState, ChangeEvent, KeyboardEvent, FormEvent } from "react";

interface InputProps {
  sendMessage: (message: string) => void;
}

function Input({ sendMessage }: InputProps) {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSendMessage(e as any); // TypeScript workaround for event types
    }
  };

  return (
    <div className="w-[95%] h-10 flex items-center justify-center bg-gray-800 px-4 rounded-lg border border-gray-700 mb-6 absolute bottom-14 left-1/2 transform -translate-x-1/2 focus-within:border-gray-500">
      <form className="flex w-full" onSubmit={handleSendMessage}>
        <input
          required
          placeholder="Message..."
          type="text"
          className="bg-gray-800 text-white w-full px-2 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-800"
          id="messageInput"
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button
          id="sendButton"
          onClick={handleSendMessage}
          type="submit"
          className="ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="gray"
            viewBox="0 0 664 663"
            width="24"
            height="24"
          >
            <path d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Input;
