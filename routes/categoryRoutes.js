const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Create a new category
router.post('/', isAuthenticated, categoryController.createCategory);

// Get all categories
router.get('/', isAuthenticated, categoryController.getAllCategories);

// Get a category by ID
router.get('/:id', isAuthenticated, categoryController.getCategoryById);

// Update a category by ID
router.put('/:id', isAuthenticated, categoryController.updateCategoryById);

// Delete a category by ID
router.delete('/:id', isAuthenticated, categoryController.deleteCategoryById);

module.exports = router;
