const pool = require('../Config/database');

function getAllUsers(){
    try {
        const response = pool.query('SELECT * FROM users_details')
        return response;
        
    } catch (error) {
        
        throw error
        
    }
}
async function createUser(username, hashedPassword, email) {
    try {
      const [result] = await pool.query(
        `INSERT INTO chatbuddy.users_details (username, password, email)
         VALUES (?, ?, ?)`,
        [username, hashedPassword, email]
      );
  
      return { id: result.insertId, username, email };
    } catch (error) {
      console.error('Error inserting user:', error);
      throw error;
    }
  }
  async function findUserByUsername(username) {
    try {
      const [results] = await pool.query(
        `SELECT * FROM users_details WHERE username = ?`,
        [username]
      );
  
      return results[0]; // Return the first result if found, or undefined if not
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    }
  }


module.exports = {
    getAllUsers,
    createUser,
    findUserByUsername,
}