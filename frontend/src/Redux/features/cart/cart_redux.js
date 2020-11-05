import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
const itemsCart = Cookie.getJSON("itemsCart") || []; 
const shippingInfo = Cookie.getJSON("shippingInfo") || {}
// console.log(itemsCart)
let initialState = {
    cartItems: itemsCart,
    adding: false,
    removing: false,
    shippingInit: false,
    shipping: [],
    paymentInit: false,
    payment: {},
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCartStart: (state) => {
            state.adding = true;
        },
        addToCart: (state, {payload}) => {
            try {
                const item = payload;
                const product = state.cartItems.find(pItem => pItem.id === item.id);
                if(product){
                    const fDt = state.cartItems.map(pItem => pItem.id === product.id ? item : pItem)
                    state.cartItems = fDt
                } else{
                    state.cartItems = [...state.cartItems, item]
                }
                state.adding = false;
            } catch (error) {
                console.log(error)
            }
           
        },
        removeFromCartStart: (state) => {
            state.removing = true;
        },
        removeItemFromCart: (state, {payload}) => {
            console.log(payload)
            state.cartItems = state.cartItems.filter(pItem => pItem.id !== payload);
            state.removing = false;
        },
        cartSaveShippingInit: (state) => {
            state.shippingInit = true
        },
        cartSaveShipping: (state, {payload}) => {
            state.shippingInit = false
            state.shipping = payload
        },
        cartSavePaymentInit: (state) => {
            state.paymentInit = true;
        },
        cartSavePayment: (state, {payload}) => {
            state.paymentInit = false;
            state.payment = payload;
        },
        cartEmpty: (state) => {
            state.cartItems = [];
        },
    }
})

export const {  addToCart, 
                addToCartStart, 
                removeFromCartStart, 
                removeItemFromCart, 
                cartSaveShipping, 
                cartSaveShippingInit, 
                cartSavePaymentInit, 
                cartSavePayment,
                cartEmpty 
                                } = cartSlice.actions
export default cartSlice.reducer