const db = require('../db');

const getProducts = (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ message: 'Error retrieving products', error: err });
    }
    res.status(200).send(results);
  });
};

const addProduct = (req, res) => {
  const { name, description, price, mediaPath } = req.body;

  const query = 'INSERT INTO products (name, description, price, media_path) VALUES (?, ?, ?, ?)';
  db.query(query, [name, description, price, mediaPath], (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error adding product', error: err });
    }
    res.status(201).send({ message: 'Product added successfully' });
  });
};

module.exports = { getProducts, addProduct };
