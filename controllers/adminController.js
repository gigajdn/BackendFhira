const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');

// Create a new admin
exports.createAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const newAdmin = new Admin({ username, email, password: hashedPassword });
    await newAdmin.save();
    res.status(201).send(newAdmin);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).send(admins);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get an admin by ID
exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).send();
    }
    res.status(200).send(admin);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update an admin by ID
exports.updateAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!admin) {
      return res.status(404).send();
    }
    res.status(200).send(admin);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an admin by ID
exports.deleteAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.status(404).send();
    }
    res.status(200).send(admin);
  } catch (error) {
    res.status(500).send(error);
  }
};
