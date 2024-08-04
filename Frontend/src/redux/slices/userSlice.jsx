import {createSlice} from '@reduxjs/toolkit';



const userSlice = createSlice({
    name : 'USER',
    initialState:{
        loggedIn:false,
        user:null
    },
    reducers:{
        loginUserAction:(state,action)=>{},

        logoutUserAction:(state,action)=>{},

        createUserAction:(state,action)=>{},

        updateUserAction:(state,action)=>{},

        deleteUserAction:(state,action)=>{}
    }
});


export const {loginUserAction,logoutUserAction, createUserAction, updateUserAction, deleteUserAction} = userSlice.actions;

export const userReducer = userSlice.reducer;