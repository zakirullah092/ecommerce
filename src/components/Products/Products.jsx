// src/components/Products.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/productsSlice';
import { addToCart } from '../../features/cartSlice';
import './Products.css';

function Products() {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Store</h1>
          <p>Discover the best products for you</p>
        </div>
      </section>
      <div className="product-list">
        {status === 'loading' && <div>Loading ...</div>}
        {status === 'failed' && <p>{error}</p>}
        {status === 'succeeded' && products.map((item) => (
          <div key={item.id} className="product-container">
            <img src={item.images[0]} alt={item.title} />
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
            <p>{item.description}</p>
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
