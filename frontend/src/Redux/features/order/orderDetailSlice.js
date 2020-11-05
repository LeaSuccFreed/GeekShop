import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    loading: true,
}

const orderDetailsSlice = createSlice({
    name: 'orderDetail',
    initialState,
    reducers: {
        detailOrderRequest: (state) => {
            state.loaing = true;
        },
        orderDetailSuccess: (state, {payload}) => {
            state.loading = false;
            state.order = payload;
        },
        orderDetailsFail: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }
    }
})

export const  {detailOrderRequest, orderDetailSuccess, orderDetailsFail} = orderDetailsSlice.actions;

export default orderDetailsSlice.reducer;