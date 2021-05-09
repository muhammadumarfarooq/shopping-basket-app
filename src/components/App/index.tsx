import React from 'react';
import './app.scss';
import Products from "../Products";
import Cart from "../Cart";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <h2>Shopping Basket</h2>
      </nav>
      <Products/>
      <Cart/>
    </div>
  );
}

export default App;
