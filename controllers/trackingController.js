const Tracking = require('../models/Tracking');

// Create a new tracking
exports.createTracking = async (req, res) => {
  try {
    const tracking = new Tracking(req.body);
    await tracking.save();
    res.status(201).send(tracking);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all tracking records
exports.getAllTracking = async (req, res) => {
  try {
    const tracking = await Tracking.find();
    res.status(200).send(tracking);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get tracking by order ID
exports.getTrackingByOrderId = async (req, res) => {
  try {
    const tracking = await Tracking.find({ order_id: req.params.orderId });
    res.status(200).send(tracking);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update tracking by ID
exports.updateTrackingById = async (req, res) => {
  try {
    const tracking = await Tracking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!tracking) {
      return res.status(404).send();
    }
    res.status(200).send(tracking);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete tracking by ID
exports.deleteTrackingById = async (req, res) => {
  try {
    const tracking = await Tracking.findByIdAndDelete(req.params.id);
    if (!tracking) {
      return res.status(404).send();
    }
    res.status(200).send(tracking);
  } catch (error) {
    res.status(500).send(error);
  }
};
