import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
const userInfo = Cookie.getJSON("userInfo" || null)

const initialState = {
    signinInit: false,
    signinFailure: false,
    signOutInit: false,
    userInfo,
}

const userSigninReducer = createSlice({
    name: 'signinSlice',
    initialState,
    reducers: {
        userSigninInit: (state) => {
            state.signinInit = true;
        },
        userSigninSuccess: (state, {payload}) => {
            state.signinInit = false;
            state.userInfo = payload;
        },
        userSigninFailure: (state, {payload}) => {
            state.signinFailure = payload;
            state.signinInit = false;
        },
        userSignOutInit: (state) => {
            state.signOutInit = true;
        },
        userSignOut: (state) => {
            state.userInfo = {};
        }
    }
})

export const {userSigninFailure, userSigninSuccess, userSigninInit, userSignOut, userSignOutInit} = userSigninReducer.actions

export default userSigninReducer.reducer