const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Create a new order
router.post('/', isAuthenticated, orderController.createOrder);

// Get all orders
router.get('/', isAuthenticated, orderController.getAllOrders);

// Get an order by ID
router.get('/:id', isAuthenticated, orderController.getOrderById);

// Update an order by ID
router.put('/:id', isAuthenticated, orderController.updateOrderById);

// Delete an order by ID
router.delete('/:id', isAuthenticated, orderController.deleteOrderById);

module.exports = router;
