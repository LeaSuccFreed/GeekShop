import { createSlice } from '@reduxjs/toolkit'


const initialState ={ 
    loadingOrder: false,
    errorOrder: false,
    order: [],
    orderSuccess: false,
}

const createOrderSlice = createSlice({
    name: 'createOrder',
    initialState,
    reducers: {
        createOrderRequest: (state) => {
            state.loadingOrder = true
        },
        createOrderSuccess: (state, {payload}) => {
            state.loadingOrder = false;
            state.order = payload;
            state.orderSuccess = true;
        },
        createOrderFail: (state, {payload}) => {
            state.loadingOrder = false;
            state.errorOrder = payload;
        },
        createOrderResetInit: state => {
            state.resetOrderInit = false
        },
        createOrderReset: (state) => {
            state.loadingOrder = false;
            state.errorOrder = false;
            state.success = false;
            state.order = [];
        }
    }
})

export const {createOrderRequest, createOrderSuccess, createOrderFail, createOrderReset} = createOrderSlice.actions

export default createOrderSlice.reducer