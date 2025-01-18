import React, { useState } from "react";
import axios from "axios";

const CheckoutPage = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      ...formData,
      cartItems,
      totalPrice,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/checkout", orderData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error during checkout:", error.response?.data || error);
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name} - ${item.price.toFixed(2)} x {item.qty}</p>
          </div>
        ))}
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Shipping Information</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;