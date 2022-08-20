const express = require('express');
const router = express.Router();
const {
	getAllProducts,
	getProduct,
} = require('../controller/productsController');

// @desc GET all products from DB
// @route GET/api/products
// @ access public

router.get('/', getAllProducts);

// @desc GET a single product DB
// @route GET/api/products
// @ access public

router.get('/:id', getProduct);

module.exports = router;
