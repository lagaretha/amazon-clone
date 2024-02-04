import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cardSlice'

export default configureStore ({
    reducer: {
        cart: cartReducer
    }
})