import React from "react";
import SearchBar from "./Searchbar";
import ChatList from "./ChatList";
import Message from "../messages/A_Message";
import ProfileBar from "../../ProfilePage/ProfileBar";
import { useNavigate } from "react-router-dom";

function Chat_body() {
  const navigate = useNavigate();

  const username = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  if (!username && !token){
    navigate('/login')
  }
  return (
    <>
      <div className="flex fixed border-2 border-green-700 w-full">
        <div className="flex w-[25%]">
          <ProfileBar/>
          <div className="flex flex-col h-screen w-full bg-gray-100">
            <SearchBar />
            <ChatList />
          </div>
        </div>
        <div className="flex flex-col w-[75%]">
          <Message />
        </div>
      </div>
    </>
  );
}

export default Chat_body;
