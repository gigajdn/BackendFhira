const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  status: { type: String, required: true },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tracking', trackingSchema);
