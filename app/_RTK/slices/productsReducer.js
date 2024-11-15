const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProducts = createAsyncThunk(
  "productsreducer/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return products;
  }
);
const productsReducer = createSlice({
  initialState: [],
  name: "productsReducer",
  reducers: {
    filterProduct: (state, action) => {
      return state.filter(
        (product) =>
          product?.category === action.payload?.category &&
          product?.id !== action.payload?.id
      );
    },
    filterCategories: (state, action) => {
      return state.filter(
        (product) =>
          product?.category === action.payload ||
          action.payload === "All Products"
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const { filterProduct, filterCategories } = productsReducer.actions;
export default productsReducer.reducer;
