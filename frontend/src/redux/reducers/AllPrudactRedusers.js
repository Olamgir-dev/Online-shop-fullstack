import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: 'products',
  initialState: { array: []},
  reducers: {
    setProducts: (state, action) => {
      state.array = action.payload
    },
  },
})

export const {setProducts} = productSlice.actions

export default productSlice.reducer