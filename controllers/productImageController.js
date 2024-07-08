const ProductImage = require('../models/ProductImage');

// Add an image to a product
exports.addImageToProduct = async (req, res) => {
  try {
    const productImage = new ProductImage(req.body);
    await productImage.save();
    res.status(201).send(productImage);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all images for a product
exports.getProductImagesByProductId = async (req, res) => {
  try {
    const productImages = await ProductImage.find({ product_id: req.params.productId });
    res.status(200).send(productImages);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete an image by ID
exports.deleteProductImageById = async (req, res) => {
  try {
    const productImage = await ProductImage.findByIdAndDelete(req.params.id);
    if (!productImage) {
      return res.status(404).send();
    }
    res.status(200).send(productImage);
  } catch (error) {
    res.status(500).send(error);
  }
};
