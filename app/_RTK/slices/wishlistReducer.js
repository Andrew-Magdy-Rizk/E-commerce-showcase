const { createSlice } = require("@reduxjs/toolkit");

const wishlistReducer = createSlice({
  initialState: [],
  name: "wishlistReducer",
  reducers: {
    addToWishlist: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!findProduct) {
        state.push(action.payload);
      } else {
        state.pop(action.payload);
      }
      return state;
    },
  },
});

export const { addToWishlist } = wishlistReducer.actions;
export default wishlistReducer.reducer;
