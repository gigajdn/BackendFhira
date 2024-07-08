const OrderItem = require('../models/OrderItem');

// Create a new order item
exports.createOrderItem = async (req, res) => {
  try {
    const orderItem = new OrderItem(req.body);
    await orderItem.save();
    res.status(201).send(orderItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all order items
exports.getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.find();
    res.status(200).send(orderItems);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get an order item by ID
exports.getOrderItemById = async (req, res) => {
  try {
    const orderItem = await OrderItem.findById(req.params.id);
    if (!orderItem) {
      return res.status(404).send();
    }
    res.status(200).send(orderItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update an order item by ID
exports.updateOrderItemById = async (req, res) => {
  try {
    const orderItem = await OrderItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!orderItem) {
      return res.status(404).send();
    }
    res.status(200).send(orderItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an order item by ID
exports.deleteOrderItemById = async (req, res) => {
  try {
    const orderItem = await OrderItem.findByIdAndDelete(req.params.id);
    if (!orderItem) {
      return res.status(404).send();
    }
    res.status(200).send(orderItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
