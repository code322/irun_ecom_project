const Product = require('../models/Product');

//Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err,
    });
  }
};

//Get single product
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err,
    });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
};
