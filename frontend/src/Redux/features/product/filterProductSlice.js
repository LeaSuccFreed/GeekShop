import { createSlice } from '@reduxjs/toolkit'

const filterProductSlice = createSlice({
    name: 'filterProduct',
    initialState: {
        success: false,
        data: [],
    },
    reducers:{
        productFilterRequest: (state) => {
            state.loading = true;
        },
        productFilterSuccess: (state, {payload}) => {
            state.data = payload;
            state.loading = false;
            state.success = true;
        },
        productFilterFail: (state, {payload}) => {
            state.loading= false;
            state.error = payload;
        },
        productFilterReset: (state)=> {
            state.success = false;
            state.data = [];
        }
    }
})

export const {productFilterRequest, productFilterSuccess, productFilterFail, productFilterReset} = filterProductSlice.actions;

export default filterProductSlice.reducer;