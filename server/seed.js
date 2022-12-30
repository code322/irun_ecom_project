const products = require('./data.js');
const db = require('./config/db.js');

const importDB = async () => {
  const sqlInsert = `INSERT INTO products(title, details, price, description, images, inStock, generalInfo, gender ) VALUES (?,?,?,?,?,?,?,? )`;

  for (const item of products) {
    const images = JSON.stringify(item.images);
    const values = [
      item.title,
      item.details,
      item.price,
      item.description,
      images,
      item.inStock,
      item.generalInfo,
      item.gender,
    ];
    await db.query(sqlInsert, values);
  }

  process.exit();
};

importDB();
