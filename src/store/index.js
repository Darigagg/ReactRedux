import { configureStore } from '@reduxjs/toolkit'
import favoriteSlice from './favorite/favorite.slice'

export const store = configureStore({

  reducer: {

    favorite: favoriteSlice

  },

})