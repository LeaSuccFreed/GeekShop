import Axios from 'axios'
import { all, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { addToCart, cartSavePayment, cartSaveShipping, removeItemFromCart } from './cart_redux'
import Cookie from "js-cookie"

//Selector
const getCart = state => state.cart

////Worker Sagas////
function* addToCartWorker({payload}){
    const {data} = yield Axios.get(`/api/products/${payload.id}`)
    const dt = {
        id: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty: payload.qty
    }
    
    yield put(addToCart(dt));
    const {cartItems} = yield select(getCart)
    Cookie.set('itemsCart', JSON.stringify(cartItems))
}

function* removeItemFromCartWorker({payload}){
    yield put(removeItemFromCart(payload))
    const {cartItems} = yield select(getCart)
    Cookie.set('itemsCart', JSON.stringify(cartItems))
}

function* saveShippingWorker({payload}){
    yield put(cartSaveShipping(payload))
    const {shipping} = yield select(getCart)
    Cookie.set('shippingInfo', JSON.stringify(shipping))
}

function* savePaymentMethod({payload}){
    yield put(cartSavePayment(payload))
}

////Watcher Sagas////
export function* watchAddToCart(){
    yield takeLatest('cart/addToCartStart', addToCartWorker)
}

export function* watchRemoveItemFromCart(){
    yield takeEvery('cart/removeFromCartStart', removeItemFromCartWorker)
}

export function* watchSaveShipping(){
    yield takeLatest('cart/cartSaveShippingInit', saveShippingWorker)
}

export function* watchSavePayment(){
    yield takeLatest('cart/cartSavePaymentInit',savePaymentMethod)
}

////Cart rootSaga
export function* rootCartSaga(){
    yield all([
        watchAddToCart(),
        watchRemoveItemFromCart(),
        watchSaveShipping(),
        watchSavePayment()
    ])
}