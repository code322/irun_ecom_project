require('dotenv').config;

const Product = require('./models/Product');
const productData = require('./data/productsData');
const connectDB = require('./config/db');

connectDB();

const importData = async () => {
	try {
		await Product.deleteMany({});
		await Product.insertMany(productData);
		console.log('Data imported success');
		process.exit();
	} catch (error) {
		console.log(`There is error with data import : ${error}`);
		process.exit();
	}
};

importData();
