import { createSlice, current } from '@reduxjs/toolkit'
const orderPaySlice = createSlice({
    name: 'orderPay',
    initialState: {},
    reducers: {
        orderPayRequest: (state) => {
            state.loading = true;
        },
        orderPaySuccess: (state) => {
            state.loading = false;
            state.success = true;
        },
        orderPayFail: (state, {payload}) => {
            state.loading = false;
            state.error = payload
        },
        orderPayReset: () => {
            return {};
        }
    }
})

export const {orderPayRequest, orderPaySuccess, orderPayFail, orderPayReset} = orderPaySlice.actions

export default orderPaySlice.reducer