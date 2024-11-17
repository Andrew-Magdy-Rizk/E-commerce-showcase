import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsReducer";
import cartReducer from "./slices/cartSReducer";
import wishlistReducer from "./slices/wishlistReducer";
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
