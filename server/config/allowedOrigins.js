const dotenv = require('dotenv');

dotenv.config();

module.exports.allowedOrigins = [process.env.ORIGIN_DOMAIN.CLIENT_NETLIFY, process.env.ORIGIN_DOMAIN, 'http://localhost:3000'];
