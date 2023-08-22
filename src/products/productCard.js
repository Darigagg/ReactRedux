import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorites } from '../store/favorite/favorite.slice'
import { addToCart } from '../store/Cart/cartSlice'
import { IoMdCart } from 'react-icons/io'

 function ProductCard({product}) {

    const favorites = useSelector(state => state.favorite.value)
    const isFav = favorites.some(obj => obj.id === product.id)
    const dispatch = useDispatch()

  return (
    <div>
       <div className='product' key={product.id}>
            <div className='main'>
              <div>
                <p className='gad'>{product.main}</p>
              </div>
              <div className='image1-2'>
                <button onClick={() => dispatch( addFavorites(product))}>{isFav ? "Х" : "O"}</button> 
                <button 
            onClick={() => dispatch(addToCart(product))}><IoMdCart className='text-lg'/></button>
              </div>
            </div>
            <img className='image' src={product.image}/>
         
            <h3 className='title'>{product.title}</h3>
            <p className='price'>{product.price}</p>

          </div>
      </div>
  )
}

export default ProductCard