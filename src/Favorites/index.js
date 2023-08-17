import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../products/productCard'

export default function Favorites() {

    const favorite = useSelector(state => state.favorite.value)

  return (
    <div>

        {favorite.map(obj => <ProductCard product={obj}/>)}
    </div>
  )
}
