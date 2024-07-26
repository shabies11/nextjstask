import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((i) => i.id !== action.payload);
        },
        incrementQuantity: (state, action) => {
            const existingItem = state.items.find((i) => i.id === action.payload);
            if (existingItem) {
                existingItem.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const existingItem = state.items.find((i) => i.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
            } else if (existingItem) { 
                state.items = state.items.filter((i) => i.id !== action.payload);
            }
        },
    }
});

// Export actions
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
