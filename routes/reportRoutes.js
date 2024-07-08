const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Create a new report
router.post('/', reportController.createReport);

// Get all reports
router.get('/', reportController.getAllReports);

// Get a report by ID
router.get('/:id', reportController.getReportById);

// Update a report by ID
router.put('/:id', reportController.updateReportById);

// Delete a report by ID
router.delete('/:id', reportController.deleteReportById);

module.exports = router;
