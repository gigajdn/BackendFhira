const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Create a new report
router.post('/', isAuthenticated, reportController.createReport);

// Get all reports
router.get('/', isAuthenticated, reportController.getAllReports);

// Get a report by ID
router.get('/:id', isAuthenticated, reportController.getReportById);

// Update a report by ID
router.put('/:id', isAuthenticated, reportController.updateReportById);

// Delete a report by ID
router.delete('/:id', isAuthenticated, reportController.deleteReportById);

module.exports = router;
