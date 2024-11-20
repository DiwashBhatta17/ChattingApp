import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import chatlistService from "../../../../Services/Messages/chatlistService";

const ChatList = () => {
  const [chats, setChats] = useState([]); // Use an empty array as the initial state

  useEffect(() => {
    getChats();
  }, []);

  async function getChats() {
    const username = localStorage.getItem('username');
    console.log('Retrieved username:', username);
    
    if (username) {
      const response = await chatlistService(username);
      console.log('This is chat list response:', response);

      if (response) {
        // Filter to get only the most recent message for each contact
        const recentChats = response.reduce((acc, chat) => {
          const existingChat = acc.find(item => item.contact === chat.contact);
          // Only keep the latest message for each contact
          if (!existingChat || new Date(chat.sent_time) > new Date(existingChat.sent_time)) {
            acc = acc.filter(item => item.contact !== chat.contact); // Remove old message if any
            acc.push(chat); // Add the latest message
          }
          return acc;
        }, []);

        setChats(recentChats);
      } else {
        console.error('No data received from chatlistService');
      }
    } else {
      console.error('No username found in localStorage');
    }
  }

  const image = "../../../Images/image.png";

  return (
    <div className="overflow-y-auto p-2">
      {chats.length > 0 ? (
        chats.map((chat, index) => (
          <ChatItem
            key={index}
            name={chat.contact}
            message={chat.sent_message}
            time={chat.sent_time}
            img={image}
          />
        ))
      ) : (
        <p>No chats available</p>
      )}
    </div>
  );
};

export default ChatList;
