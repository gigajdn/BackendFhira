const express = require('express');
const router = express.Router();
const trackingController = require('../controllers/trackingController');

// Create a new tracking
router.post('/', trackingController.createTracking);

// Get all tracking records
router.get('/', trackingController.getAllTracking);

// Get tracking by order ID
router.get('/order/:orderId', trackingController.getTrackingByOrderId);

// Update tracking by ID
router.put('/:id', trackingController.updateTrackingById);

// Delete tracking by ID
router.delete('/:id', trackingController.deleteTrackingById);

module.exports = router;
