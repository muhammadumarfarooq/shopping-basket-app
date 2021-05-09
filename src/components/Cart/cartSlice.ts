import { createSlice } from '@reduxjs/toolkit'

const TAX_RATE = 0.05;

// Define a type for the slice state
interface cartStateInterface {
  cartProducts: productInterface[],
  subTotal: number,
  tax: number,
  total: number
}

// Define the initial state using that type
const initialState: cartStateInterface = {
  cartProducts: [],
  subTotal: 0,
  tax: 0,
  total: 0
}

interface ActionInterface {
  type: string
  payload: productInterface
}


const handleCalculateCartTotals = (state: cartStateInterface, updatedCartProduct: productInterface[]) => {
  const subTotal = updatedCartProduct.reduce((prev, curr) => {
    const total = curr.price * curr.qty
    return prev + total
  }, 0)
  
  const tax = subTotal * TAX_RATE;
  state.cartProducts = updatedCartProduct;
  state.subTotal = subTotal;
  state.tax = tax;
  state.total = subTotal + tax;
}

const handleAddToCart = (state: cartStateInterface, action: ActionInterface) => {
  const cartProducts = state.cartProducts;
  const isItemAlreadyAvailableInCart = cartProducts.some(cartProduct => cartProduct.id === action.payload.id);
  if ( isItemAlreadyAvailableInCart ) {
    handleUpdateFromCart(state, action)
  } else {
    const updatedCartProducts = [...state.cartProducts, action.payload];
    handleCalculateCartTotals(state, updatedCartProducts);
  }
}
const handleRemoveFromCart = (state: cartStateInterface, action: ActionInterface) => {
  const cartProducts = state.cartProducts;
  const updatedCartProducts = cartProducts.filter(cartProduct => cartProduct.id !== action.payload.id);
  handleCalculateCartTotals(state, updatedCartProducts)
}

const handleUpdateFromCart = (state: cartStateInterface, action: ActionInterface) => {
  const cartProducts = state.cartProducts;
  const updatedCartProducts = cartProducts.map(cartProduct => {
    if ( cartProduct.id === action.payload.id ) {
      return { ...cartProduct, qty: cartProduct.qty + 1 }
    }
    return cartProduct;
  });
  handleCalculateCartTotals(state, updatedCartProducts)
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


export default counterSlice.reducer
