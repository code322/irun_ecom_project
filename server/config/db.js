require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB;
const connectDB = async () => {
  try {
    mongoose.connect(url, {
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
