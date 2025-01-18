import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <Carousel media={products.map((product) => ({ url: product.image_url, type: 'image' }))} />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
