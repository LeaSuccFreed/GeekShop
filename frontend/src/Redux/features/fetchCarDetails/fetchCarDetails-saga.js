import Axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'
import { fetchDetailsSuccess } from './fetchCarDetails'

////WorkerSaga////
function* fetchCarDetails({payload}){
    console.log(payload)
    const carDetails = yield Axios.get(`/api/products/${payload}`)
    yield put(fetchDetailsSuccess(carDetails.data))
}

////WorkerSaga
export function* watchFetchCarDetails(){
    yield takeLatest('carDetails/fetchDetailStart', fetchCarDetails)
}
