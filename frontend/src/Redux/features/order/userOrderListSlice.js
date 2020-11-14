import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: [],
    loading: false,
    error: false,
}

const userOrderListSlice = createSlice({
    name: 'userOrderList',
    initialState,
    reducers: {
        userOrderListRequest: (state) => {
            state.loading = true;
        },
        userOrderListSuccess: (state, {payload}) => {
            state.loading = false;
            state.orders = payload;
        },
        userOrderListFail: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        } 
    }
})

export const {userOrderListRequest, userOrderListSuccess, userOrderListFail} = userOrderListSlice.actions

export default userOrderListSlice.reducer