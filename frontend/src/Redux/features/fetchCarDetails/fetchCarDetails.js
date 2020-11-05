import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carDetails: {},
    loading: false,
    error: false,
}
const fetchCarDetails = createSlice({
    name: 'carDetails',
    initialState,
    reducers:{
        fetchDetailStart: (state) => {
            state.loading = true;
        },
        fetchDetailsSuccess: (state, {payload}) => {
            state.carDetails = payload;
            state.loading = false;
        },
        fetchDetailFailure: (state, {payload}) => {
            state.loading= false;
            state.error = payload;
        }
    }
})

export const {fetchDetailStart, fetchDetailsSuccess, fetchDetailFailure} = fetchCarDetails.actions
export default fetchCarDetails.reducer;