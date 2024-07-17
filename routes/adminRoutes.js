const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');

// Create a new admin
router.post('/', adminController.createAdmin);

// Get all admins
router.get('/', isAuthenticated, isAdmin, adminController.getAllAdmins);

// Get an admin by ID
router.get('/:id', isAuthenticated, isAdmin, adminController.getAdminById);

// Update an admin by ID
router.put('/:id', isAuthenticated, isAdmin, adminController.updateAdminById);

// Delete an admin by ID
router.delete('/:id', isAuthenticated, isAdmin, adminController.deleteAdminById);

module.exports = router;
