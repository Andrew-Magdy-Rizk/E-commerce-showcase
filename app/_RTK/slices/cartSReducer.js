const { createSlice } = require("@reduxjs/toolkit");

const cartReducer = createSlice({
  initialState: [],
  name: "cartReducer",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!findProduct) {
        state.push(action.payload);
      } else {
        findProduct.quantity += 1;
      }
      return state;
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const cart = state.find((item) => item.id === action.payload.id);
      cart.quantity += 1;
      return state;
    },
    decrementQuantity: (state, action) => {
      const cart = state.find((item) => item.id === action.payload.id);
      if (cart.quantity > 1) {
        cart.quantity -= 1;
      } else {
        return console.log("quantity must be greater than 0");
      }
      return state;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartReducer.actions;
export default cartReducer.reducer;
