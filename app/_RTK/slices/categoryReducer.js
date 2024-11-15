const { createSlice } = require("@reduxjs/toolkit");

const categoriesReducer = createSlice({
  initialState: [],
  name: "categoriesReducer",
  reducers: {
    getCategoies: (state, action) => {
      return action.payload;
    },
  },
});

export const { getCategoies } = categoriesReducer.actions;
export default categoriesReducer.reducer;
