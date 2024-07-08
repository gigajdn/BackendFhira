const express = require('express');
const router = express.Router();
const productImageController = require('../controllers/productImageController');

// Add an image to a product
router.post('/', productImageController.addImageToProduct);

// Get all images for a product
router.get('/product/:productId', productImageController.getProductImagesByProductId);

// Delete an image by ID
router.delete('/:id', productImageController.deleteProductImageById);

module.exports = router;
