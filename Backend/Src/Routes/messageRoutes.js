// routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const messageController = require('../Controllers/messageController');
const userController = require('../Controllers/usersController');

// Routes of the messages
// router.post('/add', messageController.createMessage);
router.get('/get', messageController.getAllMessages);
router.get('/getFriendList/:username', messageController.getChatListByUsers);
router.get('/getChatList/:username/:friend', messageController.getChatsOfFriend);
router.post('/addMessage', messageController.createMessage);
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);



// router.get('/:id', messageController.getMessageById);
// router.put('/:id', messageController.updateMessage);
// router.delete('/:id', messageController.deleteMessage);

// Routes for the users

router.get('/getUsers', userController.getAllUsers);



module.exports = router;
