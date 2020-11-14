import Axios from 'axios'
import { userSigninFailure, userSigninSuccess, userSignOut } from './signinSlice';
import Cookie from 'js-cookie'
import {put, takeLatest, all, select, takeEvery} from 'redux-saga/effects'
import { userRegisterFailure, userRegisterSuccess } from './registerSlice';
import { userDetailsFail, userDetailsSuccess } from './userDetailsSlice';
import { userUpdateProfileFail, usetProfileUpdateSuccess } from './userUpdateProfileSlice';

const getUserInfo = state => state.signin

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

function* detailsUserWorker({payload}){
    const {userInfo} = yield select(getUserInfo);
    try {
        const {data} = yield Axios.get(`./api/users/${payload}`, {headers:{
            Authorization: `Bearer ${userInfo.token}`
        }})

        yield put(userDetailsSuccess(data))
    } catch (error) {
        const message = error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message;
        yield put(userDetailsFail(message))
    }
}

function* updateUserProfileWorker({payload}){
    const {userInfo} = yield select(getUserInfo);
    try {
        const {data} = yield Axios.put('/api/users/profile', payload, {headers: {
            Authorization: `Bearer ${userInfo.token}`
        }})
        yield put(usetProfileUpdateSuccess(data));
        yield put(userSigninSuccess(data));
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        const message = error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message;
        yield put(userUpdateProfileFail(message))
    }
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

function* detailsUserWatcher(){
    yield takeEvery(`userDetails/userDetailsRequest`, detailsUserWorker)
}

function* updateUserProfileWatcher(){
    yield takeLatest('userUpdateProfile/userUpdateProfileRequest', updateUserProfileWorker)
}

////root////
export function* rootUserSaga(){
    yield all([
        signinWatcher(),
        registerWatcher(),
        signOutWatcher(),
        detailsUserWatcher(),
        updateUserProfileWatcher(),
    ])
}