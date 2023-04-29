import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "productsSlice/getProducts",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  }
);
export const getProductsCategories = createAsyncThunk(
  "productsSlice/getProductsCategories",
  async (category) => {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await res.json();
    return data.products;
  }
);

export const searchProduct = createAsyncThunk(
  "productsSlice/searchProduct",
  async (word) => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${word}`);
    const data = await res.json();
    return data.products;
  }
);

export const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, actions) => {
      return actions.payload;
    });
    builder.addCase(getProductsCategories.fulfilled, (state, actions) => {
      return actions.payload;
    });
    builder.addCase(searchProduct.fulfilled, (state, actions) => {
      return actions.payload;
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
