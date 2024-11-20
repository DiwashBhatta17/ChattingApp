// components/ChatItem.js
import React from "react";
import image from "../../../Images/image.png"
import {useDispatch} from "react-redux";
import { setFriend } from "../../../../Services/Redux-Service/counterSlice";
const ChatItem = ({ name, message, time, img }) => {

  const dispatch = useDispatch()

  function handleUpdateFriend(){
    dispatch(setFriend(name));
  }

  return (
    <div onClick={()=>handleUpdateFriend()} className="flex items-center p-3 hover:bg-gray-200 cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full mr-3"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-semibold">{name}</h3>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <p className="text-gray-600 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatItem;
