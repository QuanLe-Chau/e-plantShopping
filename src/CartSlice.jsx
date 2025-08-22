import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const newItem = action.payload; // expects plant details (e.g., { name, price })
        const existingItem = state.items.find(item => item.name === newItem.name);

        if (existingItem) {
        // If item already in cart, just increase quantity
            existingItem.quantity += 1;
        } else {
            // Otherwise add as new item with quantity = 1
            state.items.push({ ...newItem, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        const itemName = action.payload; // expects the plant name
        state.items = state.items.filter(item => item.name !== itemName);
    },

    updateQuantity: (state, action) => {
        const { name, amount } = action.payload; // expects { name, amount }
        const existingItem = state.items.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity = amount;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
