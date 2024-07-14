import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar() {
  const { items } = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">E-Commerce</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-link">
            Cart 
            {items.length > 0 && <span className="cart-count">{items.length}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
