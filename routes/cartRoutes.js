const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Add product to cart
router.post('/', cartController.addProductToCart);

// Get all cart items for a user
router.get('/user/:userId', cartController.getCartItemsByUserId);

// Update cart item by ID
router.put('/:id', cartController.updateCartItemById);

// Delete cart item by ID
router.delete('/:id', cartController.deleteCartItemById);

module.exports = router;
