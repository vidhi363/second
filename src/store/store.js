import { configureStore } from '@reduxjs/toolkit'
import cart from '../slice/cartslice'

export default configureStore({
  reducer: {
    managecart:cart,
  }
})