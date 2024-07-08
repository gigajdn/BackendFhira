const Cart = require('../models/Cart');

// Add product to cart
exports.addProductToCart = async (req, res) => {
  try {
    const cartItem = new Cart(req.body);
    await cartItem.save();
    res.status(201).send(cartItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all cart items for a user
exports.getCartItemsByUserId = async (req, res) => {
  try {
    const cartItems = await Cart.find({ user_id: req.params.userId });
    res.status(200).send(cartItems);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update cart item by ID
exports.updateCartItemById = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!cartItem) {
      return res.status(404).send();
    }
    res.status(200).send(cartItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete cart item by ID
exports.deleteCartItemById = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);
    if (!cartItem) {
      return res.status(404).send();
    }
    res.status(200).send(cartItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
