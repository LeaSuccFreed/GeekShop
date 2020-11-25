import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: [],
    loading: false,
    error: false,
}

export const fetchComicsSlice = createSlice({
    name: 'fetchComics',
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

export const {fetchStart, fetchSuccess, fetchFailure} = fetchComicsSlice.actions
export default fetchComicsSlice.reducer