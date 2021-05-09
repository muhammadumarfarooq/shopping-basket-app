import * as React from 'react';
import './product.scss';
import { addToCart } from '../Cart/cartSlice';
import { useAppDispatch } from "../../redux/reduxHooks";

const index: productInterface[] = [
  { id: "1", name: "Red t-shirt", price: 5, qty: 1 },
  { id: "2", name: "White t-shirt", price: 10, qty: 1 },
  { id: "3", name: "Blue t-shirt", price: 15, qty: 1 },
];

const Products = () => {
  const dispatch = useAppDispatch()
  
  return (
    <div className="products">
      {index.map((product: productInterface) => {
        const { id, name, price } = product;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <p>{price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

Products.propTypes = {};

export default Products;
