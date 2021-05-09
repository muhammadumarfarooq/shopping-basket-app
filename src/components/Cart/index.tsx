import * as React from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { removeFromCart } from './cartSlice';

import './cart.scss';

const Cart = () => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.cart)
  const { cartProducts, subTotal, tax, total } = cart;
  
  
  return (
    <div className="container">
      <div className="cart">
        <h1 className="cart--title">Cart</h1>
        
        {!cartProducts.length && <div className="empty-cart">
          <p>Your cart is empty!</p>
        </div>}
        
        
        {cartProducts.map(cartProduct => {
          const { id, name, price, qty, productImg } = cartProduct;
          return (
            <div className="cart--content" key={id}>
              <p className="cart--product-qty">{qty}</p>
              
              <div className="cart--img-values">
                <div className="cart--img-wrap">
                  <img className="cart--img" src={productImg} alt={name}/>
                </div>
                <div>
                  <p className="cart--product-name">{name}</p>
                  <p className="cart--product-total">${price * qty}</p>
                </div>
              </div>
              <div className="cart--product-delete">
                <button className="cart--product-remove-btn" onClick={() => dispatch(removeFromCart(cartProduct))}>
                  Remove from cart
                </button>
              </div>
            </div>
          )
        })}
        
        <div className="cart--totals">
          <p className="cart--totals-text">Sub total: ${subTotal}</p>
          <p className="cart--totals-text">Tax: ${tax}</p>
          <p className="cart--totals-text">Total: ${total}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
