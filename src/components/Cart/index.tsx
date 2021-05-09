import * as React from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { removeFromCart } from './cartSlice';


const Cart = () => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.cart)
  const { cartProducts, subTotal, tax, total } = cart;
  
  return (
    <div className="cart">
      <h1>Products</h1>
      {cartProducts.map(cartProduct => {
        const { id, name, price, qty } = cartProduct;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h3>{price * qty}</h3>
            <h3>{qty}</h3>
            
            <button onClick={() => dispatch(removeFromCart(cartProduct))}>Remove from cart</button>
          </div>
        )
      })}
      <h2>Sub total: {subTotal}</h2>
      <h2>Tax: {tax}</h2>
      <h2>Total: {total}</h2>
    </div>
  );
}

export default Cart;
