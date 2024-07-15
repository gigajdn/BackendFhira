const express = require('express');
const router = express.Router();
const productReviewController = require('../controllers/productReviewController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Create a new product review
router.post('/', isAuthenticated, productReviewController.createProductReview);

// Get all reviews for a product
router.get('/product/:productId', isAuthenticated, productReviewController.getProductReviewsByProductId);

// Update a product review by ID
router.put('/:id', isAuthenticated, productReviewController.updateProductReviewById);

// Delete a product review by ID
router.delete('/:id', isAuthenticated, productReviewController.deleteProductReviewById);

module.exports = router;
