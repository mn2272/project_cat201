import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = 1; // Replace with dynamic user ID

  useEffect(() => {
    axios.get(`http://localhost:5000/api/cart/${userId}`)
      .then((response) => setCartItems(response.data))
      .catch((error) => console.error('Error fetching cart:', error));
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
