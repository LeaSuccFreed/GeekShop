import { createSlice } from '@reduxjs/toolkit'
const orderDeleteSlice = createSlice({
    name: 'orderDelete',
    initialState: {},
    reducers: {
        orderDeleteRequest: (state) => {
            state.loading = true;
        },
        orderDeleteSuccess: (state) => {
            state.loading = false;
            state.success = true;
        },
        orderDeleteFail: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        orderDeleteReset: () => {
            return {};
        }
    }
})

export const {orderDeleteRequest, orderDeleteSuccess, orderDeleteFail, orderDeleteReset} = orderDeleteSlice.actions

export default orderDeleteSlice.reducer