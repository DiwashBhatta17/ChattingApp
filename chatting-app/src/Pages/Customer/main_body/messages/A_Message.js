// App.js
import React from "react";
import ChatWindow from "./ChatWindow";
import Sidebar from "./SideBar";
import NoUserFound from "./NoUser";

function Message() {
  return (
    <div className="flex h-screen">
      <ChatWindow />
      <Sidebar />
      {/* <NoUserFound /> */}
    </div>
  );
}

export default Message;
