// controllers/messageController.js
const { json } = require('body-parser');
const messageModel = require('../Models/messageModels'); // Import the message model



exports.getAllMessages = async (req, res) => {
    try {
      const messages = await messageModel.getAllMessages(); // Await the promise from the model
      return res.json(messages); // Send the messages as the response
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch messages' }); // Send an error if something goes wrong
    }
  };

// controllers/messageController.js

exports.getChatListByUsers = async (req, res) => {
  const { username } = req.params;  // Retrieve username from the request parameters

  try {
    const chatList = await messageModel.getMessagesListOfUser(username);
    res.status(200).json(chatList);  // Send the chat list as a JSON response
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ error: 'An error occurred while retrieving chats' });  // Send a 500 error response
  }
};

exports.getChatsOfFriend = async (req, res) => {
  const { username, friend } = req.params;
  try {
    const chats = await messageModel.getChatsOfFriend(username, friend);
    res.status(200).json(chats);  // Send the chats as a JSON response

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving chats' });
    
  }
};

exports.createMessage = async (req, res) => {
  const { username, friend, sent_message } = req.body;

  try {
    // Call the model to insert a new message
    const newMessage = await messageModel.addMessages(username, friend, sent_message);
    
    // Respond with the new message data
    res.status(201).json({ message: 'Message created successfully', data: newMessage });
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Failed to create message' });
  }
};


