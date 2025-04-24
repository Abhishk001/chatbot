import React from "react";
import ChatBotIcon from "./ChatBotIcon";

function ChatMessages({ chat }) {
  return (
    <div
      className={`h-auto ${
        chat.role === "model" ? "bot" : "user"
      }`}
    >
      
      {/* Conditional rendering for the bot message */}
      
      {chat.role === "model" && (
        <div className="flex gap-3 items-end pr-14">
          <span className="bg-[#2f05a1] fill-white rounded-full p-2">
            <ChatBotIcon />
          </span>
          <p className="bg-gray-200 text-xs rounded-t-2xl rounded-br-2xl px-3 py-2 text-gray-900">
            {chat.text}
          </p>
        </div>
      )}

      
      {/* User message */}
      
      {chat.role === "user" && (
        <div className="flex justify-end">
          <p className="bg-[#2f05a1] text-white text-xs rounded-t-2xl rounded-bl-2xl px-3 py-2">
            {chat.text}
          </p>
        </div>
      )}
    </div>
  );
}

export default ChatMessages;
