const db = require('../config/db');

//Get all products
const getAllProducts = async (req, res) => {
  try {
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
  const id = req.params.id;
  try {
    const [data] = await db.query('SELECT * FROM products WHERE _id=?', [id]);
    let result = data[0];
    result.images = JSON.parse(result.images);
    res.status(200).json(result);
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
