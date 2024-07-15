const express = require('express');
const router = express.Router();
const trackingController = require('../controllers/trackingController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Create a new tracking
router.post('/', isAuthenticated, trackingController.createTracking);

// Get all tracking records
router.get('/', isAuthenticated, trackingController.getAllTracking);

// Get tracking by order ID
router.get('/order/:orderId', isAuthenticated, trackingController.getTrackingByOrderId);

// Update tracking by ID
router.put('/:id', isAuthenticated, trackingController.updateTrackingById);

// Delete tracking by ID
router.delete('/:id', isAuthenticated, trackingController.deleteTrackingById);

module.exports = router;
