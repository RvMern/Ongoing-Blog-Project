import {createSlice} from '@reduxjs/toolkit'

const adminSlice = createSlice({
    name:'ADMIN',
    initialState:{
        loggedIn:false,
        admin:null,
        profile:null
    },
    reducers:{
        loginAction:(state,action)=>{},
        logoutAction:(state,action)=>{},
        profileAction:(state,action)=>{},
        updateProfileAction:(state,action)=>{}
    }
});


export const {loginAction, logoutAction, profileAction, updateProfileAction } = adminSlice.actions; 

export const adminReducer = adminSlice.reducer;