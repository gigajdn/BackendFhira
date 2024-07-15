const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { isAuthenticated, isUser } = require('../middlewares/authMiddleware');

// Create a new user
router.post('/', isAuthenticated, isUser, userController.createUser);

// Get all users
router.get('/', isAuthenticated, isUser, userController.getAllUsers);

// Get a user by ID
router.get('/:id', isAuthenticated, isUser, userController.getUserById);

// Update a user by ID
router.put('/:id', isAuthenticated, isUser, userController.updateUserById);

// Delete a user by ID
router.delete('/:id', isAuthenticated, isUser, userController.deleteUserById);

module.exports = router;
