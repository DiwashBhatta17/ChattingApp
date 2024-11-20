// models/messageModel.js
const pool = require("../Config/database");

const getAllMessages = async () => {
  try {
    const [results] = await pool.query("SELECT * FROM messages"); // `results` contains the rows
    return results; // Assuming you're using PostgreSQL, `.rows` will contain the result set
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw new Error("Failed to fetch messages");
  }
};

async function getMessagesListOfUser(username) {
  try {
    const [results] = await pool.query(
      `SELECT DISTINCT friend AS contact, sent_message, sent_time
       FROM chatbuddy.messages
       WHERE username = ?
       UNION
       SELECT DISTINCT username AS contact, sent_message, sent_time
       FROM chatbuddy.messages
       WHERE friend = ?`,
      [username, username]
    );
    return results; // Return the query results
  } catch (error) {
    console.error("Error fetching messages:", error); // Log the error for debugging
    throw error; // Rethrow the error so it can be handled by the controller
  }
}

async function getChatsOfFriend(self, friend) {
  try {
    const [response] = await pool.query(
      `SELECT DISTINCT id as message_id, sent_message AS message, sent_time, 'Sent' AS status
        FROM chatbuddy.messages
        WHERE username = ? AND friend = ?
        UNION
        SELECT DISTINCT id as message_id, sent_message AS message, sent_time, 'Received' AS status
        FROM chatbuddy.messages
        WHERE username = ? AND friend = ?
        ORDER BY message_id ASC`,
        
      [self, friend, friend, self]
    );
    return response;
  } catch (error) {
    console.error("Error fetching messages:", error); // Log the error for debugging
  }
}

async function addMessages(self, friend, message){
  try {
    const [response] = await pool.query(`INSERT INTO chatbuddy.messages (username, friend, sent_message) VALUES 
       (?, ?, ?)`,[self, friend, message]);
       return response;
    
  } catch (error) {
    console.error("Error creating the message")
    
  }
}

module.exports = {
  getAllMessages,
  getMessagesListOfUser,
  getChatsOfFriend,
  addMessages,
};
