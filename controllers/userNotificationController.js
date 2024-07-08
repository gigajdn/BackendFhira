const UserNotification = require('../models/UserNotification');

// Create a new user notification
exports.createUserNotification = async (req, res) => {
  try {
    const userNotification = new UserNotification(req.body);
    await userNotification.save();
    res.status(201).send(userNotification);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all notifications for a user
exports.getUserNotificationsByUserId = async (req, res) => {
  try {
    const userNotifications = await UserNotification.find({ user_id: req.params.userId });
    res.status(200).send(userNotifications);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete a user notification by ID
exports.deleteUserNotificationById = async (req, res) => {
  try {
    const userNotification = await UserNotification.findByIdAndDelete(req.params.id);
    if (!userNotification) {
      return res.status(404).send();
    }
    res.status(200).send(userNotification);
  } catch (error) {
    res.status(500).send(error);
  }
};
