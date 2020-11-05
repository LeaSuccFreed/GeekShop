import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carDetails: {},
    loadingToDelete: false,
    errorFromDeletion: false,
    successDelete: false,
}
const productDeleteSlice = createSlice({
    name: 'productDelete',
    initialState,
    reducers:{
        productDeleteRequest: (state) => {
            state.loadingToDelete = true;
        },
        productDeleteSuccess: (state, {payload}) => {
            state.carDetails = payload;
            state.loadingToDelete = false;
            state.successDelete = true;
        },
        productDeleteFail: (state, {payload}) => {
            state.loadingToDelete= false;
            state.errorFromDeletion = payload;
        }
    }
})

export const {productDeleteRequest, productDeleteSuccess, productDeleteFail} = productDeleteSlice.actions
export default productDeleteSlice.reducer;