import Axios from 'axios';
import Cookie from 'js-cookie';
import {put, takeLatest, all, select, takeEvery} from 'redux-saga/effects';
import { productSaveFail, productSaveSuccess } from './createProductslice';
import { productDeleteFail, productDeleteSuccess } from './deleteProductSlice';
import { productFilterFail, productFilterSuccess } from './filterProductSlice';

const getSignInUserData = state => state.signin

////Worker////////////////////////////////////////////////

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

function* productFilterWork({payload}){
    try {
        console.log(payload)
        const {products, brand} = payload
        const data = products.data.filter(product => product.brand.toLowerCase() === brand);
        console.log(products)
        yield put(productFilterSuccess(data))
    } catch (error) {
        yield put(productFilterFail(error))
    }
}

////Watcher//////////////////////////////////////////////////

function* saveProductWatcher(){
    yield takeLatest('createProduct/productSaveRequest', saveProductWorker)
}

function* deleteProductWatcher(){
    yield takeLatest('productDelete/productDeleteRequest', deleteProductWorker)
}

function* filterProductsWarcher(){
    yield takeEvery('filterProduct/productFilterRequest', productFilterWork)
}


 export function* rootProductsaga(){
    yield all([
        saveProductWatcher(),
        deleteProductWatcher(),
        filterProductsWarcher(),
    ])
}