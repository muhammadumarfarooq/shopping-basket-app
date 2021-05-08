import * as React from 'react';
import './product.scss';
import { addToCart } from '../Cart/cartSlice';
import { useAppDispatch } from "../../redux/reduxHooks";

const index: productInterface[] = [
  { id: "1", name: "Red t-shirt", price: 5 },
  { id: "2", name: "White t-shirt", price: 10 },
  { id: "3", name: "Blue t-shirt", price: 15 },
];

const Products = () => {
  const dispatch = useAppDispatch()
  const handleAddItemToCart = (product: productInterface) => {
    dispatch(addToCart(product));
  }
  return (
    <div className="products">
      {index.map((product: productInterface) => {
        const { id, name, price } = product;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <p>{price}</p>
            <button onClick={() => handleAddItemToCart(product)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

Products.propTypes = {};

export default Products;
