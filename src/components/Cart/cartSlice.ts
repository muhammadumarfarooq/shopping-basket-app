import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'


const TAX_RATE = 0.05;

// Define a type for the slice state
interface cartInitialStateInterface {
  cartProducts: cartProductInterface[],
  subTotal: number,
  tax: number,
  total: number
}

// Define the initial state using that type
const initialState: cartInitialStateInterface = {
  cartProducts: [],
  subTotal: 0,
  tax: 0,
  total: 0
}

interface ActionInterface {
  type: string
  payload: productInterface
}


const handleAddToCart = (state: cartInitialStateInterface, action: ActionInterface) => {
  const updatedCartProduct = [...state.cartProducts, action.payload];
  const subTotal = updatedCartProduct.reduce((prev, curr) => {
    return prev + curr.price
  }, 0)
  
  const tax = subTotal * TAX_RATE;
  
  state.cartProducts = updatedCartProduct;
  state.subTotal = subTotal;
  state.tax = tax;
  state.total = subTotal + tax;
}
const handleRemoveFromCart = (state: cartInitialStateInterface, action: ActionInterface) => {
  console.log(action);
}


export const counterSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action) => {
      handleAddToCart(state, action)
    },
    removeFromCart: (state, action) => {
      handleRemoveFromCart(state, action)
    },
  },
})

export const { addToCart, removeFromCart } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
