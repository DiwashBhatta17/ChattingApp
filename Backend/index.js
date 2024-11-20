const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const messageRoutes = require('./Src/Routes/messageRoutes'); // Import message routes

dotenv.config(); // Load environment variables

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing for requests

// Use the message routes for API requests
app.use('/api', messageRoutes);

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
