import { combineReducers } from 'redux'
import  fetchCarsSliceReducer  from './features/fetchCarsProducts/fetchCars'
import fetchCarDetailsReducer from './features/fetchCarDetails/fetchCarDetails'
import addCartItemsReducer from './features/cart/cart_redux'
import signinSlice from './features/user/signinSlice'
import registerSlice from './features/user/registerSlice'
import createProductSlice from './features/product/createProductslice'
import productDeleteSlice from './features/product/deleteProductSlice'
import createOrderSlice from './features/order/orderSlice'
import orderDetailsSlice from './features/order/orderDetailSlice'

const rootReducer = combineReducers({
    fetchCars: fetchCarsSliceReducer,
    fatchCarDetails: fetchCarDetailsReducer,
    cart: addCartItemsReducer,
    signin: signinSlice,
    register: registerSlice,
    productSave: createProductSlice,
    productDelete: productDeleteSlice,
    orderCreate: createOrderSlice,
    orderDetails: orderDetailsSlice,
})

export default rootReducer