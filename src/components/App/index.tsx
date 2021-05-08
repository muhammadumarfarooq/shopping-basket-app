import React from 'react';
import './app.scss';
import Products from "../Products";
import Cart from "../Cart";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Shopping Basket</h1>
      <Products/>
      <Cart/>
    </div>
  );
}

export default App;
