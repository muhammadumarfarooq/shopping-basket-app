import * as React from 'react';
import { useAppSelector } from "../../redux/reduxHooks";

const Cart = () => {
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
