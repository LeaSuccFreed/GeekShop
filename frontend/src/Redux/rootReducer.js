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
import orderPaySlice from './features/order/orderPaySlice'
import userOrderListSlice from './features/order/userOrderListSlice'
import userDetailsSlice from './features/user/userDetailsSlice'
import userUpdateProfileSlice from './features/user/userUpdateProfileSlice'
import orderListSlice from './features/order/orderListSlice'
import orderDeleteSlice from './features/order/orderDeleteSlice'
import orderDeliverSlice from './features/order/orderDeliverSlice'
import filterProductSlice from './features/product/filterProductSlice'

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
    orderPay: orderPaySlice,
    userOrderList: userOrderListSlice,
    userDetails: userDetailsSlice,
    userUpdateProfile: userUpdateProfileSlice,
    ordersList: orderListSlice,
    orderDelete: orderDeleteSlice,
    orderDeliver: orderDeliverSlice,
    filterProducts: filterProductSlice,
})

export default rootReducer