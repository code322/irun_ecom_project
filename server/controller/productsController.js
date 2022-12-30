const db = require('../config/db');
// const Product = require('../models/Product');

//Get all products
const getAllProducts = async (req, res) => {
  try {
    // const products = await Product.find({});
    const [products] = await db.query('SELECT * FROM products');

    for (const product of products) {
      product.images = JSON.parse(product.images);
    }
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
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
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
};
