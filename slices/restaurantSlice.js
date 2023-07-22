import { createSlice } from '@reduxjs/toolkit'

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant: null,
  },
  reducers: {
 setRestaurant: (state, action)=>{
    state.value += action.payload
 }
  }
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSliceSlice.actions

export default restaurantSlice.reducer