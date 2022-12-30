const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  })
  .promise();

module.exports = db;
