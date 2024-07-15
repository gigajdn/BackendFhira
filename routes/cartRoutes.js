const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Add product to cart
router.post('/', isAuthenticated, cartController.addProductToCart);

// Get all cart items for a user
router.get('/user/:userId', isAuthenticated, cartController.getCartItemsByUserId);

// Update cart item by ID
router.put('/:id', isAuthenticated, cartController.updateCartItemById);

// Delete cart item by ID
router.delete('/:id', isAuthenticated, cartController.deleteCartItemById);

module.exports = router;
