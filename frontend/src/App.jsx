import { useState, useRef, useEffect } from "react";
import ChatBotIcon from "./components/ChatBotIcon";
import Chatform from "./components/Chatform";
import ChatMessages from "./components/ChatMessages";

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  const chatContainerRef = useRef(null);

  // For auto scroll
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <>
      <div className="w-[100%] flex items-center justify-center min-h-[100vh]">
        <div className="w-85 bg-white rounded-2xl overflow-hidden shadow-2xs">
          
          {/* Chat bot header */}
          
          <div className="flex items-center bg-[#2f05a1] px-5 py-3 justify-between">
            <div className="flex gap-3 items-center">
              <span className="bg-white fill-[#2f05a1] rounded-full p-2">
                <ChatBotIcon />
              </span>
              <h2 className="font-extrabold text-2xl text-white">Chat Bot</h2>
            </div>
            <button className="material-symbols-rounded rounded-full p-2 text-white">
              keyboard_arrow_down
            </button>
          </div>

          {/* Chat body n auto-scroll */}
          
          <div
            ref={chatContainerRef} // Attach ref here
            className="h-110 px-4 py-3 flex flex-col gap-2 overflow-auto"
          >
            <div className="flex gap-3 items-end-safe pr-14">
              <span className="bg-[#2f05a1] fill-white rounded-full p-2">
                <ChatBotIcon />
              </span>
              <p className="bg-gray-200 text-xs rounded-t-2xl rounded-br-2xl px-3 py-2 text-gray-900">
                Hey there!✋ <br /> I'm Abhishek Persona Bot 🤖
              </p>
            </div>
            {chatHistory.map((chat, index) => (
              <ChatMessages key={index} chat={chat} />
            ))}
          </div>

          {/* Chatbot footer */}
          
          <div className="p-4">
            <Chatform setChatHistory={setChatHistory} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
