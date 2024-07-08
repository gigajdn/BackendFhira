const Report = require('../models/Report');

// Create a new report
exports.createReport = async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.status(201).send(report);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all reports
exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).send(reports);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a report by ID
exports.getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).send();
    }
    res.status(200).send(report);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a report by ID
exports.updateReportById = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!report) {
      return res.status(404).send();
    }
    res.status(200).send(report);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a report by ID
exports.deleteReportById = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) {
      return res.status(404).send();
    }
    res.status(200).send(report);
  } catch (error) {
    res.status(500).send(error);
  }
};
