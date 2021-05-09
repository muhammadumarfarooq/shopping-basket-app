import * as React from 'react';
import './product.scss';
import { addToCart } from '../Cart/cartSlice';
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";

const Products = () => {
  const products = useAppSelector(state => state.products);
  const dispatch = useAppDispatch()
  
  return (
    <div className="container">
      <div className="products row">
        <div className="row">
          <div className="col-md-12">
            <h1 className="products--title">Products</h1>
          </div>
        </div>
        {products.map((product: productInterface) => {
          const { id, name, price, productImg, crossedPrice } = product;
          return (
            <div className="product col-lg-3 col-md-4 col-12" key={id}>
              <div className="product--inner">
                <div className="product--img-wrap">
                  <img className="product--img" src={productImg} alt={name}/>
                </div>
                
                <div className="product--content">
                  <div className="product--content-inner">
                    <p className="product--name">{name}</p>
                    <div>
                      <del className="product--price-del">${crossedPrice}</del>
                      <span className="product--price">${price}</span>
                    </div>
                    
                    <button className="product--add-to-cart-btn" onClick={() => dispatch(addToCart(product))}>Add to
                      cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Products.propTypes = {};

export default Products;
