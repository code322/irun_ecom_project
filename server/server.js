const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const corsOptions = require('./config/corsOptions.js');
const { allowedOrigins } = require('./config/allowedOrigins.js');
const dotenv = require('dotenv');
dotenv.config();

const productsRoute = require('./routes/productsRoute');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);

  const origin = req.get('origin');
  console.log(origin);
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  next();
});

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use('/api/products', productsRoute);
app.use('/api/auth', usersRoutes);

app.get('/', (req, res) => {
  res.send('this is home route');
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
