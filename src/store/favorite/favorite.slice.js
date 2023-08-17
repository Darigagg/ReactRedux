import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  
    value: [],

}

export const favoriteSlice = createSlice({

    name: "favorites",
    initialState,   
    reducers:{

        addFavorites: (state, action) => {
            if(!state.value.some(obj => obj.id === action.payload.id)){
                state.value.push(action.payload)
            }
            else{
                state.value = state.value.filter(obj => obj.id === action.payload.id)
            }
           },

           addCard: (state,action) => {
            state.value.push(action.payload)
           }

         
    }
    
})

export const {addFavorites, addCard} = favoriteSlice.actions
export default favoriteSlice.reducer    