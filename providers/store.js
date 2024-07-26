import { configureStore } from "@reduxjs/toolkit";
import {ChangeColor } from "./slice/ChangeColor";
import {User } from "./slice/User";
import  { CartSlice } from "./slice/CartSlice";
export const store = configureStore({
    reducer: {
        'changeColor':ChangeColor.reducer,
        'user':User.reducer,
        'cart':CartSlice.reducer,
    },  
});