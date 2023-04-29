import CartSlice from "./Slices/CartSlice";
import CategoriesSlice from "./Slices/CategoriesSlice";
import ProductSlice from "./Slices/ProductSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    categories: CategoriesSlice,
    cart: CartSlice,
  },
});
