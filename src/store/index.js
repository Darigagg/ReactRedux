import { configureStore } from '@reduxjs/toolkit'
import favoriteSlice from './favorite/favorite.slice'
import cartSlice from './Cart/cartSlice'

export const store = configureStore({

  reducer: {

    favorite: favoriteSlice,
    cart: cartSlice

  },

})