const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.get('/', (req, res) => {
	res.send('this is home route');
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
