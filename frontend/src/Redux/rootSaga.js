import {  all } from 'redux-saga/effects'
import { rootCartSaga } from './features/cart/cart_saga'
import { watchFetchCarDetails } from './features/fetchCarDetails/fetchCarDetails-saga'
import { watchFetchCars } from './features/fetchCarsProducts/fetchCars-saga'
import { rootUserSaga } from './features/user/user-saga'
import {rootProductsaga} from './features/product/product_saga'
import { createOrderRootSaga } from './features/order/order-saga'

export default function* rootSaga(){
    yield all([
        watchFetchCars(),
        watchFetchCarDetails(),
        rootCartSaga(),
        rootUserSaga(),
        rootProductsaga(),
        createOrderRootSaga(),
        
    ])
}