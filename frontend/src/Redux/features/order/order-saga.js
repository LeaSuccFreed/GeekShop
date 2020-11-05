import Axios from 'axios';
import {put, takeLatest, all, select} from 'redux-saga/effects';
import Cookie from 'js-cookie'
import { createOrderFail, createOrderRequest, createOrderSuccess } from './orderSlice';
import { cartEmpty } from '../cart/cart_redux'
import { orderDetailsFail, orderDetailSuccess } from './orderDetailSlice';

 const getUserInfo = state => state.signin

function* createOrderWorker({payload}){
    const {userInfo} = yield select(getUserInfo);
    try {
        const {data} = yield Axios.post('/api/orders', payload, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        yield put(createOrderSuccess(data.order))
        yield put(cartEmpty())
        Cookie.remove('itemsCart');
    } catch (error) {
        yield put(createOrderFail(error.response && error.response.data.message ? error.response.data.message : error.message))
    }
}

function* detailsOrderWorker({payload}){
    const {userInfo} = yield select(getUserInfo);
    console.log(userInfo.token);
    try {
        const { data } = yield Axios.get(`/api/orders/${payload}`, { headers: {
            Authorization: `Bearer ${userInfo.token}`
        } })
        yield put(orderDetailSuccess(data))
    } catch (error) {
        const message = 
            error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message;
            put(orderDetailsFail(message))
    }
}

function* createOrderWatcher(){
    yield takeLatest('createOrder/createOrderRequest', createOrderWorker)
}

function* detailsOrderWatcher(){
    yield takeLatest('orderDetail/detailOrderRequest', detailsOrderWorker)
}

export function* createOrderRootSaga(){
    yield all([
        createOrderWatcher(),
        detailsOrderWatcher(),
    ])
}