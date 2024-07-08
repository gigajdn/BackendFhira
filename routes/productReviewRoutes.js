const express = require('express');
const router = express.Router();
const productReviewController = require('../controllers/productReviewController');

// Create a new product review
router.post('/', productReviewController.createProductReview);

// Get all reviews for a product
router.get('/product/:productId', productReviewController.getProductReviewsByProductId);

// Update a product review by ID
router.put('/:id', productReviewController.updateProductReviewById);

// Delete a product review by ID
router.delete('/:id', productReviewController.deleteProductReviewById);

module.exports = router;
