import productList from '../product.json';



const { createSlice } = require("@reduxjs/toolkit");

let cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartProductIds:[]
    },
    reducers:{
        addToCart(state,action){
            state.cartProductIds = [action.payload,...state.cartProductIds]
        },
        removeToCart(state,action){
            const indexOfId = state.cartProductIds.indexOf(action.payload);
            state.cartProductIds.splice(indexOfId,1)
        },
        clearToCart(state){
            state.cartProductIds = []
        }
    }
})

export let {addToCart,removeToCart,clearToCart,sortTo} = cartSlice.actions;


export default cartSlice;