const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const User = require('../models/User');

// Middleware for checking if user is authenticated
const isAuthenticated = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.id;
    next();
  });
};

// Middleware for checking if user is admin
const isAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.userId);
    if (!admin) {
      return res.status(403).json({ message: 'Require Admin Role' });
    } 
    next();
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving admin information' });
  }
};

// Middleware for checking if user is user
const isUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(403).json({ message: 'Require User Role' });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving user information' });
  }
};

module.exports = {
  isAuthenticated,
  isAdmin,
  isUser,
};
