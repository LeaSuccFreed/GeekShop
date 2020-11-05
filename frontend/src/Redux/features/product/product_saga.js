import Axios from 'axios';
import Cookie from 'js-cookie';
import {put, takeLatest, all, select} from 'redux-saga/effects';
import { productSaveFail, productSaveSuccess } from './createProductslice';
import { productDeleteFail, productDeleteSuccess } from './deleteProductSlice';

const getSignInUserData = state => state.signin

////Worker////

function* saveProductWorker({payload}){
    try {
        const {userInfo} = yield select(getSignInUserData)
        console.log(userInfo.token)
        if(!payload._id){
            const {data} = yield Axios.post('/api/products', payload, {headers: {
                Authorization: 'Bearer ' + userInfo.token
            }})
            yield put(productSaveSuccess(data))
        } else{
            const {data} = yield Axios.put(`/api/products/${payload._id}`, payload, {headers: {
                Authorization: 'Bearer ' + userInfo.token
            }})
            yield put(productSaveSuccess(data))
        }
    } catch (error) {
        yield put(productSaveFail(error.message))
    }
}

function* deleteProductWorker({payload}){
    console.log(payload)
    try {
        const {userInfo} = yield select(getSignInUserData)
        const {data} = yield Axios.delete(`/api/products/${payload._id}`, {headers: {
            Authorization: 'Bearer ' + userInfo.token
        }
        })
        yield put(productDeleteSuccess(data))
    } catch (error) {
        yield put(productDeleteFail(error.message))
    }
}

////Watcher////

function* saveProductWatcher(){
    yield takeLatest('createProduct/productSaveRequest', saveProductWorker)
}

function* deleteProductWatcher(){
    yield takeLatest('productDelete/productDeleteRequest', deleteProductWorker)
}


 export function* rootProductsaga(){
    yield all([
        saveProductWatcher(),
        deleteProductWatcher(),
    ])
}