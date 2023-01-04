const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const productsRoute = require('./routes/productsRoute');
const usersRoutes = require('./routes/usersRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  cookieParser());

const PORT = process.env.PORT || 5000;

app.use('/api/products', productsRoute);
app.use('/api/auth', usersRoutes);

app.get('/', (req, res) => {
  res.send('this is home route');
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
