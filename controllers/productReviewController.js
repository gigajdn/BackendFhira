const ProductReview = require('../models/ProductReview');

// Create a new product review
exports.createProductReview = async (req, res) => {
  try {
    const productReview = new ProductReview(req.body);
    await productReview.save();
    res.status(201).send(productReview);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all reviews for a product
exports.getProductReviewsByProductId = async (req, res) => {
  try {
    const productReviews = await ProductReview.find({ product_id: req.params.productId });
    res.status(200).send(productReviews);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a product review by ID
exports.updateProductReviewById = async (req, res) => {
  try {
    const productReview = await ProductReview.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!productReview) {
      return res.status(404).send();
    }
    res.status(200).send(productReview);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a product review by ID
exports.deleteProductReviewById = async (req, res) => {
  try {
    const productReview = await ProductReview.findByIdAndDelete(req.params.id);
    if (!productReview) {
      return res.status(404).send();
    }
    res.status(200).send(productReview);
  } catch (error) {
    res.status(500).send(error);
  }
};
