const express = require('express');
const router = express.Router();
const productImageController = require('../controllers/productImageController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Add an image to a product
router.post('/', isAuthenticated, productImageController.addImageToProduct);

// Get all images for a product
router.get('/product/:productId', isAuthenticated, productImageController.getProductImagesByProductId);

// Delete an image by ID
router.delete('/:id', isAuthenticated, productImageController.deleteProductImageById);

module.exports = router;
