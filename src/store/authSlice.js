import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    userData: null,
    userDetails: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
        addDetails: (state, action) => {
            state.userDetails = action.payload
        },
        removeDetails: (state) => {
            state.userDetails = null;
        }
    }
})

export const {login, logout, addDetails, removeDetails} = authSlice.actions;

export default authSlice.reducer;