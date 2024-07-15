const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Create a new order item
router.post('/', isAuthenticated, orderItemController.createOrderItem);

// Get all order items
router.get('/', isAuthenticated, orderItemController.getAllOrderItems);

// Get an order item by ID
router.get('/:id', isAuthenticated, orderItemController.getOrderItemById);

// Update an order item by ID
router.put('/:id', isAuthenticated, orderItemController.updateOrderItemById);

// Delete an order item by ID
router.delete('/:id', isAuthenticated, orderItemController.deleteOrderItemById);

module.exports = router;
