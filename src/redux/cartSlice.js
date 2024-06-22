import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const selectedItem = state.items.find(item => item.id === action.payload.id);

      if (selectedItem) {
        if (selectedItem.amount < selectedItem.quantity) {
          alert("item has been added to cart");
          selectedItem.amount++;
        } else {
          selectedItem.maxReached = true;
        }
      } else {
        if (action.payload.amount <= action.payload.quantity) {
          alert("item has been added to cart");
          state.items.push({ ...action.payload, amount: 1, maxReached: false });
        } else {
          state.items.push({ ...action.payload, amount: 1, maxReached: true });
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementAmount: (state, action) => {
      const selectedItem = state.items.find(item => item.id === action.payload.id);

      if (selectedItem && selectedItem.amount < selectedItem.quantity) {
        selectedItem.amount++;
        selectedItem.maxReached = false;
      } else {
        selectedItem.maxReached = true;
      }
    },
    decrementAmount: (state, action) => {
      const selectedItem = state.items.find(item => item.id === action.payload.id);
      
      if (selectedItem && selectedItem.amount > 1) {
        selectedItem.amount--;
        selectedItem.maxReached = false;
      }
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addItem, removeItem, clearCart, incrementAmount, decrementAmount } = cartSlice.actions;

export default cartSlice.reducer;
