import Axios from 'axios'
import { userSigninFailure, userSigninSuccess, userSignOut } from './signinSlice';
import Cookie from 'js-cookie'
import {put, takeLatest, all} from 'redux-saga/effects'
import { userRegisterFailure, userRegisterSuccess } from './registerSlice';

////worker////
function* signinWorker({payload}){
    const {name, email, password} = payload;
    try {
        const {data} = yield Axios.post("/api/users/signin", {name, email, password});
        yield put(userSigninSuccess(data));
        Cookie.set('userInfo', JSON.stringify(data));
        
    } catch (error) {
        yield put(userSigninFailure(error.message));
    }
}

function* registerWorker({payload}){
    const {name, email, password} = payload;
    console.log(payload)
    try {
        const {data} = yield Axios.post("/api/users/register", {name, email, password});
        yield put(userRegisterSuccess(data));
        Cookie.set('userInfo', JSON.stringify(data));
        
    } catch (error) {
        yield put(userRegisterFailure(error.message));
    }
}

function* signOutWorker(){
    Cookie.remove('userInfo');
    Cookie.remove('itemsCart');
    Cookie.remove('shippingInfo');
    yield put(userSignOut());
}

////watcher////

export function* signinWatcher(){
    yield takeLatest("signinSlice/userSigninInit", signinWorker)
}

function* registerWatcher(){
    yield takeLatest("registerSlice/userRegisterInit", registerWorker)
}

function* signOutWatcher(){
    yield takeLatest('signinSlice/userSignOutInit', signOutWorker)
}

////root////
export function* rootUserSaga(){
    yield all([
        signinWatcher(),
        registerWatcher(),
        signOutWatcher(),
    ])
}