import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
const userInfo = Cookie.getJSON("userInfo" || null)

// const initialState = {
//     signinInit: false,
//     signinFailure: false,
//     userInfo,
// }

const userUpdateProfileSlice = createSlice({
    name: 'userUpdateProfile',
    initialState: {},
    reducers: {
        userUpdateProfileRequest: (state) => {
            state.loading = true;
        },
        usetProfileUpdateSuccess: (state, {payload}) => {
            state.loading = false;
            state.success = true
        },
        userUpdateProfileFail: (state, {payload}) => {
            state.error = payload;
            state.loading = false;
        },
        userUpdateProfileReset: () => {
            return {}
        },
    }
})

export const {userUpdateProfileRequest, usetProfileUpdateSuccess, userUpdateProfileFail, userUpdateProfileReset} = userUpdateProfileSlice.actions

export default userUpdateProfileSlice.reducer