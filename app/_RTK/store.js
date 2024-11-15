import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsReducer";
import cartReducer from "./slices/cartSReducer";
import categoriesReducer from "./slices/categoryReducer";
import wishlistReducer from "./slices/wishlistReducer";
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
