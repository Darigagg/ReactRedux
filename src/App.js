import React from 'react';
import './index.css';
import Products from './products';
import Favorites from './Favorites';
import Card from './store/Card';
import СardSlice from './store/Card';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Card/>
      <СardSlice/>
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

