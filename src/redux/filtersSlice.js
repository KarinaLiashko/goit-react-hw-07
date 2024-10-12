import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  status: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.searchTerm = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter, setStatus } = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
