const mongoose = require('mongoose');

const userNotificationSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserNotification', userNotificationSchema);
