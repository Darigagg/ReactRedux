import React from 'react';
import './index.css';
import Products from './products';
import Favorites from './Favorites';
import Cart from './store/Cart';
import cartSlice from './store/Cart';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Cart/>
      <cartSlice/>
        <p>
          <Link to='products'>Products</Link>
        </p>
        <p>
          <Link to='favorites'>Favorites</Link>
        </p>
        <Routes>

          <Route path='products' element={<Products/>}/>
          <Route path='favorites' element={<Favorites/>}/>

        </Routes>

     </div>
  )
}

export default App;

