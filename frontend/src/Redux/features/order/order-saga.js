import Axios from 'axios';
import {put, takeLatest, all, select, takeEvery, takeLeading} from 'redux-saga/effects';
import Cookie from 'js-cookie';
import { createOrderFail, createOrderRequest, createOrderSuccess } from './orderSlice';
import { cartEmpty } from '../cart/cart_redux';
import { orderDetailsFail, orderDetailSuccess } from './orderDetailSlice';
import { orderPayFail, orderPaySuccess } from './orderPaySlice';
import { userOrderListFail, userOrderListSuccess } from './userOrderListSlice';
import {orderListSuccess, orderListFail} from './orderListSlice';
import { orderDeleteSuccess, orderDeleteFail } from './orderDeleteSlice';
import { orderDeliverFail, orderDeliverSuccess } from './orderDeliverSlice';

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
    try {
        const { data } = yield Axios.get(`/api/orders/${payload}`, { headers: {
            Authorization: `Bearer ${userInfo.token}`
        } })
        console.log(data);
        yield put(orderDetailSuccess(data))
    } catch (error) {
        const message = 
            error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message;
           yield put(orderDetailsFail(message))
    }
}

function* payOrderWorker({payload}){
    const {order, paymentResult} = payload
    const {userInfo} = yield select(getUserInfo);
    try {
        const {data} = yield Axios.put(`/api/orders/${order._id}/pay`, paymentResult, { headers:{
            Authorization: `Bearer ${userInfo.token}`
        }})
        yield put(orderPaySuccess(data))
    } catch (error) {
        const message = 
        error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message;
            yield put(orderPayFail(message))
    }
}

function* userOrderListWorker(){
    const {userInfo} = yield select(getUserInfo);
    try {
        const {data} = yield Axios.get('/api/orders/user', {headers: {
            Authorization: `Bearer ${userInfo.token}`
        }})
        yield put(userOrderListSuccess(data))
    } catch (error) {
        const message = 
            error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message;
        yield put(userOrderListFail(message))
    }
}

function* listOrdersWorker(){
    const {userInfo} = yield select(getUserInfo);
    try {
        const {data} = yield Axios.get('/api/orders',{headers: {
            Authorization: `Bearer ${userInfo.token}`
        }});
        yield put(orderListSuccess(data))
    } catch (error) {
        const message = 
            error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message;
        yield put(orderListFail(message))
    }
}

function* deleteOrderWorker({payload}) {
    const {userInfo} = yield select(getUserInfo);

    try {
       const {data} = yield Axios.delete(`/api/orders/${payload}`, {headers: {
           Authorization: `Bearer ${userInfo.token}`
       }})

       yield put(orderDeleteSuccess(data))
    } catch (error) {
        const message = 
            error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message;
        yield put(orderDeleteFail(message))
    }
}

function* orderDeliverWorker({payload}){
    const {userInfo} = yield select(getUserInfo);

    try {
        const {data} = yield Axios.put(`/api/orders/${payload}/deliver`, {},{headers: {
            Authorization: `Bearer ${userInfo.token}`
        }})
        yield put(orderDeliverSuccess(data));
    } catch (error) {
        const message = 
            error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message;
        yield put(orderDeliverFail(message))
    }
}

//////Watcher's///////////////////////////////////////////////////////////

function* createOrderWatcher(){
    yield takeLatest('createOrder/createOrderRequest', createOrderWorker)
}

function* detailsOrderWatcher(){
    yield takeLeading('orderDetail/detailOrderRequest', detailsOrderWorker)
}

function* payOrderWatcher(){
    yield takeLeading('orderPay/orderPayRequest', payOrderWorker)
}

function* userOrderListWatcher(){
    yield takeLatest('userOrderList/userOrderListRequest', userOrderListWorker)
}

function* listOrdersWatcher(){
    yield takeLatest('orderList/orderListRequest', listOrdersWorker)
}

function* deleteOrderWatcher(){
    yield takeLatest('orderDelete/orderDeleteRequest', deleteOrderWorker)
}

function* orderDeliverWatcher(){
    yield takeLatest('orderDeliver/orderDeliverRequest', orderDeliverWorker)
}

/////rootOrdersaga//////////////////////////////////////////////////////////////////
export function* createOrderRootSaga(){
    yield all([
        createOrderWatcher(),
        detailsOrderWatcher(),
        payOrderWatcher(),
        userOrderListWatcher(),
        listOrdersWatcher(),
        deleteOrderWatcher(),
        orderDeliverWatcher(),
    ])
}