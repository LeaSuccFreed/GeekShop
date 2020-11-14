import axios from 'axios'
import { detach } from 'redux-saga';
import {put, takeEvery, takeLatest, takeLeading} from 'redux-saga/effects'
import { fetchFailure, fetchSuccess } from './fetchCars';

////Worker Saga////

function* fetchCars(){
    try {
        const dt = yield axios.get("/api/products");
        const {data} = dt;
        yield put(fetchSuccess(data))
    } catch (error) {
        yield put(fetchFailure(error))
    }
   
}

////Watcher Saga///

export function* watchFetchCars(){
    yield takeLeading('fetchCars/fetchStart', fetchCars)
}
