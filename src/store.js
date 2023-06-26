import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/WishListSlice";



export default configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})

