import { createSlice } from '@reduxjs/toolkit'

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: {
        loading: true,
    },
    reducers: {
        userDetailsRequest: (state) => {
            state.loading = true;
        },
        userDetailsSuccess: (state, {payload}) => {
            state.loading = false;
            state.user = payload
        },
        userDetailsFail: (state, {payload}) => {
            state.error = payload;
            state.loading = false;
        },
    }
})

export const {userDetailsRequest, userDetailsSuccess, userDetailsFail} = userDetailsSlice.actions
export default userDetailsSlice.reducer