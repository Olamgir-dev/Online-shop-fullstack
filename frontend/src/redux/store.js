import { configureStore } from "@reduxjs/toolkit";
import productSlice from './reducers/AllPrudactRedusers'
import glassesSlice from './reducers/glasses'
export const store = configureStore({
  reducer: {
    products: productSlice,
    glasses:glassesSlice
  }
})