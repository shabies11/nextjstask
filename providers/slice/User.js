
import { createSlice } from "@reduxjs/toolkit";

export const User = createSlice({
    name: 'User',
    initialState: {
        user:[]
    },
    reducers: {
        setUser:(state, action)=>{
            state.user = action.payload;
        }
    }
});

export const { setUser } = User.actions;