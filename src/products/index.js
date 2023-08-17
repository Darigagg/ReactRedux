import React, { useState, useEffect } from 'react';
import ProductCard from './productCard';
function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://6495295ab08e17c91791b107.mockapi.io/users')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);
 
function handle(event){
setSearch(event.target.value.toLowerCase())
}




const Filter = () => {
  return products.filter((product) => {
    let word = product.title.toLowerCase();
    return word.includes(search);
  });
};

 const filt =  Filter()
  return (
    <div className='container'>
      <div className='input'>
      <input type="text" placeholder="Найти продукт..." onChange={handle} />
      </div>
      <h2>Featured Products</h2>
      <div className='row'>
        {filt.map((product) => (
         <ProductCard product= {product}/>
        ))}
      </div>
    </div>
  );
}

export default Products;