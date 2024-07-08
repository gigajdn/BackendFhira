const express = require('express');
const router = express.Router();
const userNotificationController = require('../controllers/userNotificationController');

// Create a new user notification
router.post('/', userNotificationController.createUserNotification);

// Get all notifications for a user
router.get('/user/:userId', userNotificationController.getUserNotificationsByUserId);

// Delete a user notification by ID
router.delete('/:id', userNotificationController.deleteUserNotificationById);

module.exports = router;
