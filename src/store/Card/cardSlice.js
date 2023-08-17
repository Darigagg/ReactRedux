import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  
    value: [],

}

export const CardSlice = createSlice({

    name: "cards",
    initialState,   
    reducers:{

           addCard: (state,action) => {
            state.value.push(action.payload)
           }

         
    }
    
})

export const {addCard} = CardSlice.actions
export default CardSlice.reducer    







// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { addCard } from '../favorite/favorite.slice'
// export default function СardSlice({product}) {
//     const dispatch = useDispatch()
//   return (
//     <div>
//          <button className='bg-[lightblue] w-[90px] rounded-[3px]'
//             onClick={() => dispatch(addCard(product))}>add</button>
//     </div>
//   )
// }
