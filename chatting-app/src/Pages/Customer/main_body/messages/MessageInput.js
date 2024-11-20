import React, { useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import addMessage from "../../../../Services/Messages/addMessage"; // Import the addMessage service

const MessageInput = ({ onMessageSent }) => {
  const [message, setMessage] = useState(""); // State to store the current input message

  // Access the current friend's name from Redux
  const friend = useSelector((state) => state.counter.friend);

  // Handle input change (message)
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle sending the message on pressing Enter
  const handleKeyPress = async (e) => {
    if (e.key === "Enter" && message.trim()) {
      await sendMessage();
    }
  };

  // Function to send the message
  const sendMessage = async () => {
    try {
      const username = localStorage.getItem("username"); // Get the username from localStorage

      // Construct the message object to send to the backend
      const chatbody = {
        username: username,         // Sender username
        friend: friend,             // Receiver friend (from Redux)
        sent_message: message.trim(),  // The message typed in input
      };

      // Call the addMessage function to send the message
      await addMessage(chatbody);

      setMessage(""); // Clear the input field after sending the message

      // Trigger a callback to refresh the messages
      if (onMessageSent) {
        onMessageSent(); // If a callback is provided, it will refresh chat list or handle UI update
      }
    } catch (error) {
      console.error("Error sending message:", error); // Handle error if message sending fails
    }
  };

  return (
    <div className="flex items-center p-4 border-t border-gray-700">
      <button className="text-gray-400 hover:text-white mr-4">
        <i className="fas fa-plus"></i>
      </button>

      <input
        type="text"
        value={message}  // Bind input field value to state
        onChange={handleInputChange}  // Handle message input change
        onKeyPress={handleKeyPress}   // Send message on Enter key press
        placeholder="Type your message..."
        className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
      />

      <button
        onClick={sendMessage}  // Trigger sending message when clicking the send button
        className="text-blue-500 hover:text-blue-600 ml-4"
      >
        <i className="fas fa-thumbs-up"></i>
      </button>
    </div>
  );
};

export default MessageInput;
