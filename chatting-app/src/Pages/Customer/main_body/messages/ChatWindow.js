// components/ChatWindow.js
import React, { useEffect, useState } from "react";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";
import useFriend from "../../../../Services/Messages/getFriend";
import getTwoMessage from "../../../../Services/Messages/getTwoMessage";
import { useSelector } from "react-redux";

const ChatWindow = () => {
  
  const username = localStorage.getItem('username');
  const friends = useSelector((state) => state.counter.friend);
  

  const [messages, setMessages] = useState([]); // Use an empty array as initial state
  const [hasFriend, setHasFriend] = useState(Boolean(friends)); // Track if a friend is selected

  useEffect(() => {
    if (friends) {
      getChats();
      setHasFriend(true);
    } else {
      setHasFriend(false);
    }
  }, [friends]);

  async function getChats() {
    if (!friends) return; // Exit if no friend is selected

    try {
      const response = await getTwoMessage(username, friends);
      console.log("Chat messages:", response);
      setMessages(response || []); // Set response or empty array if no messages
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }

  return (
    <div className="flex flex-col w-[100%] bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-700">
        <img
          src="path-to-profile.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h2 className="font-semibold">{friends || "Select a friend"}</h2>
          <p className="text-sm text-gray-400">{hasFriend ? "Active 6m ago" : "No friend selected"}</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow p-4 overflow-y-auto">
        {hasFriend ? (
          messages.map((msg, index) => (
            <MessageItem key={index} messages={msg} />
          ))
        ) : (
          <p className="text-gray-400">Select a friend to start a chat.</p>
        )}
      </div>

      {/* Input Bar */}
      {hasFriend && <MessageInput />}
    </div>
  );
};

export default ChatWindow;
