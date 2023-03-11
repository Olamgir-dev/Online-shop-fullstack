import {createSlice} from "@reduxjs/toolkit"

const glassesSlice = createSlice({
  name: 'glasses',
  initialState: {isGlases:false},
  reducers: {
    setGlasses: (state, action) => {
      state.isGlases = action.payload
    },
  },
})

export const {setGlasses} = glassesSlice.actions
export default glassesSlice.reducer