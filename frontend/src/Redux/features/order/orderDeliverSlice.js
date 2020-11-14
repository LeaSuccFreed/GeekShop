import { createSlice } from '@reduxjs/toolkit'
const orderDeliverSlice = createSlice({
    name: 'orderDeliver',
    initialState: {},
    reducers: {
        orderDeliverRequest: (state) => {
            state.loading = true;
        },
        orderDeliverSuccess: (state) => {
            state.loading = false;
            state.success = true;
        },
        orderDeliverFail: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        orderDeliverReset: () => {
            return {};
        }
    }
})

export const {orderDeliverRequest, orderDeliverSuccess, orderDeliverFail, orderDeliverReset} = orderDeliverSlice.actions;
export default orderDeliverSlice.reducer;