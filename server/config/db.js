require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('connected to the database');
	} catch (error) {
		console.log(`DB connection failed : ${error}`);
		process.exit(1);
	}
};

module.exports = connectDB;
