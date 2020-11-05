import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
const userInfo = Cookie.getJSON("userInfo" || null)

const initialState = {
    signinInit: false,
    signinFailure: false,
    userInfo,
}

const userRegisterReducer = createSlice({
    name: 'registerSlice',
    initialState,
    reducers: {
        userRegisterInit: (state) => {
            state.signinInit = true;
        },
        userRegisterSuccess: (state, {payload}) => {
            state.signinInit = false;
            state.userInfo = payload;
        },
        userRegisterFailure: (state, {payload}) => {
            state.signinFailure = payload;
            state.signinInit = false;
        },
    }
})

export const {userRegisterFailure, userRegisterSuccess, userRegisterInit} = userRegisterReducer.actions

export default userRegisterReducer.reducer