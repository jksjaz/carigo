import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/ProductSlice'
import headerReducer from './slices/HeaderSlice'

export default configureStore({
  reducer: {
      product: productReducer,
      header: headerReducer
  }
})