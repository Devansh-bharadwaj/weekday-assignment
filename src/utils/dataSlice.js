import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "Jobs",
  initialState: {
    allData: null,
    filteredData: null,
    selectedValues: null,
  },
  reducers: {
    addAllData: (state, action) => {
      state.allData = action.payload;
      state.filteredData = action.payload;
    },
    selectedAllValues: (state, action) => {
      state.selectedValues = action.payload;
    },
  },
});

export const { addAllData, filterData, selectedAllValues } = dataSlice.actions;
export default dataSlice.reducer;
