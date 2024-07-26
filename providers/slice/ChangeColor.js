import { createSlice } from "@reduxjs/toolkit";
export const ChangeColor = createSlice({
    name: "changeColor",
    initialState: { color: "red" },
    reducers: {
        changeColorTo: (state, action) => {
            state.color = 'black'
        },
    },
});

export const {changeColorTo} = ChangeColor.actions;