import axios from 'axios'
import {put, takeLeading} from 'redux-saga/effects'
import { fetchFailure, fetchSuccess } from './fetchComics';

////Worker Saga////

function* fetchComics(){
    try {
        const dt = yield axios.get("/api/products");
        const {data} = dt;
        yield put(fetchSuccess(data))
    } catch (error) {
        yield put(fetchFailure(error))
    }
   
}

////Watcher Saga///

export function* watchFetchComics(){
    yield takeLeading('fetchComics/fetchStart', fetchComics)
}
