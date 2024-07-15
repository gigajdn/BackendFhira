const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Create a new product
router.post('/', isAuthenticated, productController.createProduct);

// Get all products
router.get('/', isAuthenticated, productController.getAllProducts);

// Get a product by ID
router.get('/:id', isAuthenticated, productController.getProductById);

// Update a product by ID
router.put('/:id', isAuthenticated, productController.updateProductById);

// Delete a product by ID
router.delete('/:id', isAuthenticated, productController.deleteProductById);

module.exports = router;
