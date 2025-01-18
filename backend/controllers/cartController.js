const db = require('../db');

const getCart = (req, res) => {
  const userId = req.params.userId;

  const query = `
    SELECT c.id, p.name, p.price, c.quantity 
    FROM cart c 
    INNER JOIN products p ON c.product_id = p.id 
    WHERE c.user_id = ?`;

  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).send({ message: 'Error retrieving cart', error: err });
    }
    res.status(200).send(results);
  });
};

const addToCart = (req, res) => {
  const { userId, productId, quantity } = req.body;

  const query = `
    INSERT INTO cart (user_id, product_id, quantity) 
    VALUES (?, ?, ?) 
    ON DUPLICATE KEY UPDATE quantity = quantity + ?`;

  db.query(query, [userId, productId, quantity, quantity], (err) => {
    if (err) {
      return res.status(500).send({ message: 'Error adding to cart', error: err });
    }
    res.status(201).send({ message: 'Item added to cart' });
  });
};

module.exports = { getCart, addToCart };
