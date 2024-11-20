import React from "react";

const MessageItem = ({ messages, showDate }) => {
  const isYou = messages.status === "Sent"; // Identifies if the message is from "you"

  return (
    <>
      {/* Centered date/time if showDate is true */}
      {showDate && (
        <div className="flex justify-center my-2">
          <span className="text-gray-400 text-sm">{messages.date}</span>
        </div>
      )}

      {/* Message Item */}
      <div className={`flex ${isYou ? "justify-end" : "justify-start"} mb-4`}>
        {/* Avatar for the other user */}
        {!isYou && (
          <img
            src="path-to-other-user-avatar.jpg" // Replace with actual avatar path
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-3" // User avatar
          />
        )}

        {/* Message bubble */}
        <div
          className={`max-w-xs p-3 rounded-2xl ${
            isYou ? "bg-blue-600 text-white rounded-br-none" : "bg-gray-700 text-white rounded-bl-none"
          }`}
        >
          <p>{messages.message}</p>

          {/* Message time/timestamp */}
          {messages.sent_time && (
            <p className="text-xs mt-1 text-gray-400">
              {messages.sent_time}
            </p>
          )}
        </div>

        {/* Optional "you" avatar (can be hidden or shown) */}
        {isYou && (
          <img
            src="path-to-your-avatar.jpg" // Replace with actual avatar path
            alt="Avatar"
            className="w-8 h-8 rounded-full ml-3" // "You" avatar
          />
        )}
      </div>
    </>
  );
};

export default MessageItem;
