const { createSlice } = require("@reduxjs/toolkit");

const orderListSlice = createSlice({
    name: 'orderList',
    initialState: {
        orders: []
    },
    reducers: {
        orderListRequest: (state) => {
            state.loading = true;
        },
        orderListSuccess: (state, {payload}) => {
            state.loading = false;
            state.orders = payload;
        },
        orderListFail: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }
    }
})

export const {orderListRequest, orderListSuccess, orderListFail} = orderListSlice.actions

export default orderListSlice.reducer