const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
  report_type: { type: String, required: true },
  data: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);
