import { configureStore } from "@reduxjs/toolkit"; 
import {User } from "./slice/User";
import  { CartSlice } from "./slice/CartSlice";
export const store = configureStore({
    reducer: { 
        'user':User.reducer,
        'cart':CartSlice.reducer,
    },  
});