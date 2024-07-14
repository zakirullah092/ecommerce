import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../features/cartSlice';
import './Cart.css';

function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <p>${item.price}</p>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
