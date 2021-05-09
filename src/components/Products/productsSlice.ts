import { createSlice } from '@reduxjs/toolkit'
import img1 from '../../assets/products-images/product_3-300x300.png';
import img2 from '../../assets/products-images/product_11-300x300.png';
import img3 from '../../assets/products-images/product_12-300x300.png';
import img4 from '../../assets/products-images/product_13-300x300.png';


const products: productInterface[] = [
  { id: "1", name: "Red t-shirt", price: 5, qty: 1, crossedPrice: 7, productImg: img1 },
  { id: "2", name: "White t-shirt", price: 10, qty: 1, crossedPrice: 13, productImg: img2 },
  { id: "3", name: "Blue t-shirt", price: 15, qty: 1, crossedPrice: 20, productImg: img3 },
  { id: "4", name: "Blue t-shirt", price: 25, qty: 1, crossedPrice: 25, productImg: img4 },
];

// Define the initial state using that type
const initialState: productInterface[] = products

export const counterSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
})

// export const {} = counterSlice.actions

export default counterSlice.reducer
