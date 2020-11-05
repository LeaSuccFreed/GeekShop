import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: {},
    loading: false,
    error: false,
    successSave: false,
}
const createProductSlice = createSlice({
    name: 'createProduct',
    initialState,
    reducers:{
        productSaveRequest: (state) => {
            state.loading = true;
        },
        productSaveSuccess: (state, {payload}) => {
            state.product = payload;
            state.loading = false;
            state.successSave = true;
        },
        productSaveFail: (state, {payload}) => {
            state.loading= false;
            state.error = payload;
        }
    }
})

export const {productSaveRequest, productSaveSuccess, productSaveFail} = createProductSlice.actions
export default createProductSlice.reducer;