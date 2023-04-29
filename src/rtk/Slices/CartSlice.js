import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const cloneProduct = { ...action.payload, quantity: 1 };
        state.push(cloneProduct);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
    add: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      }
    },
    sub: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        if (findProduct.quantity > 1) {
          findProduct.quantity -= 1;
        } else {
          return state.filter((product) => product.id !== action.payload.id);
        }
      }
    },
  },
  clear: (state, action) => {
    return [];
  },
});

export const { addToCart, deleteFromCart, clear, add, sub } = cartSlice.actions;

export default cartSlice.reducer;
