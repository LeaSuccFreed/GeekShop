import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: [],
    loading: false,
    error: false,
}

export const fetchCarsSlice = createSlice({
    name: 'fetchCars',
    initialState,
    reducers: {
        fetchStart: state => {
            state.loading = true;
            state.data = [];
        },
        fetchSuccess: (state, {payload}) => {
            state.data = payload;
            state.loading = false;
        },
        fetchFailure: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }
    }
})

export const {fetchStart, fetchSuccess, fetchFailure} = fetchCarsSlice.actions
export default fetchCarsSlice.reducer