import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk(
  "categoriesSlice/getAllCategories",
  async () => {
    const res = await fetch(`https://dummyjson.com/products/categories`);
    const data = await res.json();
    return data;
  }
);

export const categoriesSlice = createSlice({
  initialState: [],
  name: "categoriesSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, actions) => {
      return actions.payload;
    });
  },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
