const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Create a new admin
router.post('/', adminController.createAdmin);

// Get all admins
router.get('/', adminController.getAllAdmins);

// Get an admin by ID
router.get('/:id', adminController.getAdminById);

// Update an admin by ID
router.put('/:id', adminController.updateAdminById);

// Delete an admin by ID
router.delete('/:id', adminController.deleteAdminById);

module.exports = router;
